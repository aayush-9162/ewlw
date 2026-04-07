import HABIT_ICONS from './habitIcons.js';
import INTRO_THUMBS from './introThumbs.js';
import REINF_THUMBS from './reinfThumbs.js';

export const DOMAINS = {
  personal: {
    label: 'Personal Well-Being',
    sub: '21 Habits for Healthy Living',
    bg: 'linear-gradient(145deg,#C4622D,#E8906A)',
    clusters: [
      {
        num: '1', word: 'Smart ROUTINE', cls: 'routine', color: '#E87820',
        habits: [
          { n: 1, name: 'Respect Mealtimes', why: 'The body functions best when meals occur at consistent times. Regular timing supports digestion, energy and concentration.', iconIdx: 0, tips: ['Encourage students to describe their daily meal timings.', 'Connect the lesson to familiar routines like school timetables.', 'Reinforce that regular meals help improve concentration and energy in school.', 'Encourage students to observe their own eating habits at home.', 'Emphasize practical habits such as eating breakfast, having balanced lunches, and eating dinner earlier in the evening.'] },
          { n: 2, name: 'Often & Enough Water', why: 'Water is essential for every body system. Staying hydrated helps students stay active and concentrate better.', iconIdx: 1, tips: ['Encourage students to discuss when they usually drink water during the day.', 'Emphasise the importance of drinking water regularly, not only when thirsty.', 'Discuss safe sources of drinking water available at school and at home.', 'Help students recognise signs of dehydration such as tiredness or dizziness.', 'Encourage students to carry a water bottle and drink water during the day.', 'Connect hydration habits with physical activity, school routines, and hot weather.'] },
          { n: 3, name: 'Unplug and Recharge', why: 'Too much screen time affects health, mood and sleep. Healthy screen habits help students maintain balance.', iconIdx: 2, tips: ['Ask students to share how they use screens at home and at school.', 'Use examples students relate to, such as online games, videos, or homework on devices.', 'Emphasise that screens should not replace sleep, outdoor play, and social interaction.', 'Encourage students to observe their own screen habits during the week.', 'Reinforce the idea that technology should support learning and creativity.'] },
          { n: 4, name: 'Time to Move', why: 'Regular physical activity builds strength, improves heart health and supports brain function and mood.', iconIdx: 3, tips: ['Encourage students to share the activities or games they enjoy.', 'Reinforce that movement is important every day, not only during sports periods.', 'Connect lessons to everyday experiences such as walking, climbing, or playing outdoors.', 'Motivate students to observe and increase their daily movement.'] },
          { n: 5, name: 'Invest in Good Sleep', why: 'Sleep is essential for growth, learning and health. Most school-age children need 9\u201311 hours each night.', iconIdx: 4, tips: ['Encourage students to share their daily sleep routines, such as bedtime and waking time.', 'Reinforce that sleep affects how students feel, learn, and participate in school each day.', 'Use simple, familiar examples like feeling fresh after a good sleep or tired after sleeping late.', 'Encourage reflection rather than judgement when discussing sleep habits.', 'Motivate students to observe and gradually improve their own sleep routines.'] },
          { n: 6, name: 'Neat & Clean Always', why: 'Good hygiene protects the body from germs. Clean habits help students feel confident and healthy.', iconIdx: 5, tips: ['Use examples from school life such as washing hands before lunch or keeping desks tidy.', 'Reinforce that cleanliness protects health and prevents illness.', 'Encourage students to observe hygiene habits at home and discuss them in class.', 'Emphasise both personal hygiene and environmental cleanliness.', 'Encourage students to practise these habits daily.'] },
          { n: 7, name: 'Equip Your Mind', why: 'Emotional wellbeing influences how we think, feel and interact. Managing emotions helps children thrive.', iconIdx: 6, tips: ['Discuss everyday situations like exam stress or disagreements with friends.', 'Create a safe space where students can share feelings.', 'Help students recognise and name their emotions.', 'Practice breathing, pausing, or talking to someone trusted.', 'Emphasise the role of sleep, activity, and healthy routines in emotional balance.'] }
        ]
      },
      {
        num: '2', word: 'Choose HEALTHY Foods', cls: 'healthy', color: '#1A7A40',
        habits: [
          { n: 8, name: 'Have the Right Carbs', why: "Carbohydrates are the body's main energy source. Choosing the right carbs supports steady energy.", iconIdx: 7, tips: ['Use examples of foods students commonly eat at home or bring to school.', 'Encourage students to share their breakfast or lunch examples.', 'Keep explanations simple and avoid complex scientific terms.', 'Emphasize practical food choices rather than detailed nutrition science.', 'Highlight everyday meals such as roti, rice, fruits, dal, and vegetables.', 'Encourage discussion and observation of food habits.'] },
          { n: 9, name: 'Eat Protein Every Day', why: 'Protein builds and repairs muscles. Including protein in every meal supports growth and development.', iconIdx: 8, tips: ['Use familiar foods students eat at home, such as dal, milk, eggs, and peanuts.', 'Encourage students to share examples from their lunchboxes.', 'Highlight traditional balanced meals such as dal-rice, roti-dal, khichdi, and idli-sambar.', 'Encourage students to include protein in every major meal.'] },
          { n: 10, name: 'Avoid Unhealthy Fats', why: 'Unhealthy fats can affect heart health. Choosing better fats helps children make healthier choices.', iconIdx: 9, tips: ['Discuss common foods such as nuts, milk, cooking oils, fried snacks, and bakery products.', 'Describe fats as nutrients that provide energy and help the body function properly.', 'Help students recognise that some fats are beneficial while others should be limited.', 'Emphasise moderation rather than completely avoiding fats.', 'Ask students about the oils or fats used in cooking at home.', 'Show how packaged foods may contain unhealthy fats.', 'Suggest including nuts, seeds, and balanced meals instead of processed snacks.'] },
          { n: 11, name: 'Look After Your Gut', why: 'A healthy gut supports immunity and digestion. Good gut health comes from diverse, fibre-rich foods.', iconIdx: 10, tips: ['Encourage students to identify foods that support healthy digestion.', 'Discuss how fibre, water, and fermented foods help the digestive system.', 'Connect gut health with daily habits like physical activity and sleep.', 'Encourage students to observe how food choices affect digestion.', 'Promote balanced meals that include fruits, vegetables, and whole grains.'] },
          { n: 12, name: 'Take Food Rich in Vitamins', why: 'Vitamins and minerals support immunity, bones and growth. A colourful diet provides all nutrients.', iconIdx: 11, tips: ['Use examples of fruits, vegetables, and foods that students commonly see at home or in school meals.', 'Encourage students to talk about the foods they eat daily.', 'Emphasize variety rather than focusing on specific nutrients in detail.', 'Encourage students to discuss with their families the importance of including fruits and vegetables in meals.'] },
          { n: 13, name: 'Hold Back on Sugar', why: 'Excess sugar contributes to tooth decay and energy crashes. Limiting sugar protects long-term health.', iconIdx: 12, tips: ['Use familiar examples: Discuss common sugary foods and drinks students consume.', 'Encourage observation: Ask students to identify sugary foods in their lunchboxes or daily meals.', 'Highlight hidden sugars: Show that sugar can appear under different names on food labels.', 'Promote healthier choices: Encourage fruits and home-cooked snacks instead of sweets.', 'Connect with home habits: Ask students to discuss reducing sugary foods and drinks with their families.'] },
          { n: 14, name: 'Yes to Less Salt', why: 'Too much salt can affect blood pressure. Choosing lower-sodium options builds healthy lifelong habits.', iconIdx: 13, tips: ['Use familiar examples of salty foods such as chips, pickles, sauces, or instant noodles.', 'Encourage students to think about foods they eat as snacks or during meals.', 'Explain that taste preferences can change when salt is reduced gradually.', 'Encourage discussion about cooking practices at home.'] }
        ]
      },
      {
        num: '3', word: 'MINDFUL Eating', cls: 'mindful', color: '#7030A0',
        habits: [
          { n: 15, name: 'Make Mealtimes Mindful', why: 'Eating with attention helps students enjoy food, recognise hunger cues and avoid overeating.', iconIdx: 14, tips: ['Use everyday examples of meals students eat at home or school.', 'Encourage students to reflect on how they usually eat their meals.', 'Allow students to share family practices around meals and food traditions.', 'Reinforce that mindful eating is about awareness rather than strict rules.', 'Encourage small changes such as chewing slowly or pausing during meals.'] },
          { n: 16, name: 'Identify Food Influences', why: 'Understanding what shapes our food choices helps students make more conscious decisions.', iconIdx: 15, tips: ['Use examples of foods students commonly eat at home or bring to school.', 'Encourage students to describe foods using sensory words such as sweet, crunchy, spicy, soft, or colourful.', 'Encourage discussion about why students like certain foods.', 'Reinforce that healthy foods can also be tasty and enjoyable.'] },
          { n: 17, name: 'Notice Clean & Safe Food', why: 'Food safety practices protect health. Knowing how to handle and choose safe food is an essential skill.', iconIdx: 16, tips: ['Discuss common situations such as uncovered street food, unwashed fruits, or spoiled leftovers.', 'Ask students to notice food safety practices at home or school.', 'Reinforce the importance of handwashing and clean utensils.', 'Show examples of packaged foods with FSSAI logos and expiry dates.', 'Encourage students to choose fresh, hygienic food from reliable sources.'] },
          { n: 18, name: 'Decode Food Labels', why: 'Reading food labels helps students understand what is in their food and make healthier choices.', iconIdx: 17, tips: ['Encourage students to explore both the front of the pack and the information panel.', 'Explain that attractive packaging or advertisements may not always reflect the actual nutritional value of the product.', 'Help students focus on simple observations, such as the ingredient list and serving size.', 'Encourage students to discuss food labels with their families while shopping.', 'Reinforce that learning to read labels helps them become aware consumers.'] },
          { n: 19, name: 'Favour Local & Seasonal', why: 'Local and seasonal foods are fresher, more nutritious and better for the environment.', iconIdx: 18, tips: ['Use examples of fruits and vegetables students commonly see in local markets.', 'Encourage students to observe which foods appear more frequently in different seasons.', 'Discuss traditional recipes that use seasonal ingredients.', 'Use maps or pictures to show foods grown in different regions of India.', 'Emphasise freshness and nutrition rather than complicated agricultural explanations.', 'Encourage curiosity about foods grown in the local area.'] },
          { n: 20, name: 'Use Variety for Balance', why: 'A varied diet ensures students get all the nutrients they need for complete nutrition.', iconIdx: 19, tips: ['Discuss foods that students commonly eat at home.', 'Ask students what they ate the previous day and help them identify the different food groups.', 'Encourage students to notice different colours in fruits and vegetables.', 'Let students build a balanced plate using food cards, drawings, or classroom charts.', 'Encourage students to try adding one new fruit, vegetable, or pulse to their meals.'] },
          { n: 21, name: 'Learn to Prepare & Cook Food', why: 'Basic cooking skills empower students to make healthier choices and develop lifelong independence.', iconIdx: 20, tips: ['Encourage students to talk about how food is prepared in their families.', 'Connect lessons to familiar foods such as rice, dal, vegetables, sprouts, or salads.', 'Emphasize simple, practical practices rather than technical explanations.', 'Reinforce that preparing food is a useful life skill.', 'Encourage curiosity about cooking, growing food, and trying new healthy foods.'] }
        ]
      }
    ]
  },
  social: {
    label: 'Social Well-Being',
    sub: '7 Life Skills for Responsible Behaviour (RESPECT)',
    bg: 'linear-gradient(145deg,#A0317A,#D060A0)',
    clusters: [
      {
        num: '4', word: 'RESPECT through Responsibility', cls: 'respect', color: '#C8A000',
        habits: [
          { n: 22, name: 'Responsible Citizenship', why: 'Understanding rights and responsibilities helps students become active, caring community members.', iconIdx: 21 },
          { n: 23, name: 'Equality & Gender Respect', why: 'Respect for all genders promotes fair, inclusive communities where everyone can thrive.', iconIdx: 22 },
          { n: 24, name: 'Social Skills', why: 'Strong social skills help students build relationships, resolve conflicts and collaborate.', iconIdx: 23 },
          { n: 25, name: 'Puberty & Adolescence', why: 'Understanding bodily changes helps students navigate adolescence with confidence.', iconIdx: 24 },
          { n: 26, name: 'Ethical Use of Media', why: 'Digital literacy and ethical online behaviour help students use technology responsibly.', iconIdx: 25 },
          { n: 27, name: 'Avoid Substance Abuse', why: 'Understanding the risks of substance abuse equips students to make safe, informed choices.', iconIdx: 26 },
          { n: 28, name: 'Tackle Violence & Stay Safe', why: 'Recognising unsafe situations protects students and promotes community safety.', iconIdx: 27 }
        ]
      }
    ]
  },
  planetary: {
    label: 'Planetary Well-Being',
    sub: '7 Sustainability Skills Aligned with LiFE (SUSTAIN)',
    bg: 'linear-gradient(145deg,#1A6B60,#2D9A88)',
    clusters: [
      {
        num: '5', word: 'SUSTAIN for LiFE', cls: 'sustain', color: '#1A80C0',
        habits: [
          { n: 29, name: 'Systems Thinking for Web of Life', why: 'Understanding interconnected systems helps students see how their choices affect the planet.', iconIdx: 28 },
          { n: 30, name: 'Understanding Body & Environment', why: 'The connection between human health and environmental health fosters holistic wellbeing.', iconIdx: 29 },
          { n: 31, name: 'Soil Health & Food Production', why: 'Healthy soil is the foundation of nutritious food, connecting students to their food source.', iconIdx: 30 },
          { n: 32, name: 'Thoughtful Consumption & Waste', why: 'Mindful consumption and reducing waste protect natural resources for a sustainable future.', iconIdx: 31 },
          { n: 33, name: 'Appreciation of Biodiversity', why: 'Biodiversity underpins food security. Valuing all life builds environmental stewardship.', iconIdx: 32 },
          { n: 34, name: 'Interconnected Ecosystems', why: 'Understanding ecosystem links helps students make choices that protect the whole planet.', iconIdx: 33 },
          { n: 35, name: 'Nurturing Health & Preventing Disease', why: 'Preventing disease through healthy habits and environmental awareness protects communities.', iconIdx: 34 }
        ]
      }
    ]
  }
};

