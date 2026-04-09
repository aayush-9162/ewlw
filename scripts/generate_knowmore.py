import sys, re, os, json
sys.stdout.reconfigure(encoding='utf-8')
from docx import Document

folder = r'c:\Users\aayus\Downloads\Habit Note-Please Ignore the Posters attached'
out_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data', 'knowMoreData.js')

files_list = os.listdir(folder)
file_map = {}

for f in files_list:
    if not f.endswith('.docx') or f.startswith('~'):
        continue
    m = re.match(r'(?:HABIT|Habit)\s+(\d+)', f, re.IGNORECASE)
    if m:
        file_map[int(m.group(1)) - 1] = os.path.join(folder, f)
        continue
    m = re.match(r'LIFE SKILL\s+(\d+)', f, re.IGNORECASE)
    if m:
        file_map[20 + int(m.group(1))] = os.path.join(folder, f)
        continue
    m = re.match(r'SUSTAIN\s+(?:SKILL|Skill)\s+(\d+)', f, re.IGNORECASE)
    if m:
        file_map[27 + int(m.group(1))] = os.path.join(folder, f)
        continue

def parse_docx(filepath):
    doc = Document(filepath)
    paragraphs = []
    for p in doc.paragraphs:
        text = p.text.strip()
        if not text:
            continue
        is_bold = bool(p.runs and p.runs[0].bold)
        paragraphs.append((text, is_bold))

    if not paragraphs:
        return None

    # First bold line is the title
    title = paragraphs[0][0] if paragraphs[0][1] else paragraphs[0][0]
    # Remove "Habit X:" prefix
    title = re.sub(r'^(?:Habit|HABIT|LIFE SKILL|SUSTAIN\s*Skill)\s*\d+\s*[:\.]\s*', '', title, flags=re.IGNORECASE).strip()

    sections = []
    current_heading = None
    current_texts = []

    for text, is_bold in paragraphs[1:]:
        # Check if this is a section heading (bold, often starts with number)
        is_heading = is_bold and (
            re.match(r'^\d+[\.\)]?\s', text) or
            len(text) < 120 and not text.endswith('.')
        )

        if is_heading:
            # Save previous section
            if current_heading and current_texts:
                sections.append({
                    'heading': current_heading,
                    'content': current_texts,
                })
            current_heading = re.sub(r'^\d+[\.\)]?\s*', '', text).strip()
            current_texts = []
        else:
            current_texts.append(text)

    # Save last section
    if current_heading and current_texts:
        sections.append({
            'heading': current_heading,
            'content': current_texts,
        })

    # If no sections found, treat the whole thing as one section
    if not sections and len(paragraphs) > 1:
        all_text = [t for t, b in paragraphs[1:]]
        sections = [{'heading': title, 'content': all_text}]

    return {
        'title': title,
        'sections': sections,
    }

# Parse all files
all_data = {}
for idx in sorted(file_map.keys()):
    filepath = file_map[idx]
    result = parse_docx(filepath)
    if result:
        all_data[idx] = result
        print(f"Habit {idx + 1} ({result['title'][:40]}): {len(result['sections'])} sections")
    else:
        print(f"Habit {idx + 1}: EMPTY/FAILED")

# Generate JS file
def escape_js(s):
    return s.replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n').replace('\r', '')

lines = ['// Know More / Habit Note content per habit (keyed by habit index 0-based)']
lines.append('const KNOW_MORE_DATA = {')

for idx in sorted(all_data.keys()):
    data = all_data[idx]
    lines.append(f'  {idx}: {{')
    lines.append(f"    document: {{")
    lines.append(f"      title: '{escape_js(data['title'])}',")
    lines.append(f"      sections: [")
    for sec in data['sections']:
        lines.append(f"        {{")
        lines.append(f"          heading: '{escape_js(sec['heading'])}',")
        # If content has bullet-like items (short lines), use list format
        if len(sec['content']) > 2 and all(len(t) < 100 for t in sec['content'][1:]):
            lines.append(f"          text: '{escape_js(sec['content'][0])}',")
            lines.append(f"          list: [")
            for item in sec['content'][1:]:
                lines.append(f"            '{escape_js(item)}',")
            lines.append(f"          ],")
        else:
            full_text = ' '.join(sec['content'])
            lines.append(f"          text: '{escape_js(full_text)}',")
        lines.append(f"        }},")
    lines.append(f"      ],")
    lines.append(f"    }},")
    lines.append(f"  }},")

lines.append('};')
lines.append('')
lines.append('export default KNOW_MORE_DATA;')
lines.append('')

with open(out_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

print(f"\nGenerated knowMoreData.js with {len(all_data)} habits")
