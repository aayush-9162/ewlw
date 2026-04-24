// Additional videos per habit (keyed by habit index 0-based)
// These appear in Additional Resources > Additional Videos tab
const ADDITIONAL_VIDEOS = {
  0: [
    {
      title: 'Twinkle Twinkle Little Plate \u2013 Kids Pharmer (2:04 m)',
      embedUrl: 'https://www.youtube.com/embed/tobwbQEgCks?si=1',
      description: 'This video uses a fun song to teach children about building a healthy and balanced plate. Through colorful animation and music, kids learn that meals should include a variety of foods for good health.',
    },
    {
      title: 'Healthy Lunch Suggestions for Your Tiffin v1 \u2013 FSSAI (1:03 m)',
      embedUrl: 'https://www.youtube.com/embed/NFMz8oJvjEQ',
      description: 'This short video by FSSAI\u2019s Eat Right India initiative shares simple and healthy lunch ideas that can be packed in a tiffin for school or work. It highlights the importance of eating balanced meals at regular times and choosing nutritious foods such as fruits, vegetables, and wholesome dishes. The video encourages following regular meal timings and healthy eating practices to support good energy, digestion, and overall health.',
    },
    {
      title: 'Why Do We Feel Hungry? \u2013 The Dr. Binocs Show (6:00 m)',
      embedUrl: 'https://www.youtube.com/embed/DjSved8-mAw',
      description: 'This informative video explains why we feel hungry and how our body signals the need for food. It highlights the role of the brain\u2014especially the hypothalamus\u2014and hormones like ghrelin in regulating hunger. The video shows how an empty stomach triggers these signals, reminding us to refuel our body with energy. It encourages understanding hunger cues and maintaining regular, balanced eating habits to support overall health and well-being.',
    },
    ],
  1: [
    {
      title: 'Drinking Water Song for Kids \u2013 Kids Pharmer (1:55 m)',
      embedUrl: 'https://www.youtube.com/embed/qN3RqVi40eA?si=1',
      level: 1,
      description: 'This video uses a cheerful song to encourage children to drink water regularly. Through playful rhythm and animation, kids learn that staying hydrated is important for their health and energy.',
    },
    {
      title: 'Drink Water \u2013 FSSAI (1:09 m)',
      embedUrl: 'https://www.youtube.com/embed/f8l-M7O9Z_E',
      level: 1,
      description: 'This video by FSSAI\u2019s Eat Right India initiative highlights the importance of drinking enough water throughout the day to stay healthy and hydrated. It explains that adequate water intake helps regulate body temperature, supports digestion, and keeps the body active. The video encourages the habit of drinking water regularly instead of sugary drinks to maintain good health.',
    },
    {
      title: 'What If You Drink Too Much Water? \u2013 The Dr. Binocs Show (5:26 m)',
      embedUrl: 'https://www.youtube.com/embed/sD6j5sNo5Zk',
      level: 2,
      description: 'This informative video explains what happens when we drink excessive amounts of water. It highlights that while staying hydrated is important, too much water can overwhelm the kidneys and dilute the sodium levels in the blood\u2014a condition known as hyponatremia. The video also discusses water intoxication, a rare but serious condition that can be life-threatening. It encourages balanced water intake, especially during intense physical activity, and understanding the importance of listening to the body\u2019s hydration needs.',
    },
    ],
  2: [
    {
      title: 'Why your phone is making you sad \u2013 AsapSCIENCE',
      embedUrl: 'https://www.youtube.com/embed/vcjQ5JkEE_0?si=1',
      description: 'This video explains how excessive smartphone use can negatively affect mood and mental health. It shows that phones constantly trigger the brain\u2019s dopamine reward system, which can lead to addiction, reduced attention span, and increased anxiety or sadness. The video encourages people to be mindful of their screen time and build healthier digital habits.',
    },
  ],
  3: [
    {
      title: 'Exercise Song for Kids \u2013 Kids Pharmer (2:36 m)',
      embedUrl: 'https://www.youtube.com/embed/i-uEkpbRxSE?si=1',
      description: 'This video encourages children to stay active through a fun exercise song. With playful movements like jumping, jogging, and stretching, kids learn that regular physical activity is important for staying healthy and strong.',
    },
    {
      title: 'Physical Activity \u2013 FSSAI (2:23 m)',
      embedUrl: 'https://www.youtube.com/embed/igxkhJbfDIs',
      description: 'This video by the Food Safety and Standards Authority of India (FSSAI) highlights the importance of regular physical activity for maintaining good health. It explains that staying active through activities such as walking, playing sports, or exercising helps improve fitness, strengthen the body, and reduce the risk of lifestyle diseases. The video encourages people to include daily physical activity as an essential part of a healthy lifestyle.',
    },
    {
      title: 'Why Physical Activity Matters \u2013 Middle Childhood Matters Coalition Toronto (4:14 m)',
      embedUrl: 'https://www.youtube.com/embed/R0-PBXXljXM',
      description: 'This video explains why regular physical activity is important for children\u2019s physical, mental, and social development. It highlights that active play and movement help build strong bodies, improve concentration, and support emotional well-being.',
    },
    {
      title: 'How Playing Sports Benefits Your Body... and Your Brain \u2013 TED-Ed (3:46 m)',
      embedUrl: 'https://www.youtube.com/embed/hmFQqjMF_f0',
      description: 'This TED-Ed video explains how playing sports benefits both the body and the brain. It shows that regular sports activity strengthens bones, improves heart health, builds coordination, and enhances brain functions such as memory and focus.',
    },
    {
      title: 'Why the Brain is Built for Movement \u2013 Anders Hansen, TEDx (17:55 m)',
      embedUrl: 'https://www.youtube.com/embed/a9p3Z7L0f0U',
      description: 'In this TEDx talk, Anders Hansen explains how physical activity has powerful effects on the brain. He shows that regular exercise can improve memory, focus, creativity, mood, and reduce stress and anxiety.',
    },
    {
      title: 'Why Sitting Is Bad For You? \u2013 The Dr. Binocs Show (6:15 m)',
      embedUrl: 'https://www.youtube.com/embed/v0uaBuM9TMQ',
      description: 'This informative video explains how sitting for long periods can negatively affect our health. It highlights the impact of prolonged sitting on posture, muscles, and overall body functioning, especially in today\u2019s lifestyle of studying or working from home. The video also discusses potential health risks linked to too much sitting and emphasizes the importance of regular movement and correct sitting posture. It encourages taking breaks, staying active, and building healthy daily habits for better physical well-being.',
    },
    ],
  4: [
    {
      title: 'The Sleep Song \u2013 Kids Pharmer (3:09 m)',
      embedUrl: 'https://www.youtube.com/embed/cD-6tmfCl7g?si=1',
      level: 1,
      description: 'This calming lullaby helps children relax and prepare for bedtime. With gentle music and soothing visuals, the video encourages a peaceful sleep routine and highlights the importance of good sleep for health.',
    },
    {
      title: 'The Benefits of a Good Night\u2019s Sleep \u2013 Shai Marcu, TED-Ed (5:44 m)',
      embedUrl: 'https://www.youtube.com/embed/gedoSfZvBgE',
      level: 1,
      description: 'This TED-Ed video explains why getting enough sleep is essential for both the body and the brain. It shows that during sleep the brain actively reorganizes memories, clears waste products, and restores itself for the next day.',
    },
    {
      title: 'What Would Happen if You Didn\u2019t Sleep? \u2013 Claudia Aguirre, TED-Ed (4:43 m)',
      embedUrl: 'https://www.youtube.com/embed/dqONk48l5vY',
      level: 1,
      description: 'This TED-Ed video explains what happens to the body and brain when a person does not get enough sleep. It shows that sleep deprivation can affect memory, concentration, mood, and physical health.',
    },
    {
      title: 'Sleepwalking? \u2013 The Dr. Binocs Show (5:46 m)',
      embedUrl: 'https://www.youtube.com/embed/G9fluPFChWQ',
      level: 2,
      description: 'This interesting video explains what sleepwalking is and why it happens. It highlights how sleepwalking occurs when a person is partially awake during deep sleep, leading them to perform activities like walking without full awareness. The video discusses possible causes, such as irregular sleep patterns, stress, or lack of rest, and shares important facts about this condition. It encourages maintaining good sleep habits and understanding sleep health for overall well-being.',
    },
    {
      title: 'Why Do We Dream? \u2013 The Dr. Binocs Show (5:17 m)',
      embedUrl: 'https://www.youtube.com/embed/09TRoxgVPjs',
      level: 2,
      description: 'This fascinating video explores why we dream and why our dreams can be so varied and imaginative. It explains how dreams occur during sleep as the brain processes thoughts, emotions, and daily experiences. The video highlights possible reasons for dreaming, such as memory processing and emotional balance. It encourages curiosity about the mind and promotes the importance of good sleep for overall mental well-being.',
    },
    ],
  5: [
    {
      title: 'Fun Bath Song \u2013 Kids Pharmer (3:41 m)',
      embedUrl: 'https://www.youtube.com/embed/2NrmzltJtTs?si=1',
      level: 1,
      description: 'This video turns bath time into a fun and joyful activity for children. Through music and playful repetition, kids learn that bathing helps keep their body clean and healthy.',
    },
    {
      title: 'Personal Hygiene Tips Every Teen Should Know \u2013 Sam.K Tween & Teens (4:48 m)',
      embedUrl: 'https://www.youtube.com/embed/7xX2inCqAbg',
      level: 2,
      description: 'This video explains the importance of maintaining good personal hygiene during the teenage years. It highlights simple daily habits such as bathing regularly, brushing teeth, and keeping clothes clean.',
    },
    {
      title: 'How to Get (and Stay) Organized \u2013 Child Mind Institute (2:38 m)',
      embedUrl: 'https://www.youtube.com/embed/g3AoOdvL710',
      level: 2,
      description: 'This video explains simple strategies that help children and teens develop better organization skills. It highlights practical habits such as writing things down, using checklists, and keeping spaces tidy.',
    },
    {
      title: '12 Personal Hygiene Mistakes We Make Every Day \u2013 BRIGHT SIDE (9:09 m)',
      embedUrl: 'https://www.youtube.com/embed/iXWbecngX7c',
      level: 2,
      description: 'This educational video explains several common personal hygiene mistakes people make in their daily routines and how to avoid them. It highlights habits such as proper handwashing, dental care, and skin care.',
    },
    {
      title: 'Personal Hygiene for Teen Girls \u2013 Blissima (3:35 m)',
      embedUrl: 'https://www.youtube.com/embed/jkZyxbwNfUg',
      level: 2,
      description: 'This video discusses important personal hygiene and self-care tips for teenage girls. It talks about maintaining daily hygiene habits, feeling fresh and confident.',
    },
    {
      title: 'Personal Hygiene for Teenage Boys \u2013 Gig Nurse (3:58 m)',
      embedUrl: 'https://www.youtube.com/embed/q43a0O2AEfs',
      level: 2,
      description: 'This educational video explains the importance of good personal hygiene for teenage boys during puberty. It highlights simple habits such as regular bathing, using deodorant, and maintaining clean clothes.',
    },
    {
      title: 'What Causes Body Odour? \u2013 The Dr. Binocs Show (5:26 m)',
      embedUrl: 'https://www.youtube.com/embed/6HygVJA6AgQ',
      level: 2,
      description: 'This informative video explains what causes body odour and how it develops. It highlights that sweat itself does not smell, but when it mixes with bacteria on the skin, it produces an unpleasant odour. The video also explores factors that can influence body smell, such as hygiene, diet, hormones, and sweating. It encourages maintaining good personal hygiene, wearing clean clothes, and adopting healthy habits to prevent body odour and stay fresh throughout the day.',
    },
    ],
  6: [
    {
      title: 'How to Build Self-Control in 3 Simple Steps \u2013 @abhasa.mentalhealth (1:22 m)',
      embedUrl: 'https://www.youtube.com/embed/x8nLkKZurDs?si=1',
      level: 2,
      description: 'This video explains how to build self-control using simple daily habits. It suggests three strategies: pausing for a few seconds before acting on an impulse, planning in advance how to respond to temptations, and using a mental script to remind yourself of long-term benefits. These techniques help train the brain to make better choices and gradually strengthen self-control.',
    },
    {
      title: 'How Your Brain Works? \u2013 The Dr. Binocs Show (4:48 m)',
      embedUrl: 'https://www.youtube.com/embed/ndDpjT0_IM0',
      level: 2,
      description: 'This engaging video explains how the brain works in a simple and easy-to-understand way. It highlights the brain as a vital organ that controls our thoughts, movements, emotions, and body functions. Through clear explanations, the video helps children understand how different parts of the brain work together. It also emphasizes the importance of keeping the brain healthy through proper rest, relaxation, and positive habits, supporting overall learning and well-being.',
    },
    {
      title: 'What Is Depression? \u2013 The Dr. Binocs Show (6:23 m)',
      embedUrl: 'https://www.youtube.com/embed/0hxFR6tezAc',
      level: 2,
      description: 'This informative video explains what depression is in a simple and student-friendly way. It highlights depression as a mental health condition that affects how a person feels, thinks, and behaves. The video discusses common causes and symptoms, such as persistent sadness, low energy, and loss of interest in daily activities. It also emphasizes the importance of seeking support, talking to trusted people, and understanding that help and treatment are available. It encourages awareness, empathy, and taking care of mental well-being.',
    },
    ],
  7: [
    {
      title: 'How You Make the Right Choices \u2013 Healthline (4:54 m)',
      embedUrl: 'https://www.youtube.com/embed/CTD4GrkI0ZI',
      description: 'This video by Healthline explains the difference between good (complex) carbohydrates and bad (refined) carbohydrates. It highlights that whole foods like fruits, vegetables, and whole grains provide sustained energy, while refined carbs like white bread and sugary snacks cause energy spikes and crashes.',
    },
  ],
  8: [
    {
      title: 'What Are Proteins? \u2013 Smile and Learn (3:16 m)',
      embedUrl: 'https://www.youtube.com/embed/U-_uuU1i7oE',
      description: 'This educational video explains what proteins are and why they are important for the body. It shows that proteins are essential nutrients that help build and repair muscles, skin, and organs.',
    },
    {
      title: 'What Makes Muscles Grow? \u2013 Jeffrey Siegel, TED-Ed (4:19 m)',
      embedUrl: 'https://www.youtube.com/embed/2tM1LFFxeKg',
      description: 'This TED-Ed video explains how muscles grow stronger through exercise, nutrition, and rest. It shows that when muscles are challenged with physical activity, tiny fibers break down and rebuild stronger with proper protein intake and sleep.',
    },
  ],
  9: [
    {
      title: 'Trans-fats Reduction \u2013 FSSAI (2:20 m)',
      embedUrl: 'https://www.youtube.com/embed/7aC11qWzOHU',
      description: 'This video by FSSAI\u2019s Eat Right India initiative explains why reducing trans fats and unhealthy fats in the diet is important for good health. It highlights that trans fats, often found in processed and fried foods, can increase the risk of heart disease and other health problems. The video encourages people to limit foods high in trans fats and choose healthier cooking oils and balanced diets to support better heart health.',
    },
    {
      title: 'Re-purpose Used Cooking Oil (RUCO) \u2013 FSSAI (2:26 m)',
      embedUrl: 'https://www.youtube.com/embed/9_WOdHL_940',
      description: 'This awareness video by FSSAI\u2019s Eat Right India initiative explains why cooking oil should not be reused multiple times, as repeated heating can produce harmful substances and unhealthy fats. It introduces the RUCO (Repurpose Used Cooking Oil) initiative, which encourages collecting used cooking oil and converting it into biodiesel instead of reusing it for cooking, helping protect both public health and the environment.',
    },
    {
      title: 'How to Spot Excess Oil in Food \u2013 Dr. Pulkit Mathur, FSSAI (1:15 m)',
      embedUrl: 'https://www.youtube.com/embed/TgR3JTIJmgU',
      description: 'This video by Dr. Pulkit Mathur, a public health nutrition expert associated with FSSAI\u2019s Eat Right India initiative, explains how to identify food that contains too much oil. He advises that if oil is visibly floating on the food or sticking to the sides of the utensil or plate, it is a sign of excess oil. The video encourages choosing foods prepared with less oil to support healthier eating habits and reduce the intake of unhealthy fats.',
    },
    {
      title: 'Oil Reduction Strategies \u2013 FSSAI (1:34 m)',
      embedUrl: 'https://www.youtube.com/embed/dKVoSKASFBo',
      description: 'This awareness video by FSSAI\u2019s Eat Right India initiative explains simple ways to reduce oil consumption in daily cooking. It suggests gradually lowering the amount of oil used in food preparation and adopting healthier cooking practices to support heart health and overall well-being. The video encourages moderation and mindful use of cooking oil to build healthier eating habits.',
    },
  ],
  10: [
    {
      title: 'What Causes Constipation? \u2013 The Dr. Binocs Show (4:39 m)',
      embedUrl: 'https://www.youtube.com/embed/TK0ZF7FNxsU',
      level: 2,
      description: 'This informative video explains what constipation is and what causes it. It highlights how constipation occurs when bowel movements become infrequent or difficult to pass. The video discusses common causes such as low fiber intake, inadequate water consumption, lack of physical activity, and irregular eating habits. It encourages adopting healthy habits like eating fiber-rich foods, staying hydrated, and being active to support proper digestion and prevent constipation.',
    },
    {
      title: 'What Causes Diarrhea? \u2013 The Dr. Binocs Show (4:52 m)',
      embedUrl: 'https://www.youtube.com/embed/tiz8zeGgp7U',
      level: 2,
      description: 'This informative video explains what causes diarrhea in a simple and engaging way. It highlights that diarrhea occurs when the digestive system is unable to properly absorb water, leading to frequent loose or watery stools. The video discusses common causes such as infections, contaminated food or water, poor hygiene, and digestive disturbances. It encourages maintaining good hygiene, eating safe and clean food, and staying hydrated to prevent and manage diarrhea effectively.',
    },
  ],
  11: [
    {
      title: 'Go, Grow and Glow \u2013 FSSAI (4:23 m)',
      embedUrl: 'https://www.youtube.com/embed/5lnMWhU4GEk',
      level: 1,
      description: 'This educational video explains the concept of Go, Grow, and Glow foods, which helps children understand the basics of a balanced diet. It shows that Go foods such as rice and bread give energy, Grow foods like eggs, milk, and pulses help build muscles and body tissues, and Glow foods such as fruits and vegetables provide vitamins and minerals that protect the body from illness. The video encourages including all three food groups in daily meals for better health and growth.',
    },
    {
      title: '\u2018+F\u2019 Fortified Food, featuring Sakshi Tanwar \u2013 FSSAI (1:00 m)',
      embedUrl: 'https://www.youtube.com/embed/gUDvWehagdU',
      level: 2,
      description: 'This video by the Food Safety and Standards Authority of India (FSSAI) explains the importance of fortified foods in improving nutrition. It highlights that essential nutrients such as iron, iodine, and vitamins are added to common staple foods like wheat flour, rice, milk, and salt to help prevent nutrient deficiencies. The video encourages people to look for the \u201C+F\u201D logo on food packages to identify fortified foods and support better health.',
    },
    {
      title: 'Reduction of Vitamin A and D Deficiency through Fortification \u2013 FSSAI (1:46 m)',
      embedUrl: 'https://www.youtube.com/embed/kci3xUiYENE',
      level: 2,
      description: 'This video by the Food Safety and Standards Authority of India (FSSAI) explains how food fortification helps reduce deficiencies of important nutrients such as Vitamin A and Vitamin D. It highlights that commonly consumed foods like milk and edible oil are fortified with essential vitamins to improve public health. The video encourages people to choose products with the \u201C+F\u201D fortification logo to support better nutrition and prevent micronutrient deficiencies.',
    },
  ],
  12: [
    {
      title: 'Johny Johny Yes Papa \u2013 Kids Pharmer (2:12 m)',
      embedUrl: 'https://www.youtube.com/embed/1OvblrRBNFA?si=1',
      level: 1,
      description: 'This video reimagines the classic rhyme Johnny Johnny Yes Papa to teach children about honesty and healthy eating. Through a playful song and story, kids learn that too much sugar is not good and making healthier food choices matters.',
    },
    {
      title: 'Sugar Reduction Strategies \u2013 FSSAI (1:39 m)',
      embedUrl: 'https://www.youtube.com/embed/SSs7uPC_pUY',
      level: 2,
      description: 'This video by FSSAI\u2019s Eat Right India initiative explains simple ways to gradually reduce sugar in everyday foods and drinks. It encourages limiting sugary beverages, checking food labels for added sugar, and choosing healthier alternatives such as fruits or naturally sweet foods. The video highlights that reducing excess sugar intake can help prevent lifestyle diseases and support better overall health.',
    },
  ],
  13: [
    {
      title: 'Salt Reduction Strategies \u2013 FSSAI (1:29 m)',
      embedUrl: 'https://www.youtube.com/embed/e1Wro3BJumw',
      description: 'This video by FSSAI\u2019s Eat Right India initiative explains simple strategies to reduce salt consumption in everyday diets. It encourages people to gradually lower the amount of salt used in cooking, avoid highly processed foods, and rely more on natural flavors like herbs and spices. The video highlights that reducing excess salt intake helps lower the risk of high blood pressure and heart disease, supporting better long-term health.',
    },
  ],
  15: [
    {
      title: 'The Five Tastes \u2013 Denver Museum of Nature & Science, TED-Ed (3:48 m)',
      embedUrl: 'https://www.youtube.com/embed/MZn2PMUWO-Y',
      description: 'This TED-Ed video explains that the human tongue can recognize five basic tastes: sweet, sour, salty, bitter, and umami. It describes how special taste receptors on the tongue detect these flavours and send signals to the brain.',
    },
    {
      title: 'The Science of Spiciness \u2013 Rose Eveleth, TED-Ed (3:39 m)',
      embedUrl: 'https://www.youtube.com/embed/qD0_yWgifDM',
      description: 'This TED-Ed video explains that spiciness is not actually a taste but a sensation caused by compounds like capsaicin, which activate heat-sensitive nerve receptors on the tongue.',
    },
  ],
  16: [
    {
      title: 'Germ Control \u2013 FSSAI (3:54 m)',
      embedUrl: 'https://www.youtube.com/embed/4xyjl4xP0uA',
      level: 1,
      description: 'This video by FSSAI\u2019s Eat Right India initiative explains how germs can spread through unclean hands, surfaces, and food handling practices. It highlights the importance of washing hands regularly, keeping cooking areas clean, and maintaining proper hygiene to prevent food contamination and illness. The video encourages adopting clean habits to ensure safer food and better health.',
    },
    {
      title: 'Prevention of Food Borne Illnesses \u2013 FSSAI (2:01 m)',
      embedUrl: 'https://www.youtube.com/embed/eTbdkF16nzA',
      level: 2,
      description: 'This video by FSSAI\u2019s Eat Right India initiative explains how food-borne illnesses such as diarrhea, dysentery, and typhoid can spread through contaminated food and poor hygiene. It highlights the importance of clean hands, safe food handling, and proper hygiene practices to prevent illness and ensure food safety. The video encourages maintaining cleanliness while preparing and consuming food to protect health.',
    },
    {
      title: 'Methods to Check Food Contamination \u2013 FSSAI (2:11 m)',
      embedUrl: 'https://www.youtube.com/embed/nUV_DWwkW2o',
      level: 2,
      description: 'This video explains simple ways to identify and prevent food contamination to ensure food safety. It highlights the importance of checking food quality, maintaining cleanliness during food preparation, and following hygienic practices to avoid harmful bacteria and unsafe ingredients. The video encourages people to stay aware of food safety measures to protect their health and prevent food-borne illnesses.',
    },
  ],
  17: [
    {
      title: 'Sugar: Hiding in plain sight \u2013 Robert Lustig (TED-Ed, 4:03 m)',
      embedUrl: 'https://www.youtube.com/embed/Q4CZ81EmAsw?si=1',
      level: 2,
      description: 'This TED-Ed video by Robert Lustig explains how sugar can hide in everyday packaged foods and why reading food labels is important. It shows that sugar is not only found in sweets but also in foods like pasta sauce, peanut butter, and sports drinks.',
    },
    {
      title: 'How to Correctly Read Food Labels (5:42 m)',
      embedUrl: 'https://www.youtube.com/embed/ACZE_TZwDsk?si=1',
      level: 2,
      description: 'This short video explains why understanding nutrition information and ingredients is important for healthy eating. It highlights that many packaged foods may appear healthy but can contain hidden sugars or unhealthy ingredients.',
    },
    {
      title: 'How to read labels \u2013 @fitmaize (1:00 m)',
      embedUrl: 'https://www.youtube.com/embed/fRpY94owwe0?si=1',
      level: 1,
      description: 'This short video highlights the importance of reading food labels carefully before buying packaged foods. It explains that many products marketed as \u201Chealthy\u201D may still contain high amounts of added sugar, salt, or unhealthy ingredients.',
    },
    {
      title: 'Reading Food Labels Correctly \u2013 FSSAI (1:54 m)',
      embedUrl: 'https://www.youtube.com/embed/D1ZdNXwx6kY',
      level: 1,
      description: 'This educational video by the Food Safety and Standards Authority of India (FSSAI) explains how to read food labels correctly before buying packaged foods. It highlights key information such as the ingredient list, nutrition facts, manufacturing and expiry dates, and other details that help consumers identify hidden sugar, salt, and unhealthy ingredients. The video encourages people to check labels carefully so they can make safer and healthier food choices.',
    },
  ],
  19: [
    {
      title: 'Build Your Perfect Plate \u2013 FSSAI (0:36 m)',
      embedUrl: 'https://www.youtube.com/embed/8Y-wFpXo6Ts',
      description: 'This video by the Food Safety and Standards Authority of India (FSSAI) explains how to build a balanced and nutritious plate by including the right mix of food groups. It highlights that carbohydrates provide energy, proteins help build and repair the body, fats support cell functions, and fruits and vegetables supply essential vitamins and minerals needed for good health. The video encourages people to include a variety of foods in their daily meals to maintain a healthy and balanced diet.',
    },
    {
      title: 'Simple Daily Habits for a Balanced Diet \u2013 FSSAI (0:37 m)',
      embedUrl: 'https://www.youtube.com/embed/x6d22Unn2qk',
      description: 'This video highlights a few simple daily habits that support a balanced and mindful diet. It encourages practices such as choosing nutritious foods, eating balanced meals, and being mindful of what and how we eat. The message focuses on building small, consistent habits that help maintain good nutrition, overall health, and well-being.',
    },
    {
      title: 'Food Pyramid \u2013 The Dr. Binocs Show (5:24 m)',
      embedUrl: 'https://www.youtube.com/embed/tsgyWIsYvxs',
      description: 'This informative video explains what the food pyramid is and how it helps us understand a balanced diet. It highlights different food groups and shows how much of each type of food we should eat for good health. The video explains how various foods affect our body, supporting growth, energy, and overall well-being. It encourages making balanced food choices and following healthy eating habits to maintain a nutritious diet.',
    },
    ],
  30: [
    {
      title: 'Vermicomposting \u2013 FSSAI (2:13 m)',
      embedUrl: 'https://www.youtube.com/embed/V_ceK13vCOs',
      level: 2,
      description: 'This educational video explains vermicomposting, a natural method of converting kitchen and organic waste into nutrient-rich compost using earthworms. It shows how food scraps and biodegradable waste can be transformed into valuable manure that improves soil health and supports plant growth. The video encourages sustainable waste management practices that help reduce food waste and protect the environment.',
    },
  ],
  31: [
    {
      title: 'Repurposing Food Waste \u2013 FSSAI (2:39 m)',
      embedUrl: 'https://www.youtube.com/embed/lQOyVTN1pbA',
      description: 'This video by the Food Safety and Standards Authority of India (FSSAI) explains how leftover food and kitchen scraps can be repurposed instead of being wasted. It highlights simple practices such as reusing leftovers creatively, sharing extra food with those in need, and following the \u201C6 Rs\u201D approach to reduce food waste. The video encourages people to adopt responsible food habits to conserve resources and support sustainability.',
    },
    {
      title: 'Importance of Recycling | Waste Management \u2013 The Dr. Binocs Show (6:37 m)',
      embedUrl: 'https://www.youtube.com/embed/EyLJ4158Y3s',
      level: 2,
      description: 'This fun and educational video explains why recycling is important for protecting our environment. It highlights how proper waste management and recycling help reduce pollution, conserve natural resources, and keep our surroundings clean. The video also explores what could happen if we stopped recycling, showing its impact on waste buildup and environmental health. It encourages responsible habits like reducing, reusing, and recycling to support a cleaner and more sustainable planet.',
    },
    {
      title: 'What is Plastic Pollution? \u2013 The Dr. Binocs Show (7:29 m)',
      embedUrl: 'https://www.youtube.com/embed/ODni_Bey154',
      level: 2,
      description: 'This informative video explains what plastic pollution is and how it affects our environment. It highlights how excessive use and improper disposal of plastic lead to pollution in land and water bodies, especially oceans. The video discusses the harmful impact on aquatic animals and ecosystems, as well as the long-term environmental consequences. It encourages reducing plastic use, proper waste disposal, and supporting initiatives like plastic bans to protect our planet.',
    },
    ],
  32: [
    {
      title: 'What Are Natural Resources? \u2013 The Dr. Binocs Show (5:55 m)',
      embedUrl: 'https://www.youtube.com/embed/ajk-pvm5vfQ',
      level: 1,
      description: 'This informative video explains what natural resources are and why they are important for life on Earth. It highlights different types of natural resources, including renewable and non-renewable resources, and explains how they are classified. The video also discusses exhaustible and non-exhaustible resources and how humans depend on them for daily needs. It encourages responsible use and conservation of natural resources to protect the environment and ensure sustainability for the future.',
    },
    {
      title: 'What If All Trees Were Cut Down? \u2013 The Dr. Binocs Show (6:19 m)',
      embedUrl: 'https://www.youtube.com/embed/6x8IuJlcXTk',
      level: 2,
      description: 'This thought-provoking video explores what would happen if all trees on Earth were cut down. It highlights the crucial role trees play in producing oxygen, absorbing carbon dioxide, and maintaining the balance of our environment. The video explains the serious effects of deforestation, including climate change, global warming, loss of biodiversity, and impact on human survival. It encourages protecting forests, planting more trees, and understanding the importance of trees for a healthy and sustainable planet.',
    },
  ],
  33: [
    {
      title: 'Global Warming \u2013 The Dr. Binocs Show (6:11 m)',
      embedUrl: 'https://www.youtube.com/embed/Y3gqoDUtmt4',
      level: 2,
      description: 'This informative video explains what global warming is and what causes it. It highlights how the increase in greenhouse gases leads to a rise in Earth\u2019s temperature, affecting climate and weather patterns. The video also discusses the impact of global warming on the environment, including melting ice, rising sea levels, and extreme weather conditions. It encourages awareness and adopting eco-friendly practices to help reduce its effects and protect our planet.',
    },
    {
      title: 'Can We Stop Climate Change? \u2013 The Dr. Binocs Show (5:32 m)',
      embedUrl: 'https://www.youtube.com/embed/31SCn3bcTHc',
      level: 2,
      description: 'This informative video explores whether it is possible to stop climate change and what actions can help reduce its impact. It highlights how human activities like burning fossil fuels and deforestation increase greenhouse gases, leading to rising global temperatures. The video also explains practical solutions such as using renewable energy, planting more trees, conserving resources, and adopting eco-friendly habits. It encourages individual and collective action, showing that while climate change is a serious challenge, we can slow it down and protect our planet through responsible choices.',
    },
    {
      title: 'Acid Rain \u2013 The Dr. Binocs Show (7:25 m)',
      embedUrl: 'https://www.youtube.com/embed/3uzWUQlZvm0',
      level: 2,
      description: 'This informative video explains what acid rain is and how it forms due to air pollution. It highlights how harmful gases released from vehicles, factories, and burning fuels mix with water in the atmosphere to form acids that fall as rain. The video also discusses the harmful effects of acid rain on the environment, including damage to plants, soil, water bodies, and ecosystems. It can make lakes and rivers toxic for aquatic life and weaken trees by removing essential nutrients. The video encourages understanding the causes of pollution and adopting environmentally friendly practices to reduce acid rain and protect our planet.',
    },
  ],
  34: [
    {
      title: 'Aaj Se Thoda Kam \u2013 The Eat Right Movement, featuring Rajkummar Rao (2:00 m)',
      embedUrl: 'https://www.youtube.com/embed/Ue39uvSQI4s',
      description: 'This awareness video from the Eat Right India movement by FSSAI encourages people to reduce the intake of excess sugar, salt, and fat in everyday foods. Through a simple message, it shows how making small changes\u2014such as choosing healthier foods and limiting processed items\u2014can help protect heart health and prevent lifestyle diseases. The video promotes the idea of starting \u201Ca little less from today\u201D to build healthier eating habits.',
    },
  ],
};

export default ADDITIONAL_VIDEOS;
