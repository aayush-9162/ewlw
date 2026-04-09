import sys, base64, io, os
sys.stdout.reconfigure(encoding='utf-8')
from PIL import Image, ImageDraw, ImageFont

img_dir = r'c:\Users\aayus\Downloads'
out_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data')

def load_crop(idx):
    path = os.path.join(img_dir, f'h22_crop_{idx}.png')
    return Image.open(path).convert('RGBA')

docx_imgs = {i: load_crop(i) for i in range(1, 9)}

lessons = [
    {
        'num': 1, 'name': 'My Values',
        'objective': 'Students identify important values that guide their behaviour and decisions.',
        'ask': 'What values do you think are important for living together peacefully in society?',
        'img_after_ask': 1,
        'explain': 'Values are beliefs and principles that guide our actions and decisions. They influence how we behave toward others. Common values include honesty, kindness, respect, fairness, and responsibility.',
        'think': 'Which values help people work together? Why are values important for society?',
        'img_after_think': 2,
        'home': 'Students ask family members which values they consider most important in life.',
        'conversation': 'What values did our family teach us? How do these values help us in daily life?',
        'key_message': 'Values guide our behaviour and help us become responsible members of society.',
    },
    {
        'num': 2, 'name': 'My Behaviour and My Decisions',
        'objective': 'Students understand how their behaviour reflects their values and affects others.',
        'ask': 'How do our daily actions show our values?',
        'explain': 'Our behaviour is influenced by the values we believe in. Everyday actions such as helping others, respecting rules, and being honest reflect the values we hold.',
        'think': 'How can we make decisions that benefit both ourselves and others?',
        'img_after_think': 3,
        'home': 'Students observe one situation where someone behaves responsibly at home or in the community.',
        'conversation': 'Can you share a time when someone\'s behaviour made you feel good? What value was behind it?',
        'key_message': 'Our behaviour reflects our values and influences the people around us.',
    },
    {
        'num': 3, 'name': 'Value-based Decision Making',
        'objective': 'Students learn how values help guide responsible decisions.',
        'ask': 'How do we decide what is the right thing to do?',
        'img_after_ask': 4,
        'explain': 'Decision-making involves thinking about possible actions and their consequences. Values help individuals choose actions that are fair, honest, and responsible.',
        'think': 'Why is it sometimes difficult to make the right decision?',
        'img_after_think': 5,
        'home': 'Students recall a situation where they made a decision based on their values.',
        'conversation': 'How do we handle situations where doing the right thing is not easy?',
        'key_message': 'Values help guide responsible decisions.',
    },
    {
        'num': 4, 'name': 'Real-Life Value Dilemma',
        'objective': 'Students analyse situations where values influence difficult decisions.',
        'ask': 'Have you ever faced a situation where it was difficult to decide what was right?',
        'explain': 'Sometimes individuals face dilemmas where two choices seem possible but only one aligns with ethical values. Discussing such situations helps build the ability to think critically.',
        'think': 'Why is it important to stand by values even when it is difficult?',
        'img_after_think': 6,
        'home': 'Students discuss with family members how they handle difficult decisions.',
        'conversation': 'What advice would you give someone facing a value dilemma?',
        'key_message': 'Values help individuals make responsible choices in challenging situations.',
    },
    {
        'num': 5, 'name': 'Active Citizenship',
        'objective': 'Students understand how individuals can contribute positively to their communities.',
        'ask': 'How can young people contribute to improving their community?',
        'explain': 'Active citizenship involves participating in activities that promote the well-being of society. Even small actions such as keeping surroundings clean, helping others, and saving resources can make a positive difference.',
        'img_after_explain': 7,
        'think': 'What small actions can make our school a better place?',
        'home': 'Students observe how people in their neighbourhood contribute to the community.',
        'conversation': 'What are some ways our family contributes to the community?',
        'key_message': 'Active citizens contribute positively to their community and society.',
    },
    {
        'num': 6, 'name': 'My Pledge for a Better Society',
        'objective': 'Students commit to practising responsible citizenship through everyday actions.',
        'ask': 'What kind of society would you like to live in?',
        'explain': 'A better society is built when individuals act responsibly, respect others, and contribute to the common good. Every person can make a difference through their daily choices and actions.',
        'think': 'How can we practise these pledges in our daily life?',
        'img_after_think': 8,
        'home': 'Students share their pledge with family members and discuss how they can practise it.',
        'conversation': 'What pledge can our family make together for a better community?',
        'key_message': 'Responsible citizenship begins with individual commitment and everyday actions.',
    },
]

