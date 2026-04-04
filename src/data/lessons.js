// ALL_LESSONS[habitIndex] = array of 6 lessons for that habit
// Images are loaded lazily by the component
const ALL_LESSONS = [
  // Habit 1
  [
    { id: 'h0l1', num: 1, name: 'The Body Clock and Mealtimes', objective: 'Students understand that the body follows a daily rhythm and prefers regular meal timings.' },
    { id: 'h0l2', num: 2, name: 'Hunger Hormones', objective: 'Students learn that the body gives signals to control hunger and fullness.' },
    { id: 'h0l3', num: 3, name: 'Why Breakfast Matters?', objective: 'Students understand the importance of eating breakfast.' },
    { id: 'h0l4', num: 4, name: 'Problems with Irregular Eating', objective: 'Students understand why random eating and constant snacking may cause problems.' },
    { id: 'h0l5', num: 5, name: 'Avoid Late Dinners', objective: 'Students understand why dinner should be eaten earlier in the evening.' },
    { id: 'h0l6', num: 6, name: 'Healthy Daily Meal Pattern', objective: 'Students understand what a healthy meal pattern looks like during the day.' },
  ],
  // Habit 2
  [
    { id: 'h1l1', num: 1, name: 'Why the Body Needs Water?', objective: 'Students understand that water is essential for many body functions.' },
    { id: 'h1l2', num: 2, name: 'Drinking Water Regularly and Hydrating Foods', objective: 'Students understand the importance of drinking water regularly and eating hydrating foods.' },
    { id: 'h1l3', num: 3, name: 'Safe and Reliable Sources of Drinking Water', objective: 'Students understand the importance of drinking water from safe sources.' },
    { id: 'h1l4', num: 4, name: 'Water Loss and Dehydration', objective: 'Students understand that the body loses water daily and needs regular replacement.' },
    { id: 'h1l5', num: 5, name: 'Healthy Drink Choices', objective: 'Students learn to choose healthy drinks for hydration.' },
    { id: 'h1l6', num: 6, name: 'Keeping our Water Clean', objective: 'Students understand the importance of clean water and water quality.' },
  ],
  // Habit 3
  [
    { id: 'h2l1', num: 1, name: 'Understanding Screen Use', objective: 'Students recognise how screens are used in daily life.' },
    { id: 'h2l2', num: 2, name: 'Effects of Too Much Screen Time', objective: 'Students understand how excessive screen time affects physical health.' },
    { id: 'h2l3', num: 3, name: 'Eye Care and the 20–20–20 Rule', objective: 'Students learn simple practices to protect their eyes during screen use.' },
    { id: 'h2l4', num: 4, name: 'Screen Time and Mental Well-being', objective: 'Students understand how excessive screen use can affect concentration and emotions.' },
    { id: 'h2l5', num: 5, name: 'Healthy Digital Habits', objective: 'Students learn how to use technology responsibly.' },
    { id: 'h2l6', num: 6, name: 'Choosing Offline Activities', objective: 'Students explore enjoyable alternatives to screen time.' },
  ],
  // Habit 4
  [
    { id: 'h3l1', num: 1, name: 'Why Movement Matters?', objective: 'Students understand that regular physical activity helps the body stay healthy.' },
    { id: 'h3l2', num: 2, name: 'Types of Physical Activities', objective: 'Students learn that different activities help the body in different ways.' },
    { id: 'h3l3', num: 3, name: 'Preparing and Relaxing the Body', objective: 'Students understand how to prepare their body before activity and help it recover after activity.' },
    { id: 'h3l4', num: 4, name: 'Reducing Sedentary Habits', objective: 'Students recognise the effects of sitting for long periods.' },
    { id: 'h3l5', num: 5, name: 'Making Movement a Daily Habit', objective: 'Students learn how to include movement in daily routines.' },
    { id: 'h3l6', num: 6, name: 'Enjoying Active Play', objective: 'Students understand that physical activity can be fun and enjoyable.' },
  ],
  // Habit 5
  [
    { id: 'h4l1', num: 1, name: 'Understanding Sleep', objective: 'Students understand that the body needs enough sleep to recover and function properly.' },
    { id: 'h4l2', num: 2, name: 'Keeping a Regular Sleep Schedule', objective: 'Students learn that regular sleep timing and good sleep habits help maintain healthy sleep patterns.' },
    { id: 'h4l3', num: 3, name: 'Sleep and Learning', objective: 'Students understand that adequate sleep helps the brain learn and remember.' },
    { id: 'h4l4', num: 4, name: 'Sleep and Growth', objective: 'Students understand that sleep supports healthy growth.' },
    { id: 'h4l5', num: 5, name: 'Sleep, Hunger, and Metabolism', objective: 'Students understand that insufficient sleep can affect hunger and appetite.' },
    { id: 'h4l6', num: 6, name: 'Sleep Restores Daily Energy', objective: 'Students understand that adequate sleep helps maintain daily energy.' },
  ],
  // Habit 6
  [
    { id: 'h5l1', num: 1, name: 'Cleanliness and Health', objective: 'Students understand the connection between cleanliness and good health.' },
    { id: 'h5l2', num: 2, name: 'Daily Hygiene Habits', objective: 'Students learn simple daily practices that maintain personal hygiene.' },
    { id: 'h5l3', num: 3, name: 'Clean Habits During Puberty', objective: 'Students understand that hygiene becomes even more important as the body grows and changes.' },
    { id: 'h5l4', num: 4, name: 'Staying Organised', objective: 'Students learn how organisation helps manage daily activities.' },
    { id: 'h5l5', num: 5, name: 'Preparing for the Day', objective: 'Students learn simple ways to plan and prepare for daily activities.' },
    { id: 'h5l6', num: 6, name: 'Clean Surroundings', objective: 'Students understand the importance of keeping their surroundings clean.' },
  ],
  // Habit 7
  [
    { id: 'h6l1', num: 1, name: 'Understanding Emotions', objective: 'Students understand that emotions are natural responses that help people understand their' },
    { id: 'h6l2', num: 2, name: 'Brain and Emotional Responses', objective: 'Students understand how the brain and body respond to emotions and stress.' },
    { id: 'h6l3', num: 3, name: 'Recognising and Expressing Feelings', objective: 'Students learn to identify emotions and express feelings in healthy ways.' },
    { id: 'h6l4', num: 4, name: 'Managing Stress and Difficult Emotions', objective: 'Students learn simple ways to manage stress and difficult emotions.' },
    { id: 'h6l5', num: 5, name: 'Thoughts and Reactions', objective: 'Students understand how thoughts influence emotions and behaviour.' },
    { id: 'h6l6', num: 6, name: 'Positive Relationships', objective: 'Students understand how supportive relationships improve emotional wellbeing.' },
  ],
  // Habit 8
  [
    { id: 'h7l1', num: 1, name: 'Carb-Rich Foods That Give Us Energy', objective: 'Many foods we eat contain carbohydrates, and these foods provide energy for the body.' },
    { id: 'h7l2', num: 2, name: 'Fast and Slow Energy from Carbohydrates', objective: 'Students understand that different carbohydrate foods release energy at different speeds.' },
    { id: 'h7l3', num: 3, name: 'Whole Foods vs Refined Foods', objective: '' },
    { id: 'h7l4', num: 4, name: 'What Happens to Carbohydrates in the Body?', objective: 'Students understand that carbohydrates are converted into glucose for energy.' },
    { id: 'h7l5', num: 5, name: 'When Energy Rises Too Fast', objective: 'Students understand how sugary and refined foods can cause rapid rises in blood sugar.' },
    { id: 'h7l6', num: 6, name: 'Combining Foods for Steady Energy', objective: 'Students learn that combining carbohydrates with other foods helps maintain steady energy.' },
  ],
  // Habit 9
  [
    { id: 'h8l1', num: 1, name: 'Protein and Body Growth', objective: 'Which foods help our body grow strong?' },
    { id: 'h8l2', num: 2, name: 'Sources of Protein', objective: 'Students learn that protein can come from both plant foods and animal foods.' },
    { id: 'h8l3', num: 3, name: 'Cereals and Pulses Together', objective: 'Students understand that eating cereals and pulses together improves protein quality.' },
    { id: 'h8l4', num: 4, name: 'Daily Protein Needs', objective: 'Students understand that the body needs protein regularly.' },
    { id: 'h8l5', num: 5, name: 'Complete and Incomplete Proteins', objective: 'Do all protein foods provide the same type of protein?' },
    { id: 'h8l6', num: 6, name: 'Combining Foods for Better Protein', objective: 'Can different foods work together to give better nutrition?' },
  ],
  // Habit 10
  [
    { id: 'h9l1', num: 1, name: 'Foods that Contain Fats', objective: 'Students identify common foods that contain fats.' },
    { id: 'h9l2', num: 2, name: 'Why the Body Needs Fats', objective: 'Students identify common foods that contain fats.' },
    { id: 'h9l3', num: 3, name: 'Healthy Fats in Foods', objective: 'Students recognise foods that provide healthy fats.' },
    { id: 'h9l4', num: 4, name: 'Unhealthy Fats to Avoid', objective: 'Students understand that certain fats should be limited.' },
    { id: 'h9l5', num: 5, name: 'Fats in Balanced Meals', objective: 'Students understand how small amounts of fats improve meals.' },
    { id: 'h9l6', num: 6, name: 'Smart Choices About Fats', objective: 'Students learn to make healthy choices about fats in daily meals.' },
  ],
  // Habit 11
  [
    { id: 'h10l1', num: 1, name: 'The Gut and Its Role in Digestion', objective: 'Students understand how the gut helps digest food and absorb nutrients.' },
    { id: 'h10l2', num: 2, name: 'Soluble and Insoluble Fibre', objective: 'Students understand the role of fibre in digestion.' },
    { id: 'h10l3', num: 3, name: 'Probiotics, Prebiotics, and Fermented Foods', objective: 'Students understand how certain foods support beneficial gut bacteria.' },
    { id: 'h10l4', num: 4, name: 'The Gut-Brain Connection', objective: 'Students understand that the gut and brain influence each other.' },
    { id: 'h10l5', num: 5, name: 'Lifestyle Factors Affecting Gut Health', objective: 'Students understand how daily habits affect digestion.' },
    { id: 'h10l6', num: 6, name: 'Maintaining Digestive Balance', objective: 'Students understand common digestive issues and ways to maintain gut health.' },
  ],
  // Habit 12
  [
    { id: 'h11l1', num: 1, name: 'Why Vitamins and Minerals Matter', objective: 'Students understand that vitamins and minerals help the body grow, stay strong, and remain' },
    { id: 'h11l2', num: 2, name: 'Water-Soluble Vitamins', objective: 'Students learn that some vitamins must be eaten regularly because the body does not store them.' },
    { id: 'h11l3', num: 3, name: 'Fat-Soluble Vitamins', objective: 'Why do you think some vitamins can be stored in the body for later use?' },
    { id: 'h11l4', num: 4, name: 'Minerals and Their Roles', objective: 'Students learn that minerals support many important body functions.' },
    { id: 'h11l5', num: 5, name: 'Eating a Rainbow Plate', objective: 'Students understand that eating fruits and vegetables of different colours provides many nutrients.' },
    { id: 'h11l6', num: 6, name: 'Fortified Foods and Sunlight', objective: 'Students learn that fortified foods provide important nutrients, and sunlight helps us get Vitamin D.' },
  ],
  // Habit 13
  [
    { id: 'h12l1', num: 1, name: 'What is Sugar and What It Does in the Body?', objective: 'Students understand that sugar provides quick energy, but the effect fades quickly.' },
    { id: 'h12l2', num: 2, name: 'Natural Sugar vs Added Sugar', objective: 'Students learn the difference between natural sugars and added sugars.' },
    { id: 'h12l3', num: 3, name: 'How Much Sugar is Too Much', objective: 'How many teaspoons of sugar do you think we should eat in a day?' },
    { id: 'h12l4', num: 4, name: 'Different Forms of Sugar', objective: 'Students learn that sugar appears in many forms.' },
    { id: 'h12l5', num: 5, name: 'Hidden Sugar in Foods', objective: 'Have you ever looked at the ingredient list on a food package?' },
    { id: 'h12l6', num: 6, name: 'Sweeteners - Natural and Artificial', objective: 'Have you heard of honey or stevia?' },
  ],
  // Habit 14
  [
    { id: 'h13l1', num: 1, name: 'Understanding Salt and Sodium', objective: 'Students understand that salt contains sodium and that the body needs only small amounts.' },
    { id: 'h13l2', num: 2, name: 'Why Too Much Salt Is Harmful?', objective: 'Students understand that too much salt can affect health.' },
    { id: 'h13l3', num: 3, name: 'Hidden Salt in Foods', objective: 'Does salt come only from the salt we add during cooking?' },
    { id: 'h13l4', num: 4, name: 'Balancing Sodium and Potassium', objective: 'Students understand that potassium-rich foods help balance sodium intake.' },
    { id: 'h13l5', num: 5, name: 'Reducing Salt in Daily Meals', objective: 'Students learn simple habits that help reduce salt intake.' },
    { id: 'h13l6', num: 6, name: 'Reading Food Labels', objective: 'Students understand that food labels can help identify sodium in packaged foods.' },
  ],
  // Habit 15
  [
    { id: 'h14l1', num: 1, name: 'Eating Slowly and Chewing Well', objective: 'Students understand that chewing food properly and eating slowly supports digestion.' },
    { id: 'h14l2', num: 2, name: 'The Power of the Pause', objective: 'Students learn that pausing before and during meals helps them eat more mindfully.' },
    { id: 'h14l3', num: 3, name: 'Listening to Hunger and Fullness', objective: 'Students understand that the body gives signals of hunger and fullness.' },
    { id: 'h14l4', num: 4, name: 'Noticing the Eating Experience', objective: 'Students learn to notice and reflect on their eating experience by paying attention to taste, smell,' },
    { id: 'h14l5', num: 5, name: 'Eating Together', objective: 'Students understand that shared meals help people connect with others.' },
    { id: 'h14l6', num: 6, name: 'Gratitude for Food', objective: 'Students understand and appreciate the effort and people involved in bringing food to their table.' },
  ],
  // Habit 16
  [
    { id: 'h15l1', num: 1, name: 'Taste, Senses, and What Makes Food Appealing', objective: 'Students understand that our senses influence how we experience and choose foods.' },
    { id: 'h15l2', num: 2, name: 'Understanding the Basic Tastes', objective: 'Students learn about the basic tastes humans can recognise.' },
    { id: 'h15l3', num: 3, name: 'How Cooking Changes Taste', objective: 'Students understand that cooking and preparation influence taste and texture.' },
    { id: 'h15l4', num: 4, name: 'Choosing Foods Beyond Just Taste', objective: 'Students understand that strong taste does not always mean healthier food.' },
    { id: 'h15l5', num: 5, name: 'Looking Beyond Taste in Packaged Foods', objective: 'Why do some packaged foods look brighter or taste stronger than natural foods?' },
    { id: 'h15l6', num: 6, name: 'Making Healthy Food Appealing', objective: 'Why do some people think healthy food is not tasty?' },
  ],
  // Habit 17
  [
    { id: 'h16l1', num: 1, name: 'Food Safety and Health', objective: 'Students understand that food must be safe and clean to maintain health.' },
    { id: 'h16l2', num: 2, name: 'Germs and Food Contamination', objective: 'Students understand how germs can enter food.' },
    { id: 'h16l3', num: 3, name: 'Preventing Germs in Food', objective: 'Students learn simple habits to prevent food contamination.' },
    { id: 'h16l4', num: 4, name: 'Five Keys to Food Safety', objective: 'Students understand the five basic rules of food safety.' },
    { id: 'h16l5', num: 5, name: 'Toxins and Unsafe Food', objective: 'Students understand that harmful substances can sometimes be present in food.' },
    { id: 'h16l6', num: 6, name: 'Food Adulteration and Food Safety Labels', objective: 'Students understand food adulteration and the importance of food safety standards.' },
  ],
  // Habit 18
  [
    { id: 'h17l1', num: 1, name: 'Understanding Food Labels', objective: 'Students recognise the different types of information provided on food packages.' },
    { id: 'h17l2', num: 2, name: 'Reading the Ingredient List', objective: 'Students understand how ingredient lists reveal what a food product mostly contains.' },
    { id: 'h17l3', num: 3, name: 'Decoding Claims and Advertisements', objective: 'Have you seen words like ‘healthy’, ‘natural’, or ‘energy drink’ on food packages?' },
    { id: 'h17l4', num: 4, name: 'Understanding Nutrition Labels', objective: 'Have you seen a small table on food packages showing nutrients?' },
    { id: 'h17l5', num: 5, name: 'Understanding Serving Size and Portions', objective: 'Students understand how serving size affects how much energy and nutrients they consume.' },
    { id: 'h17l6', num: 6, name: 'Comparing Products & Making Smart Choices', objective: 'Students learn to compare labels and choose better packaged food options.' },
  ],
  // Habit 19
  [
    { id: 'h18l1', num: 1, name: 'Local and Seasonal Foods', objective: 'Students understand what local and seasonal foods are.' },
    { id: 'h18l2', num: 2, name: 'Identifying Seasonal Foods', objective: 'Students learn how to recognise seasonal foods.' },
    { id: 'h18l3', num: 3, name: 'Seasonal Foods in Different Weather', objective: 'Students understand that different foods grow during different seasons.' },
    { id: 'h18l4', num: 4, name: 'Regional Foods Across India', objective: 'Students understand that different regions produce different foods.' },
    { id: 'h18l5', num: 5, name: 'Benefits of Local and Seasonal Foods', objective: 'Students understand the advantages of eating local and seasonal foods.' },
    { id: 'h18l6', num: 6, name: 'Traditional Seasonal Foods and Recipes', objective: 'Students recognise that traditional recipes often use seasonal ingredients.' },
  ],
  // Habit 20
  [
    { id: 'h19l1', num: 1, name: 'Why Variety in Food Matters', objective: 'Students understand that the body needs nutrients from many different foods.' },
    { id: 'h19l2', num: 2, name: 'Understanding Food Groups', objective: 'Students learn that different food groups provide different nutrients.' },
    { id: 'h19l3', num: 3, name: 'Colourful Plates and Food Diversity', objective: 'Students understand how colourful meals often indicate food variety.' },
    { id: 'h19l4', num: 4, name: 'Rotating Foods in Daily Meals', objective: 'Students understand how changing foods regularly increases variety.' },
    { id: 'h19l5', num: 5, name: 'The My Plate of the Day Concept', objective: 'Students understand how to divide their plate for balanced meals.' },
    { id: 'h19l6', num: 6, name: 'Building a Balanced Meal', objective: 'Students learn how to create balanced meals using everyday foods.' },
  ],
  // Habit 21
  [
    { id: 'h20l1', num: 1, name: 'Food Preparation in Daily Life', objective: 'Students understand that most foods need preparation before they can be eaten.' },
    { id: 'h20l2', num: 2, name: 'Cooking and Digestibility', objective: 'Students understand that cooking changes foods and helps the body digest them.' },
    { id: 'h20l3', num: 3, name: 'Soaking and Sprouting', objective: 'Students learn how soaking and sprouting improve the nutritional value of foods.' },
    { id: 'h20l4', num: 4, name: 'Microgreens and Fresh Foods', objective: 'Students learn that young plants can be grown easily and added to meals.' },
    { id: 'h20l5', num: 5, name: 'Healthier Cooking Methods', objective: 'Students understand that cooking methods can affect nutrition.' },
    { id: 'h20l6', num: 6, name: 'Practical Food Skills', objective: 'Why is it useful to know how to prepare food?' },
  ],
];