export const PANEL_DEFS = [
  { n: 1, name: 'Habit Poster', color: '#E05555', icon: null, thumbType: 'poster', getThumbSrc: (habitIdx) => INTRO_THUMBS[habitIdx] },
  { n: 2, name: 'Lessons', color: '#3A7FD5', icon: null, thumbType: 'lessons', getThumbSrc: () => null },
  { n: 3, name: 'Additional Resources', color: '#E07830', icon: '\uD83D\uDCDA', thumbType: 'icon', getThumbSrc: () => null },
  { n: 4, name: 'Reinforcement & Feedback', color: '#22A882', icon: null, thumbType: 'poster', getThumbSrc: (habitIdx) => REINF_THUMBS[habitIdx] }
];

export const PANEL_GRADS = {
  1: 'linear-gradient(150deg,#C53030 0%,#E85050 100%)',
  2: 'linear-gradient(150deg,#1A5FA8 0%,#2E88E0 100%)',
  3: 'linear-gradient(150deg,#B85C10 0%,#E07830 100%)',
  4: 'linear-gradient(150deg,#17896A 0%,#22B88C 100%)'
};

export const PANEL_BORDER_COLORS = {
  1: '#E85050', 2: '#2E88E0', 3: '#E07830', 4: '#22B88C'
};