W, H = 1241, 1755
M = 35

def mf(name, size):
    fonts = {'b': 'C:/Windows/Fonts/arialbd.ttf', 'r': 'C:/Windows/Fonts/arial.ttf', 'i': 'C:/Windows/Fonts/ariali.ttf'}
    return ImageFont.truetype(fonts[name], size)

FB36 = mf('b', 36); FB28 = mf('b', 28); FB26 = mf('b', 26); FB24 = mf('b', 24)
FB22 = mf('b', 22); FB20 = mf('b', 20); FB18 = mf('b', 18)
FR24 = mf('r', 24); FR22 = mf('r', 22); FR20 = mf('r', 20)

def rrect(d, box, fill, outline=None, r=12, w=2):
    kw = {'radius': r, 'fill': fill}
    if outline: kw['outline'] = outline; kw['width'] = w
    d.rounded_rectangle(box, **kw)

def wrap(d, text, f, mw):
    words = text.split()
    lines, cur = [], ''
    for word in words:
        test = (cur + ' ' + word).strip()
        if d.textbbox((0,0), test, font=f)[2] > mw and cur:
            lines.append(cur); cur = word
        else: cur = test
    if cur: lines.append(cur)
    return lines

def dtxt(d, x, y, text, f, color, mw, lh):
    for line in text.split('\n'):
        for wl in wrap(d, line, f, mw):
            d.text((x, y), wl, fill=color, font=f); y += lh
    return y

def paste_full_width(canvas, pil_img, x, y, mw):
    """Paste image at full available width, maintaining aspect ratio"""
    iw, ih = pil_img.size
    scale = mw / iw
    nw, nh = int(iw * scale), int(ih * scale)
    # Cap max height
    if nh > 400:
        nh = 400
        nw = int(iw * (400 / ih))
    resized = pil_img.resize((nw, nh), Image.LANCZOS)
    cx = x + (mw - nw) // 2
    if resized.mode == 'RGBA': canvas.paste(resized, (cx, y), resized)
    else: canvas.paste(resized, (cx, y))
    return y + nh

tw = W - 2 * M