export default ALL_LESSONS;

// Short lesson titles for thumbnail display
export const ALL_LESSON_TITLES = [
  ['The Body Clock and Mealtimes', 'Hunger Hormones', 'Why Breakfast Matters?', 'Problems with Irregular Eating', 'Avoid Late Dinners', 'Healthy Daily Meal Pattern'],
  ['Why the Body Needs Water?', 'Drinking Water Regularly and', 'Safe and Reliable Sources of', 'Water Loss and Dehydration', 'Healthy Drink Choices', 'Keeping our Water Clean'],
  ['Understanding Screen Use', 'Effects of Too Much Screen', 'Eye Care and the 20–20–20 Rule', 'Screen Time and Mental', 'Healthy Digital Habits', 'Choosing Offline Activities'],
  ['Why Movement Matters?', 'Types of Physical Activities', 'Preparing and Relaxing the', 'Reducing Sedentary Habits', 'Making Movement a Daily Habit', 'Enjoying Active Play'],
  ['Understanding Sleep', 'Keeping a Regular Sleep', 'Sleep and Learning', 'Sleep and Growth', 'Sleep, Hunger, and Metabolism', 'Sleep Restores Daily Energy'],
  ['Cleanliness and Health', 'Daily Hygiene Habits', 'Clean Habits During Puberty', 'Staying Organised', 'Preparing for the Day', 'Clean Surroundings'],
  ['Understanding Emotions', 'Brain and Emotional Responses', 'Recognising and Expressing', 'Managing Stress and', 'Thoughts and Reactions', 'Positive Relationships'],
  ['Carb-Rich Foods That Give Us', 'Fast and Slow Energy from', 'Whole Foods vs Refined Foods', 'What Happens to', 'When Energy Rises Too Fast', 'Combining Foods for Steady'],
  ['Protein and Body Growth', 'Sources of Protein', 'Cereals and Pulses Together', 'Daily Protein Needs', 'Complete and Incomplete', 'Combining Foods for Better'],
  ['Foods that Contain Fats', 'Why the Body Needs Fats', 'Healthy Fats in Foods', 'Unhealthy Fats to Avoid', 'Fats in Balanced Meals', 'Smart Choices About Fats'],
  ['The Gut and Its Role in', 'Soluble and Insoluble Fibre', 'Probiotics, Prebiotics, and', 'The Gut-Brain Connection', 'Lifestyle Factors Affecting', 'Maintaining Digestive Balance'],
  ['Why Vitamins and Minerals', 'Water-Soluble Vitamins', 'Fat-Soluble Vitamins', 'Minerals and Their Roles', 'Eating a Rainbow Plate', 'Fortified Foods and Sunlight'],
  ['What is Sugar and What It', 'Natural Sugar vs Added Sugar', 'How Much Sugar is Too Much', 'Different Forms of Sugar', 'Hidden Sugar in Foods', 'Sweeteners - Natural and'],
  ['Understanding Salt and Sodium', 'Why Too Much Salt Is Harmful?', 'Hidden Salt in Foods', 'Balancing Sodium and Potassium', 'Reducing Salt in Daily Meals', 'Reading Food Labels'],
  ['Eating Slowly and Chewing Well', 'The Power of the Pause', 'Listening to Hunger and', 'Noticing the Eating Experience', 'Eating Together', 'Gratitude for Food'],
  ['Taste, Senses, and What', 'Understanding the Basic Tastes', 'How Cooking Changes Taste', 'Choosing Foods Beyond Just', 'Looking Beyond Taste in', 'Making Healthy Food Appealing'],
  ['Food Safety and Health', 'Germs and Food Contamination', 'Preventing Germs in Food', 'Five Keys to Food Safety', 'Toxins and Unsafe Food', 'Food Adulteration and Food'],
  ['Understanding Food Labels', 'Reading the Ingredient List', 'Decoding Claims and', 'Understanding Nutrition Labels', 'Understanding Serving Size', 'Comparing Products & Making'],
  ['Local and Seasonal Foods', 'Identifying Seasonal Foods', 'Seasonal Foods in Different', 'Regional Foods Across India', 'Benefits of Local and', 'Traditional Seasonal Foods'],
  ['Why Variety in Food Matters', 'Understanding Food Groups', 'Colourful Plates and Food', 'Rotating Foods in Daily Meals', 'The My Plate of the Day', 'Building a Balanced Meal'],
  ['Food Preparation in Daily Life', 'Cooking and Digestibility', 'Soaking and Sprouting', 'Microgreens and Fresh Foods', 'Healthier Cooking Methods', 'Practical Food Skills'],
];