// Per-habit hero gradient (derived from each icon's dominant colour)
export const HABIT_HERO_BG = {
  1:  'linear-gradient(145deg,#984112,#e98c5a)',
  2:  'linear-gradient(145deg,#008da6,#44e3ff)',
  3:  'linear-gradient(145deg,#b00900,#ff5046)',
  4:  'linear-gradient(145deg,#9f7c00,#f4ca36)',
  5:  'linear-gradient(145deg,#bf3f8d,#ff88d0)',
  6:  'linear-gradient(145deg,#55a236,#a7f986)',
  7:  'linear-gradient(145deg,#004853,#25737f)',
  8:  'linear-gradient(145deg,#744400,#b27d31)',
  9:  'linear-gradient(145deg,#842527,#cb6568)',
  10: 'linear-gradient(145deg,#776607,#b6a440)',
  11: 'linear-gradient(145deg,#4c8e6a,#93dab3)',
  12: 'linear-gradient(145deg,#ba5b6c,#ffa5b4)',
  13: 'linear-gradient(145deg,#9d3639,#f18486)',
  14: 'linear-gradient(145deg,#007286,#34b6cd)',
  15: 'linear-gradient(145deg,#be5e23,#ffa56e)',
  16: 'linear-gradient(145deg,#9c015e,#ef4aad)',
  17: 'linear-gradient(145deg,#003682,#3170c8)',
  18: 'linear-gradient(145deg,#b74600,#ff8941)',
  19: 'linear-gradient(145deg,#1d7b15,#59bd51)',
  20: 'linear-gradient(145deg,#957038,#e4bd82)',
  21: 'linear-gradient(145deg,#6a0b83,#ae49ca)',
  // Social — RESPECT (emoji-based habits)
  22: 'linear-gradient(145deg,#1a3a6b,#3a7fd5)',
  23: 'linear-gradient(145deg,#6b2fa0,#a060d0)',
  24: 'linear-gradient(145deg,#0d7a6a,#2db8a0)',
  25: 'linear-gradient(145deg,#2a7a30,#5ab860)',
  26: 'linear-gradient(145deg,#1a5090,#4090d0)',
  27: 'linear-gradient(145deg,#a01a1a,#d04545)',
  28: 'linear-gradient(145deg,#b05010,#e88040)',
  // Planetary — SUSTAIN
  29: 'linear-gradient(145deg,#105050,#2a8a80)',
  30: 'linear-gradient(145deg,#1a6040,#3aaa70)',
  31: 'linear-gradient(145deg,#5a6a10,#90a840)',
  32: 'linear-gradient(145deg,#1a7080,#40b0c0)',
  33: 'linear-gradient(145deg,#2a6a30,#50b060)',
  34: 'linear-gradient(145deg,#105a80,#3090c0)',
  35: 'linear-gradient(145deg,#6a2050,#a05080)',
};

// Per-habit tile background color (from reference PDF)
export const HABIT_TILE_COLORS = {
  1: '#cb622b', 2: '#0cbfde', 3: '#eb1b0f', 4: '#d5a600', 5: '#ff66c3',
  6: '#7dd957', 7: '#005e6f', 8: '#975c05', 9: '#b03f42', 10: '#9e8a1b',
  11: '#6dbe93', 12: '#f7889b', 13: '#d15256', 14: '#0097b1', 15: '#ff8a41',
  16: '#cc007d', 17: '#004aac', 18: '#f66000', 19: '#2ea124', 20: '#c69854',
  21: '#8f1dae', 22: '#eccd0f', 23: '#2d9562', 24: '#6f5391', 25: '#8f3708',
  26: '#4425fb', 27: '#ff7070', 28: '#030761', 29: '#b4b3f5', 30: '#00572d',
  31: '#8c6e62', 32: '#737373', 33: '#e2a8f1', 34: '#ffbd58', 35: '#580c94',
};

export { HABIT_ICONS };
export { INTRO_THUMBS, REINF_THUMBS };