for L in lessons:
    img = Image.new('RGB', (W, H), '#FFFFFF')
    d = ImageDraw.Draw(img)
    y = 15
    n = L['num']

    # ═══ HEADER ═══
    rrect(d, (0, y, W, y + 68), '#1565C0', r=0)
    rrect(d, (M + 5, y + 12, M + 155, y + 56), '#FFFFFF', r=10)
    d.text((M + 16, y + 18), f'LESSON {n}', fill='#1565C0', font=FB24)
    d.text((M + 170, y + 16), L['name'], fill='#FFFFFF', font=FB36)
    y += 82

    # ═══ OBJECTIVE ═══
    rrect(d, (M, y, W - M, y + 80), '#FFF8E1', outline='#FFC107', r=12)
    d.text((M + 18, y + 10), 'Objective', fill='#F57F17', font=FB24)
    d.rounded_rectangle((M + 140, y + 10, M + 168, y + 38), radius=5, fill='#FFC107')
    d.text((M + 146, y + 12), 'P', fill='#FFF', font=FB20)
    dtxt(d, M + 18, y + 44, L['objective'], FR22, '#333333', tw - 36, 28)
    y += 94

    # ═══ LESSON STEPS BANNER ═══
    bw = 340; bx = (W - bw) // 2
    rrect(d, (bx, y, bx + bw, y + 44), '#C62828', r=22)
    d.text((bx + 65, y + 9), 'Lesson Steps', fill='#FFFFFF', font=FB28)
    y += 58

    # ═══ ASK STUDENTS (full width) ═══
    rrect(d, (M, y, W - M, y + 28), '#FFF3E0', r=6)
    d.text((M + 12, y + 3), 'Ask students:', fill='#BF360C', font=FB22)
    d.ellipse((W - M - 40, y + 1, W - M - 12, y + 27), fill='#FF6F00')
    d.text((W - M - 33, y + 3), '?', fill='#FFF', font=FB20)
    y += 34
    y = dtxt(d, M + 12, y, L['ask'], FR22, '#444444', tw - 24, 28)
    y += 12

    # ═══ IMAGE AFTER ASK (full width) ═══
    if 'img_after_ask' in L:
        rrect(d, (M, y, W - M, y + 8), '#F5F5F5', r=0)  # subtle bg line
        y = paste_full_width(img, docx_imgs[L['img_after_ask']], M + 20, y + 4, tw - 40)
        y += 14

    # ═══ EXPLAIN SIMPLY ═══
    d.text((M, y), 'Explain simply:', fill='#333', font=FB24)
    y += 34
    y = dtxt(d, M, y, L['explain'], FR22, '#444444', tw, 28)
    y += 14

    # ═══ IMAGE AFTER EXPLAIN (full width) ═══
    if 'img_after_explain' in L:
        y = paste_full_width(img, docx_imgs[L['img_after_explain']], M + 20, y, tw - 40)
        y += 14

    # ═══ THINK TOGETHER (full width) ═══
    rrect(d, (M, y, W - M, y + 28), '#E8F5E9', r=6)
    d.rounded_rectangle((M + 8, y + 3, M + 32, y + 25), radius=5, fill='#2E7D32')
    d.text((M + 13, y + 4), 'T', fill='#FFF', font=FB18)
    d.text((M + 38, y + 3), 'Think Together', fill='#1B5E20', font=FB22)
    y += 34
    y = dtxt(d, M + 12, y, L['think'], FR22, '#333', tw - 24, 28)
    y += 12

    # ═══ IMAGE AFTER THINK (full width, large) ═══
    if 'img_after_think' in L:
        rrect(d, (M, y - 2, W - M, y + 2), '#E0E0E0', r=0)
        y = paste_full_width(img, docx_imgs[L['img_after_think']], M + 10, y + 6, tw - 20)
        y += 14

    # ═══ HOME ACTIVITY + CONVERSATION ═══
    box_h = 180
    box_w = (tw - 20) // 2

    # Home Activity
    rrect(d, (M, y, M + box_w, y + box_h), '#FFEBEE', r=14)
    rrect(d, (M + 2, y + 2, M + box_w - 2, y + 8), '#C62828', r=0)
    d.rounded_rectangle((M + 14, y + 18, M + 44, y + 48), radius=6, fill='#C62828')
    d.text((M + 20, y + 21), 'H', fill='#FFF', font=FB22)
    d.text((M + 52, y + 22), 'Home Activity', fill='#C62828', font=FB24)
    dtxt(d, M + 18, y + 56, L['home'], FR20, '#444', box_w - 36, 26)

    # Conversation
    cx = M + box_w + 20
    rrect(d, (cx, y, cx + box_w, y + box_h), '#E3F2FD', r=14)
    rrect(d, (cx + 2, y + 2, cx + box_w - 2, y + 8), '#1565C0', r=0)
    d.rounded_rectangle((cx + 14, y + 18, cx + 44, y + 48), radius=6, fill='#1565C0')
    d.text((cx + 20, y + 21), 'C', fill='#FFF', font=FB22)
    d.text((cx + 52, y + 22), 'Conversation at Home', fill='#1565C0', font=FB24)
    dtxt(d, cx + 18, y + 56, L['conversation'], FR20, '#444', box_w - 36, 26)
    y += box_h + 22

    # ═══ KEY MESSAGE ═══
    kmw = 380; kmx = (W - kmw) // 2
    rrect(d, (kmx, y, kmx + kmw, y + 48), '#2E7D32', r=24)
    d.ellipse((kmx + 22, y + 8, kmx + 54, y + 40), fill='#FFD600')
    d.text((kmx + 30, y + 12), '*', fill='#2E7D32', font=FB22)
    d.text((kmx + 64, y + 10), 'Key Message', fill='#FFFFFF', font=FB28)
    y += 62
    y = dtxt(d, M + 10, y, L['key_message'], FB24, '#2E7D32', tw - 20, 32)

    # Save
    buf = io.BytesIO()
    img.save(buf, format='JPEG', quality=92)
    b64 = base64.b64encode(buf.getvalue()).decode('ascii')
    filepath = os.path.join(out_dir, f'h21_lessonImage{n - 1}.js')
    with open(filepath, 'w') as f:
        f.write(f'export default "data:image/jpeg;base64,{b64}";\n')
    print(f"Lesson {n}: {len(b64)//1024}KB")

print('All 6 lesson images created!')
