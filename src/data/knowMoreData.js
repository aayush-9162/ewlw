// Know More / Habit Note content per habit (keyed by habit index 0-based)
const KNOW_MORE_DATA = {
  0: {
    document: {
      title: 'Respect Mealtimes',
      sections: [
        {
          heading: 'Introduction',
          text: 'Eating at regular times is one of the best habits you can build for a healthy body and mind. Just like school has a timetable, your body also likes a daily food timetable. When you respect mealtimes, your body works better, you feel energetic, and you can concentrate in class.',
        },
        {
          heading: '1. The Body Clock and Mealtimes',
          text: 'Inside your body there is a biological clock that controls when you feel hungry, sleepy, and energetic. This clock follows a daily rhythm.',
          list: [
            'When you eat meals at regular times:',
            'Your body knows when to expect food',
            'Digestion works smoothly',
            'Energy levels stay steady',
            'If meal timings keep changing every day, the body clock gets confused, which can lead to tiredness, overeating, and poor digestion.',
          ],
        },
        {
          heading: '2. Hunger Hormones: Leptin and Ghrelin',
          text: 'Your body uses special chemicals called hormones to control hunger.',
          list: [
            'Ghrelin \u2013 the hunger hormone. It signals the brain that the body needs food.',
            'Leptin \u2013 the fullness hormone. It tells the brain that the stomach is satisfied.',
            'Regular meal timings help keep these hormones balanced. Irregular eating can disturb them and make people feel hungry even after eating enough.',
          ],
        },
        {
          heading: '3. Why Skipping Breakfast Is Not a Good Idea',
          text: 'Breakfast literally means \u201cbreaking the fast\u201d after a long night without food.',
          list: [
            'Skipping breakfast may cause:',
            'Low energy in the morning',
            'Poor concentration in school',
            'Feeling tired or irritable',
            'Overeating later in the day',
            'A healthy breakfast provides energy for learning, playing, and thinking clearly.',
          ],
        },
        {
          heading: '4. The Problem with Irregular Eating Habits',
          text: 'Eating at random times or snacking continuously can cause problems such as:',
          list: [
            'Upset digestion',
            'Sudden hunger and overeating',
            'Low or fluctuating energy levels',
            'Poor appetite for proper meals',
            'The body works best when meals follow a simple and regular pattern.',
          ],
        },
        {
          heading: '5. Avoid Late Dinners',
          text: 'Dinner should ideally be eaten 2\u20133 hours before going to bed.',
          list: [
            'Late dinners can:',
            'Disturb sleep',
            'Slow digestion',
            'Cause discomfort or heaviness',
            'An earlier and lighter dinner allows the body to rest and recover during sleep.',
          ],
        },
        {
          heading: '6. Avoid Constant Snacking',
          text: 'Eating all the time does not allow the body to complete digestion.',
          list: [
            'Too many snacks may:',
            'Reduce appetite for healthy meals',
            'Increase intake of sugary or processed foods',
            'Confuse hunger signals',
            'Healthy meals at regular times are better than constant nibbling.',
          ],
        },
        {
          heading: 'Ideal Meal Pattern During the Day',
          text: 'In an ideal situation, meals should be balanced and spread across the day to provide steady energy.',
        },
        {
          heading: '1. Breakfast (Morning Energy Meal)',
          text: 'Breakfast should include energy foods, protein, and some fruits.',
          list: [
            'Good examples:',
            'Whole grains: roti, oats, poha, upma, idli, dosa, whole-grain bread',
            'Protein foods: eggs, milk, yogurt, paneer, nuts, peanut butter',
            'Fruits: banana, apple, papaya, seasonal fruits',
            'Example breakfast:',
            'Idli with sambar + fruit',
            'Oats with milk and nuts',
            'Egg and whole-grain toast + fruit',
            'Breakfast should be filling and nutritious, because it starts the day.',
          ],
        },
        {
          heading: '2. Lunch (Main Meal of the Day)',
          text: 'Lunch should be balanced, including grains, vegetables, and protein.',
          list: [
            'Ideal lunch plate:',
            'Whole grains: roti, rice, millet, or chapati',
            'Protein: dal, beans, chickpeas, eggs, paneer, fish, or chicken',
            'Vegetables: cooked vegetables or salad',
            'Yogurt or curd',
            'Example lunch:',
            'Roti + dal + vegetable + curd',
            'Rice + rajma + salad',
            'Millet roti + paneer + vegetables',
            'Lunch provides energy for the rest of the school day.',
          ],
        },
        {
          heading: '3. Healthy Afternoon Snack',
          text: 'A small snack can help maintain energy between lunch and dinner.',
          list: [
            'Better snack choices:',
            'Fruits',
            'Nuts or peanuts',
            'Roasted chana',
            'Yogurt',
            'Sprouts',
            'Homemade sandwiches',
            'Avoid frequent snacks like chips, sugary drinks, or sweets.',
          ],
        },
        {
          heading: '4. Dinner (Light Evening Meal)',
          text: 'Dinner should be lighter than lunch and eaten early.',
          list: [
            'Good dinner options:',
            'Roti or light rice dishes',
            'Dal or soup',
            'Vegetables',
            'Light protein such as paneer, eggs, or beans',
            'Example dinner:',
            'Vegetable soup + roti',
            'Khichdi + yogurt',
            'Roti + dal + vegetables',
            'Dinner should help the body relax before sleep.',
          ],
        },
        {
          heading: 'Healthy Mealtime Habits to Follow',
          text: 'Eat meals at regular times every day',
          list: [
            'Never skip breakfast',
            'Eat a balanced lunch',
            'Choose healthy snacks when needed',
            'Eat dinner early and lightly',
            'Stop eating 2\u20133 hours before bedtime',
          ],
        },
        {
          heading: 'Key Message',
          list: [
            'Respecting mealtimes helps your body stay strong, your brain stay alert, and your energy remain steady throughout the day. When meals are regular and balanced, the body grows and functions in the best possible way.',
          ],
        },
      ],
    },
  },
  1: {
    document: {
      title: 'Often and Enough Water',
      sections: [
        {
          heading: 'Introduction',
          text: 'Our Body Is Mostly Water\u000aAbout 60\u201370% of the human body is made of water, which is why drinking water regularly is important for health.',
          list: [
            'Water Is As Important As Food\u000aEven though water is not called a nutrient, the body needs it just as much as it needs food to function properly.',
            'Water Maintains Blood Balance\u000aDrinking enough water helps maintain healthy blood volume and balance, allowing nutrients and oxygen to move through the body.',
            'Water Helps Remove Toxins\u000aThe body uses water to remove toxins and waste through urine and sweat, keeping the body clean and healthy.',
            'Water Keeps Joints and Tissues Healthy\u000aProper hydration helps lubricate joints and maintain the flexibility of body tissues.',
            'Water Helps the Brain Work Better\u000aStaying hydrated supports better concentration, clear thinking, and a positive mood.',
            'Water Needs Vary for Everyone\u000aThe amount of water we need depends on body weight, physical activity, and weather conditions.',
          ],
        },
        {
          heading: 'CORE IDEA',
          text: '\ud83d\udca7 Drink Water Often\u000a\ud83d\udca7 Drink Enough Water\u000a\ud83d\udca7 Stay Healthy and Active!',
        },
        {
          heading: 'Habit 2: Drink Water Often and Enough (Hydration)',
          text: 'Water is essential for life and for maintaining good health. Although hydration is not classified as a nutrient, it is just as crucial as food intake for maintaining proper body functions. The human body is made up of about 60\u201370% water, and nearly every system in the body depends on it to work efficiently.',
        },
        {
          heading: 'Importance of Hydration',
          text: 'Proper hydration supports many important body functions. Water helps regulate body temperature, transport nutrients and oxygen to cells, remove waste through urine and sweat, and keep joints lubricated. It also supports digestion, improves concentration, and helps maintain energy levels.',
          list: [
            'Water is indispensable for numerous metabolic activities, including:',
            'Transportation of nutrients and oxygen to cells',
            'Regulation of body temperature',
            'Maintenance of blood volume and acid\u2013base balance',
            'Elimination of toxins and waste products',
            'Lubrication and elasticity of tissues and joints',
            'Proper functioning of the digestive system',
            'Hydration of body cells',
            'Supporting cognitive function and improving mood',
            'When the body does not get enough water, it can lead to dehydration, causing symptoms such as headaches, dizziness, fatigue, dry mouth, and difficulty concentrating.',
          ],
        },
        {
          heading: 'Sources of Hydration',
          text: 'Hydration does not come only from drinking water. Fluids and foods both contribute to daily hydration. Beverages such as water, milk, and other drinks provide fluids, while many foods also contain a high amount of water. Examples of high-moisture foods include:',
          list: [
            'Gourd vegetables (such as bottle gourd, ridge gourd, and cucumber)',
            'Melons (such as watermelon and muskmelon)',
            'Tomatoes',
            'Salad greens and leafy vegetables',
            'Among all sources, plain water remains the best and healthiest option for hydration because it has no added sugar or calories.',
            'How Much Water Do We Need?',
            'Adequate water intake varies depending on age, body size, activity level, and climate. A useful guideline is about 30\u201360 millilitres of water per kilogram of body weight per day. For example, a person weighing 60 kg may need roughly 1.8 to 3.6 litres of water daily, depending on physical activity and environmental temperature.',
            'People who are physically active, exposed to hot weather, or experiencing illness may require more fluids to maintain proper hydration.',
          ],
        },
        {
          heading: 'Clean and Safe Water',
          text: 'Drinking clean and safe water is essential to prevent waterborne diseases such as diarrhea, cholera, and typhoid. Safe water can be ensured by:',
          list: [
            'Using filtered, boiled, or treated water',
            'Storing water in clean, covered containers',
            'Using clean cups or bottles for drinking',
            'Avoiding water from unsafe or contaminated sources',
            'Proper sanitation and protection of water sources are important for maintaining public health.',
          ],
        },
        {
          heading: 'Healthy Hydration Habits',
          text: 'Healthy hydration means making water the main beverage and developing simple daily habits such as:',
          list: [
            'Drinking water regularly throughout the day',
            'Starting the day with a glass of water',
            'Carrying a clean water bottle',
            'Drinking more water during exercise or hot weather',
            'Including water-rich fruits and vegetables in meals',
            'Avoiding sugary drinks such as soft drinks, packaged juices, and energy drinks',
            'Limiting caffeinated beverages like excessive tea, coffee, and cola, as they may increase fluid loss and add unnecessary sugar or stimulants',
            'Drinking water often and in sufficient amounts is a simple but powerful habit for maintaining health and wellbeing. Ensuring adequate hydration through clean water, healthy beverages, and water-rich foods, while avoiding sugary and highly caffeinated drinks, helps the body perform its essential functions and supports overall physical and mental health. \ud83d\udca7',
          ],
        },
      ],
    },
  },
  2: {
    document: {
      title: 'Unplug and Recharge \u2013 Limit Screen Time',
      sections: [
        {
          heading: 'Introduction',
          text: 'Today, screens are everywhere. We use phones, tablets, computers, and televisions for learning, entertainment, and communication. While technology can be useful, spending too much time on screens can become a problem. Learning to unplug and recharge helps us stay healthy, focused, and happy.',
          list: [
            'Why Is Too Much Screen Time a Problem?',
            'When children spend long hours looking at screens, it often replaces activities that are important for healthy growth. Instead of playing outdoors, reading, talking with family, or interacting with friends, children may remain absorbed in a device for long periods. Over time, this habit can affect both the body and the mind.',
            'Many apps, games, and videos are designed to keep our attention for as long as possible. This makes it easy to lose track of time and difficult to stop. As a result, children may develop habits that reduce real-life interaction, physical activity, and rest.',
            'Another concern is that the internet may expose children to inappropriate or harmful content, such as violent material, misleading information, or unhealthy online behaviour. Without guidance and limits, children may come across content that is confusing, disturbing, or not suitable for their age.',
          ],
        },
        {
          heading: 'Effects on Physical Health',
          text: 'Too much screen time can affect the body in several ways:',
          list: [
            'Eye strain and headaches: Staring at screens for long periods can tire the eyes.',
            'Poor posture: Sitting in one position for too long can cause neck, shoulder, and back pain.',
            'Less physical activity: Time spent on screens often replaces exercise, sports, or outdoor play.',
            'Sleep problems: Using screens late in the evening can disturb sleep because the light from screens affects the body\u2019s natural sleep cycle.',
            'Healthy bodies need movement, fresh air, and proper rest. Reducing screen time helps children stay active and energetic.',
          ],
        },
        {
          heading: 'The 20\u201320\u201320 Rule for Eye Care',
          text: 'Using screens for long periods can tire the eyes and strain the eye muscles. A simple way to protect your eyes is to follow the 20\u201320\u201320 rule:',
          list: [
            'Every 20 minutes, look at something 20 feet away for at least 20 seconds.',
            'This short break allows your eye muscles to relax and helps prevent eye strain, dryness, and headaches. Blinking your eyes during this break also helps keep them moist and comfortable.',
            'Students who study or attend online classes should remember to take these small eye breaks regularly. These pauses not only protect eyesight but also help the mind stay fresh and focused.',
          ],
        },
        {
          heading: 'Effects on Mental and Emotional Health',
          text: 'Excessive screen use can also affect how children think and feel.',
          list: [
            'Reduced concentration: Constant switching between apps, games, and videos can make it harder to focus on studies.',
            'Stress and anxiety: Social media or online comparisons can sometimes make children feel worried or unhappy.',
            'Loneliness and social isolation: Spending too much time online may reduce face-to-face interaction with family and friends, leading some children to feel lonely even when they are constantly connected online.',
            'Addictive habits: Children may feel the urge to check devices frequently, making it hard to disconnect.',
            'Taking breaks from screens helps the mind relax, improves focus, and supports emotional well-being.',
            'What Can Children Do?',
            'Children can develop healthy digital habits by making small changes:',
            'Set a daily limit for recreational screen time.',
            'Take a break every 30\u201340 minutes when using a screen for study or fun.',
            'Spend time on outdoor games, sports, reading, art, or hobbies.',
            'Avoid using screens at least one hour before bedtime.',
            'Keep some times of the day, such as mealtimes, free from devices.',
            'Talk to a parent or teacher if they see something online that makes them uncomfortable or confused.',
            'These habits help balance technology use with activities that support learning and health.',
            'What Can Schools Do?',
            'Schools also play an important role in guiding students toward healthy screen habits.',
            'Schools can:',
            'Educate students about responsible and balanced technology use.',
            'Encourage sports, physical activities, and creative hobbies.',
            'Organize screen-free activities, clubs, and outdoor programs.',
            'Provide awareness sessions for students and parents on digital well-being and online safety.',
            'Promote classroom practices that include movement breaks and offline learning activities.',
            'Guide students about safe and responsible use of the internet.',
          ],
        },
        {
          heading: 'Conclusion',
          text: 'Technology is a powerful tool, but it should not control our time or habits. By unplugging regularly and recharging through physical activity, social interaction, and rest, children can protect their health and improve their learning. Developing balanced screen habits today will help create healthier, safer, and happier lives in the future.',
        },
      ],
    },
  },
  3: {
    document: {
      title: 'Time to Move, Stay Active',
      sections: [
        {
          heading: 'Introduction',
          text: 'Our bodies are made to move! Staying active every day helps us grow stronger, healthier, and happier. When we move our bodies through play, sports, exercise, or simple daily activities, we take good care of our health.',
          list: [
            'Why Is Staying Active Important?',
            'Being active has many benefits for children:',
            'Stronger muscles and bones \u2013 Exercise helps our body grow strong.',
            'Better heart health \u2013 Activities that make us breathe faster help keep our heart healthy.',
            'More energy and a better mood \u2013 Moving our bodies can make us feel happier and more energetic.',
            'Better focus in school \u2013 Physical activity helps the brain stay alert and ready to learn.',
            'Healthy growth and stronger immunity \u2013 Active children often feel healthier and fall sick less often.',
          ],
        },
        {
          heading: 'More Than Just Burning Calories',
          text: 'Physical activity should not be seen only as a way to burn calories. When we move our bodies, many amazing things happen inside us\u2014even at the cellular level, which means deep inside our body where tiny living units called cells work to keep us healthy.',
          list: [
            'Regular physical activity helps:',
            'Improve how our heart, lungs, and muscles work together.',
            'Increase blood flow, which brings oxygen and nutrients to all parts of the body.',
            'Support brain health, improving memory, concentration, and mood.',
            'Strengthen the body\u2019s natural defense system.',
            'Help our cells function better so the body can repair, grow, and stay healthy.',
            'In this way, movement helps refresh both the body and the mind, not just manage weight.',
          ],
        },
        {
          heading: 'Move Beyond Just Sports Periods',
          text: 'One or two periods or sessions for physical education in school are helpful, but being active every day is even more important. Movement should not happen only during sports class. It should become a regular part of our daily routine.',
          list: [
            'Today, many children spend long hours sitting\u2014watching television, using phones or computers, or choosing convenient ways that require little movement. This kind of sedentary lifestyle means the body is not moving enough. Over time, too much sitting can affect our health.',
            'That is why it is important to add small movements throughout the day\u2014walking, playing, stretching, or helping with simple physical tasks. Even short bursts of activity can make a big difference.',
            'How Much Activity Do Children Need?',
            'Children should aim to be physically active for at least 60 minutes every day. This activity can include different types of movements that help the body in different ways.',
          ],
        },
        {
          heading: 'Types of Activities',
          text: '1. Aerobic Activities (for the heart and lungs)\u000aThese activities make your heart beat faster and help you breathe more deeply.',
          list: [
            'Examples include:',
            'Running or jogging',
            'Cycling',
            'Swimming',
            'Skipping rope',
            'Playing football, basketball, or other active games',
            '2. Strength Activities (for muscles and bones)\u000aThese activities help build stronger muscles and bones.',
            'Examples include:',
            'Climbing',
            'Push-ups or sit-ups',
            'Gymnastics',
            'Playing on playground equipment',
            '3. Stretching Activities (for flexibility)\u000aStretching keeps muscles flexible and helps prevent stiffness.',
            'Examples include:',
            'Simple stretches after exercise',
            'Yoga movements',
            'Touching your toes or reaching up high',
            '4. Balance Activities (for coordination)\u000aBalance exercises improve coordination and help prevent falls.',
            'Examples include:',
            'Standing on one foot',
            'Walking heel-to-toe in a straight line',
            'Practicing yoga poses such as the tree pose',
          ],
        },
        {
          heading: 'Make Movement a Daily Habit',
          text: 'You do not need special equipment to stay active. What matters most is moving regularly and enjoying it. Walk more, take the stairs, play outside, dance to music, or ride a bicycle with friends.',
          list: [
            'Remember: Every movement counts. Staying active every day helps build a strong body, a healthy mind, and habits that will benefit you throughout life. \ud83d\udcaa\ud83c\udfc3\u200d\u2640\ufe0f',
          ],
        },
      ],
    },
  },
  4: {
    document: {
      title: 'Sleep and Health for School Children',
      sections: [
        {
          heading: 'Introduction',
          text: 'Sleep is essential for children\u2019s growth, learning, and overall health. Sleep is not a passive state where the body simply switches off. Instead, it works like a \u201crest and reset button\u201d for the body and brain. During sleep, the body repairs tissues, regulates hormones, processes learning from the day, and prepares the body for the next day.',
          list: [
            'Most school-age children need 9\u201311 hours of sleep each night to stay healthy, active, and focused in school.',
          ],
        },
        {
          heading: 'Why Sleep Is Important',
          text: 'Good sleep helps children:',
          list: [
            'stay energetic and attentive in school',
            'improve memory and learning',
            'support healthy growth and development',
            'maintain a healthy weight',
            'strengthen the immune system',
            'When children do not sleep enough, they may feel tired, irritable, and less able to concentrate during the day.',
          ],
        },
        {
          heading: 'Sleep and Hormones',
          text: 'Sleep plays an important role in regulating hormones, which are chemical signals that control many body functions.',
          list: [
            'One key hormone is the growth hormone, which is released mainly during deep sleep. This hormone supports physical growth, muscle development, and tissue repair.',
            'Another hormone called melatonin helps control the body\u2019s sleep\u2013wake cycle. It signals the body when it is time to sleep and when it is time to wake up. Irregular sleep schedules, late-night screen use, and very late bedtimes can disturb this natural rhythm.',
          ],
        },
        {
          heading: 'Sleep and Appetite Regulation',
          text: 'Sleep also influences how hungry or full we feel.',
          list: [
            'Two important hormones regulate appetite:',
            'Leptin, which signals that the body is full',
            'Ghrelin, which signals hunger',
            'When children do not get enough sleep:',
            'leptin levels decrease, so they may not feel full easily',
            'ghrelin levels increase, making them feel hungrier',
            'As a result, children may crave more-sugary or high-fat foods, which can affect healthy eating habits.',
          ],
        },
        {
          heading: 'Sleep and Late-Night Eating',
          text: 'Late-night eating can also disturb healthy sleep patterns. When children eat heavy meals or snacks close to bedtime, the body continues digesting instead of resting. This can make it harder to fall asleep and may affect sleep quality.',
          list: [
            'Late-night eating can also interfere with the body\u2019s natural metabolic rhythms, making it more difficult for the body to regulate energy and appetite properly.',
            'Developing a routine where dinner is eaten well before bedtime can support both better digestion and better sleep.',
          ],
        },
        {
          heading: 'Sleep and Metabolic Health',
          text: 'Sleep helps the body manage metabolism, which is how the body converts food into energy.',
          list: [
            'When children get enough sleep:',
            'the body uses energy efficiently',
            'blood sugar levels remain more stable',
            'appetite and digestion stay balanced',
            'When sleep is regularly too short or irregular, the body may struggle to manage energy properly, which can affect energy levels, weight regulation, and long-term health.',
          ],
        },
        {
          heading: 'Healthy Sleep Habits for Children',
          text: 'Children can support healthy sleep by following simple routines:',
          list: [
            'go to bed and wake up at regular times each day',
            'avoid screens and bright lights before bedtime',
            'eat dinner at least 2\u20133 hours before sleep',
            'stay physically active during the day',
            'create a quiet and comfortable sleeping environment',
            'Sleep acts as the body\u2019s daily reset system, helping regulate hormones, appetite, digestion, and energy use. For school children, regular and sufficient sleep supports growth, learning, emotional well-being, and healthy eating habits. Developing good sleep routines early in life helps children stay healthy, focused, and active every day.',
          ],
        },
      ],
    },
  },
  5: {
    document: {
      title: 'Neat and Clean Always',
      sections: [
        {
          heading: 'Introduction',
          text: 'Being neat and clean is an important habit that every student should develop from a young age. Cleanliness keeps our body healthy, helps us feel comfortable, and creates a positive environment around us. When we take care of our personal hygiene and keep our surroundings organised, we show respect for ourselves and for the people around us.',
          list: [
            'A student who is neat and organised is usually more confident, responsible, and ready to learn. Clean habits not only improve health but also build discipline and good character.',
          ],
        },
        {
          heading: '1. Why Being Clean and Organised Matters',
          text: 'Cleanliness is closely connected to good health. Our bodies come into contact with dust, sweat, and germs every day. If we do not maintain hygiene, these germs can cause illnesses such as infections, stomach problems, skin diseases, and colds.',
          list: [
            'Maintaining cleanliness has many benefits:',
            'Better Health:\u000aRegular cleaning of the body removes dirt and germs that can cause diseases.',
            'Freshness and Comfort:\u000aWhen we are clean, we feel fresh, energetic, and comfortable throughout the day.',
            'Confidence:\u000aStudents who are neat and tidy often feel more confident in school, during activities, and while interacting with others.',
            'Good Impression:\u000aClean clothes, tidy hair, and organised belongings create a positive impression on teachers, classmates, and others.',
            'Respect for Shared Spaces:\u000aKeeping classrooms, playgrounds, and homes clean shows responsibility and respect for the environment.',
            'Being organised also improves daily life. When things are arranged properly, we can find them quickly and use our time better. An organised student is able to focus more on learning rather than searching for misplaced items.',
          ],
        },
        {
          heading: '2. Daily Personal Hygiene and Grooming',
          text: 'Personal hygiene means taking care of our body to stay clean and healthy. Good hygiene habits should be followed every day.',
          list: [
            'Bathing',
            'Taking a bath every day helps remove sweat, dirt, and bacteria from the body. It also refreshes the body and improves circulation. During hot weather or after sports and physical activity, bathing becomes even more important.',
          ],
        },
        {
          heading: 'Brushing Teeth',
          text: 'Brushing teeth twice a day\u2014once in the morning and once before going to bed\u2014helps prevent tooth decay, cavities, and bad breath. Students should also rinse their mouth after meals.',
        },
        {
          heading: 'Hand Washing',
          text: 'Washing hands with soap is one of the most effective ways to stop the spread of germs. Hands should be washed:',
          list: [
            'Before eating food',
            'After using the toilet',
            'After playing outside',
            'After touching animals or dirty surfaces',
          ],
        },
        {
          heading: 'Nail Care',
          text: 'Long or dirty nails can carry germs that enter the body while eating. Nails should be trimmed regularly and kept clean.',
        },
        {
          heading: 'Hair Care',
          text: 'Hair should be kept clean and combed neatly. Washing hair regularly helps remove dust and oil and prevents scalp problems.',
        },
        {
          heading: 'Clean Clothing',
          text: 'Wearing clean clothes every day is important for hygiene. School uniforms should be washed regularly, and socks and undergarments should be changed daily.',
        },
        {
          heading: 'Using a Handkerchief',
          text: 'Students should always carry a handkerchief or tissue and use it when coughing, sneezing, or wiping sweat. This prevents germs from spreading to others.',
        },
        {
          heading: '3. Hygiene During Puberty',
          text: 'As children grow older, their bodies go through natural changes during puberty. Puberty usually begins between the ages of 10 and 14, though it may start earlier or later for some children.',
          list: [
            'During this time, the body grows rapidly and hormones cause changes in the skin, hair, and sweat glands. Because of these changes, maintaining personal hygiene becomes even more important.',
          ],
        },
        {
          heading: 'Increased Sweating',
          text: 'During puberty, sweat glands become more active. Sweat itself does not smell, but bacteria on the skin can cause body odour. To manage this:',
          list: [
            'Bathe regularly',
            'Wear clean clothes',
            'Use deodorant if needed',
          ],
        },
        {
          heading: 'Skin Care',
          text: 'Hormonal changes may cause pimples or acne. Washing the face gently two or three times a day and keeping the skin clean can help manage this.',
        },
        {
          heading: 'Care of Private Body Parts',
          text: 'It is important to keep private body areas clean and dry. Washing these areas daily helps prevent infections and discomfort.',
        },
        {
          heading: 'Changing Undergarments',
          text: 'Undergarments should always be clean and changed daily. This helps maintain hygiene and prevents skin problems.',
        },
        {
          heading: 'Menstrual Hygiene for Girls',
          text: 'During puberty, girls begin to experience menstruation (periods). Good menstrual hygiene includes:',
          list: [
            'Using clean sanitary pads or menstrual products',
            'Changing them regularly',
            'Washing hands before and after changing',
            'Keeping the body clean during this time',
            'Understanding these changes and maintaining hygiene helps young people stay healthy and confident during puberty.',
          ],
        },
        {
          heading: '4. How to Keep Oneself Organised',
          text: 'Being organised means arranging our belongings, tasks, and time in a proper way. Organisation helps students manage their daily activities efficiently.',
        },
        {
          heading: 'Organising School Materials',
          text: 'Students can keep their school supplies organised by:',
          list: [
            'Arranging books and notebooks according to subjects',
            'Keeping stationery in a pencil box',
            'Using labels for books and folders',
          ],
        },
        {
          heading: 'Packing the School Bag',
          text: 'Packing the school bag according to the next day\'s timetable helps avoid forgetting books or bringing unnecessary items.',
        },
        {
          heading: 'Maintaining a Study Space',
          text: 'A clean and organised study area helps students concentrate better. The study table should:',
          list: [
            'Be free from clutter',
            'Have only necessary books and supplies',
            'Be cleaned regularly',
          ],
        },
        {
          heading: 'Planning Time',
          text: 'Students can organise their day by following a simple timetable that includes:',
          list: [
            'Study time',
            'Homework time',
            'Play and exercise',
            'Rest and sleep',
          ],
        },
        {
          heading: 'Returning Things to Their Place',
          text: 'After using any item\u2014such as books, toys, or clothes\u2014it should be returned to its proper place. This simple habit keeps spaces tidy and saves time.',
        },
        {
          heading: 'Preparing for the Next Day',
          text: 'Before going to bed, students can:',
          list: [
            'Pack their school bag',
            'Lay out their uniform',
            'Check homework',
            'Keep shoes and socks ready',
            'This makes mornings smoother and less stressful.',
          ],
        },
        {
          heading: '5. Clean Surroundings and Community Hygiene',
          text: 'Cleanliness is not limited to our personal habits. We must also care for the cleanliness of our surroundings.',
          list: [
            'Students can help keep their environment clean by:',
            'Throwing waste in dustbins',
            'Avoiding littering in classrooms or playgrounds',
            'Keeping desks and school bags tidy',
            'Helping maintain cleanliness at home',
            'Participating in school cleanliness drives',
            'Clean surroundings reduce pollution, prevent disease, and create a pleasant place to study and live.',
          ],
        },
        {
          heading: 'Conclusion',
          text: 'The habit of being neat, clean, and organised is an essential life skill. It protects our health, improves our confidence, and helps us manage our responsibilities better.',
          list: [
            'When students practise good hygiene and organisation every day, they develop discipline and self-respect. These habits not only help during school years but also remain valuable throughout life.',
            'Remember:\u000aA clean body, tidy surroundings, and organised habits lead to a healthier, happier, and more successful future.',
          ],
        },
      ],
    },
  },
  6: {
    document: {
      title: 'Empower Your Mind for Mental Health',
      sections: [
        {
          heading: '1. Understanding the Mind',
          text: 'Mental health is essential for the healthy development of children. It influences how they think, learn, behave, and build relationships. During childhood and adolescence, the brain is still developing, making this stage important for building emotional strength and resilience.',
          list: [
            'The mind functions at two levels: the conscious and the subconscious. The conscious mind helps children think, make decisions, and respond to situations. The subconscious mind stores experiences, beliefs, and emotional memories. Repeated experiences such as criticism, bullying, or failure may create negative beliefs like \u201cI am not capable,\u201d which can affect behaviour and confidence. Supportive environments and positive encouragement help build healthy beliefs and self-confidence.',
          ],
        },
        {
          heading: 'What Children Can Do',
          text: 'Practice positive self-talk and focus on strengths.',
          list: [
            'Learn from mistakes instead of fearing them.',
            'Speak to a trusted teacher, friend, or parent when facing difficulties.',
          ],
        },
        {
          heading: 'What Schools Can Do',
          text: 'Encourage a supportive and respectful classroom culture.',
          list: [
            'Promote emotional learning and confidence-building activities.',
            'Create safe spaces where students feel comfortable sharing concerns.',
          ],
        },
        {
          heading: '2. Stress, Anxiety, and Overthinking',
          text: 'Children often experience stress and anxiety due to academic pressure, exams, expectations from parents and teachers, and peer comparisons. When stress becomes continuous, the body releases cortisol, known as the stress hormone. While cortisol helps the body deal with challenges, consistently high levels can affect memory, concentration, sleep, and emotional balance.',
          list: [
            'Many children also experience overthinking, repeatedly worrying about mistakes or performance. This cycle of negative thinking can increase anxiety and reduce confidence.',
            'Brain chemistry also influences emotions. Serotonin supports feelings of calmness and wellbeing. Balanced serotonin levels help children remain emotionally stable and focused.',
          ],
        },
        {
          heading: 'What Children Can Do',
          text: 'Take short breaks during study time.',
          list: [
            'Use deep breathing when feeling anxious.',
            'Focus on effort and improvement rather than only results.',
          ],
        },
        {
          heading: 'What Schools Can Do',
          text: 'Reduce unnecessary academic pressure.',
          list: [
            'Teach students practical strategies for managing stress.',
            'Provide counselling support or guidance sessions when needed.',
          ],
        },
        {
          heading: '3. Instant Rewards, Food, and Behaviour',
          text: 'The brain responds to rewards through dopamine, a chemical linked with motivation and pleasure. While dopamine encourages learning and achievement, excessive exposure to quick rewards\u2014such as social media, gaming, or constant digital stimulation\u2014creates a habit of instant gratification. This can reduce patience and make it harder for children to stay focused on long-term goals.',
          list: [
            'Children are also often rewarded with food, particularly sugary or highly processed snacks. While such rewards may provide short-term excitement, frequent consumption of unhealthy foods can affect mood, energy levels, and behaviour, sometimes leading to restlessness or difficulty concentrating.',
          ],
        },
        {
          heading: 'What Children Can Do',
          text: 'Limit screen time and digital distractions.',
          list: [
            'Choose healthy snacks and balanced meals.',
            'Work toward long-term goals instead of expecting quick rewards.',
          ],
        },
        {
          heading: 'What Schools Can Do',
          text: 'Encourage healthy food choices in school environments.',
          list: [
            'Avoid using junk food as a reward.',
            'Recognize effort, creativity, and teamwork as meaningful achievements.',
          ],
        },
        {
          heading: '4. Social Connection and Emotional Wellbeing',
          text: 'Healthy relationships are vital for mental wellbeing. Oxytocin, often called the bonding hormone, is released during positive social interactions such as trust, cooperation, and kindness. It helps children feel safe, connected, and supported.',
          list: [
            'However, many children experience loneliness, even when surrounded by classmates. Limited meaningful interaction or excessive online engagement can lead to feelings of isolation. Strong social connections help children feel valued and build emotional resilience.',
          ],
        },
        {
          heading: 'What Children Can Do',
          text: 'Build friendships based on trust and respect.',
          list: [
            'Participate in group activities, sports, or teamwork.',
            'Support classmates and practice kindness.',
          ],
        },
        {
          heading: 'What Schools Can Do',
          text: 'Encourage teamwork, group learning, and collaborative activities.',
          list: [
            'Promote inclusive and respectful school environments.',
            'Provide opportunities for sports, arts, and community engagement.',
          ],
        },
        {
          heading: '5. Healthy Habits for a Balanced Mind',
          text: 'Daily habits strongly influence mental health. Breathing exercises and meditation help calm the mind and reduce stress. Slow, deep breathing activates the body\u2019s relaxation response and helps lower cortisol levels. Meditation and mindfulness improve focus and emotional control.',
          list: [
            'Mental wellbeing is also connected to lifestyle choices. Poor sleep, excessive screen time, unhealthy eating, and lack of physical activity can weaken emotional health. At the same time, poor mental health can disrupt other healthy habits, affecting concentration, motivation, and discipline.',
          ],
        },
        {
          heading: 'What Children Can Do',
          text: 'Practice deep breathing or mindfulness for a few minutes each day.',
          list: [
            'Maintain regular sleep and physical activity.',
            'Balance study, recreation, and social interaction.',
          ],
        },
        {
          heading: 'What Schools Can Do',
          text: 'Introduce short breathing or mindfulness practices in classrooms.',
          list: [
            'Encourage physical activity, sports, and outdoor time.',
            'Promote balanced routines that support both learning and wellbeing.',
          ],
        },
        {
          heading: 'A Shared Responsibility',
          text: 'When schools and children work together to build healthy habits, supportive relationships, and positive thinking, they create an environment where every child can develop a strong, balanced, and empowered mind.',
        },
      ],
    },
  },
  7: {
    document: {
      title: 'Choosing Carbohydrate-Rich Foods Wisely',
      sections: [
        {
          heading: 'Introduction',
          text: 'Food should not only give us energy but also help maintain the body\u2019s balance.\u000aOur body needs glucose (blood sugar) for energy, especially for the brain, but it keeps the level of blood sugar within a safe and steady range. Even when we are not eating, the body can get energy from stored sugar in the liver, body fat, or by making glucose from other nutrients.',
          list: [
            'However, when we eat a lot of sugary or refined carbohydrate foods, blood sugar can rise quickly. The body then has to work hard to bring it back to normal.',
            'This helps us understand food in a slightly different way. Food is not only meant to provide energy; it should also help the body maintain balance, especially by keeping blood sugar stable.',
            'If stable blood sugar is important, then we should try to avoid large spikes and sudden drops in blood glucose. We can do this by choosing our foods carefully.',
          ],
        },
        {
          heading: '1. Prefer foods that digest slowly',
          text: 'These foods release glucose gradually and help keep blood sugar steady.',
          list: [
            'Examples:',
            'Vegetables',
            'Whole fruits',
            'Lentils and beans',
            'Nuts and seeds',
            'Whole grains (in moderation)',
          ],
        },
        {
          heading: '2. Limit foods that cause rapid spikes',
          text: 'Highly refined foods turn into glucose very quickly and can raise blood sugar sharply.',
          list: [
            'Examples:',
            'Sugary drinks and sweets',
            'White bread and refined flour foods',
            'Ultra-processed snacks',
          ],
        },
        {
          heading: '3. Combine carbohydrates with protein and fat',
          text: 'Eating carbohydrates together with protein or healthy fats slows down how quickly glucose enters the blood.',
          list: [
            'Examples:',
            'Fruit with nuts',
            'Rice with dal',
            'Roti with vegetables and curd or paneer',
          ],
        },
        {
          heading: '4. Choose whole foods more often',
          text: 'Foods that are closer to their natural form usually affect blood sugar more gently.',
          list: [
            'Examples:',
            'Whole fruits instead of fruit juice',
            'Whole grains instead of refined flour',
            'Home-cooked meals instead of packaged foods',
          ],
        },
        {
          heading: '5. Avoid constant snacking',
          text: 'Eating very frequently keeps raising blood sugar again and again. Allowing some time between meals gives the body time to restore balance.',
        },
        {
          heading: 'Conclusion',
          text: 'Most carbohydrates convert into glucose, and the body carefully regulates blood sugar within a narrow range. While food does provide energy, the body also has stored energy reserves that it can use when needed.',
          list: [
            'Therefore, eating wisely means choosing foods that nourish the body while keeping blood sugar stable and supporting the body\u2019s natural balance.',
          ],
        },
        {
          heading: 'Choosing Carbohydrate-Rich Foods Wisely',
          text: 'Food should not only give us energy but also help maintain the body\u2019s balance.\u000aOur body needs glucose (blood sugar) for energy, especially for the brain, but it keeps the level of blood sugar within a safe and steady range. Even when we are not eating, the body can get energy from stored sugar in the liver, body fat, or by making glucose from other nutrients.',
          list: [
            'However, when we eat a lot of sugary or refined carbohydrate foods, blood sugar can rise quickly. The body then has to work hard to bring it back to normal.',
            'This helps us understand food in a slightly different way. Food is not only meant to provide energy; it should also help the body maintain balance, especially by keeping blood sugar stable.',
            'If stable blood sugar is important, then we should try to avoid large spikes and sudden drops in blood glucose. We can do this by choosing our foods carefully.',
          ],
        },
        {
          heading: '1. Prefer foods that digest slowly',
          text: 'These foods release glucose gradually and help keep blood sugar steady.',
          list: [
            'Examples:',
            'Vegetables',
            'Whole fruits',
            'Lentils and beans',
            'Nuts and seeds',
            'Whole grains (in moderation)',
          ],
        },
        {
          heading: '2. Limit foods that cause rapid spikes',
          text: 'Highly refined foods turn into glucose very quickly and can raise blood sugar sharply.',
          list: [
            'Examples:',
            'Sugary drinks and sweets',
            'White bread and refined flour foods',
            'Ultra-processed snacks',
          ],
        },
        {
          heading: '3. Combine carbohydrates with protein and fat',
          text: 'Eating carbohydrates together with protein or healthy fats slows down how quickly glucose enters the blood.',
          list: [
            'Examples:',
            'Fruit with nuts',
            'Rice with dal',
            'Roti with vegetables and curd or paneer',
          ],
        },
        {
          heading: '4. Choose whole foods more often',
          text: 'Foods that are closer to their natural form usually affect blood sugar more gently.',
          list: [
            'Examples:',
            'Whole fruits instead of fruit juice',
            'Whole grains instead of refined flour',
            'Home-cooked meals instead of packaged foods',
          ],
        },
        {
          heading: '5. Avoid constant snacking',
          text: 'Eating very frequently keeps raising blood sugar again and again. Allowing some time between meals gives the body time to restore balance.',
        },
        {
          heading: 'Conclusion',
          text: 'Most carbohydrates convert into glucose, and the body carefully regulates blood sugar within a narrow range. While food does provide energy, the body also has stored energy reserves that it can use when needed.',
          list: [
            'Therefore, eating wisely means choosing foods that nourish the body while keeping blood sugar stable and supporting the body\u2019s natural balance.',
          ],
        },
      ],
    },
  },
  8: {
    document: {
      title: 'Protein from Foods',
      sections: [
        {
          heading: 'Introduction',
          text: 'Although protein can provide energy if needed, its main role is not energy supply. Carbohydrates and fats are the body\u2019s primary energy sources, while protein is mainly used for growth, repair, and body functions.',
          list: [
            'Protein plays a key role in building and maintaining muscles. During growth, exercise, or physical activity, muscles experience small amounts of wear. Amino acids from food proteins help repair and strengthen muscle fibers, which supports muscle development.',
            'Add: Concept of Adequate protein: Add about how much protein is required',
            'Both quality and quantity matters in case of protein',
            'Do add protein amount in commonly eaten food',
            '1 glass milk- 200-250 ml- 8g',
            '1 small katori curd- 100 ml - 3-4  g,',
            '25 g raw dal- 1 small katori dal cooked 100 ml- 6g,',
            '1 egg-7g)',
            'Spread protein across all meals and snacks',
          ],
        },
        {
          heading: 'Protein and Satiety',
          text: 'Protein-rich foods often help people feel full for a longer time. This feeling of fullness is called satiety. Because protein digests more slowly than simple carbohydrates, meals with adequate protein can help reduce hunger between meals.',
          list: [
            'Protein from foods provides amino acids that the body uses to build and repair tissues, support muscle growth, and carry out many important functions. Both plant-based and animal-based foods can supply protein. Animal proteins are usually complete, while plant proteins can be combined to provide all essential amino acids. In addition to supporting muscle health, protein also helps increase satiety and contributes to a balanced, nutritious diet.',
          ],
        },
        {
          heading: 'Plant-Based and Animal-Based Protein Foods',
          text: 'Protein can come from both plant and animal foods.',
          list: [
            'Animal-based protein foods include eggs, milk, yogurt, fish, chicken, and meat. These foods usually contain complete proteins, meaning they provide all the essential amino acids the body needs.',
            'Plant-based protein foods include beans, lentils, peas, nuts, seeds, and soy products. Some plant proteins are incomplete proteins, meaning they may lack one or more essential amino acids. However, eating a variety of plant foods (for example rice with lentils or beans with grains) can provide all the necessary amino acids.',
          ],
        },
        {
          heading: 'Complete and Incomplete Proteins',
          text: 'Proteins in foods are often described as complete or incomplete.',
          list: [
            'Complete proteins contain all the essential amino acids the body cannot make. Animal foods such as eggs and milk are common examples.',
            'Incomplete proteins lack one or more essential amino acids. Many plant foods fall into this category, but combining different plant foods can make the diet nutritionally complete.',
            'Tell the students about the biological value of protein -that even if they eat complete protein they might not be having high biological value protein .',
            'Biological Value (BV) measures how efficiently the body can use and absorb the protein for growth and repair.',
            'Soy-chicken-milk-egg (low to high BV)',
          ],
        },
        {
          heading: 'Complementary Foods: Rice and Lentils',
          text: 'How do cereals and pulses complement each other?',
          list: [
            'Some plant foods do not contain all the essential Amino acids in the right amounts. These foods are called incomplete proteins. However, when two such foods are eaten together, they can complement each other and provide a complete set of essential amino acids.',
            'A common example is rice and lentils.rice and dal',
            'Rice is low in the amino acid Lysine but contains enough Methionine.',
            'Lentils have plenty of lysine but relatively less methionine.',
            'When rice and lentils are eaten together (such as in dishes like dal with rice), the amino acids from both foods combine and provide a more balanced and complete protein for the body.',
            'This idea is called complementary proteins\u2014different plant foods that together supply all essential amino acids needed for good health.',
            'In simple terms:\u000aEating combinations like rice with lentils, beans with corn, or bread with peanut butter helps plant-based diets provide complete protein for the body.',
          ],
        },
        {
          heading: 'Protein Foods That Also Contain Carbohydrates',
          text: 'Many protein foods also contain carbohydrates. For example:',
          list: [
            'Lentils and beans contain protein and carbohydrates.',
            'Chickpeas and peas also provide both nutrients.',
            'These foods give the body energy from carbohydrates and body-building materials from protein at the same time.',
          ],
        },
      ],
    },
  },
  9: {
    document: {
      title: 'Role of Fats in the Diet',
      sections: [
        {
          heading: 'Introduction',
          text: 'Fats are an essential nutrient in the diet. While fats can provide energy, their role in the body goes beyond energy supply. They support growth and development, help the body absorb important vitamins, protect organs, and provide essential fatty acids that the body cannot produce on its own.',
        },
        {
          heading: 'Fats and Brain Development',
          text: 'Fats play an important role in the development and functioning of the brain and nervous system. Certain fats, particularly essential fatty acids such as omega-3 and omega-6, support memory, concentration, and overall brain health.',
          list: [
            'Among these, omega-3 fatty acids are especially beneficial, as they support brain function and may also help reduce inflammation in the body.',
          ],
        },
        {
          heading: 'Absorption of Vitamins and Essential Fatty Acids',
          text: 'Fats help the body absorb fat-soluble vitamins, which are necessary for many body functions.',
          list: [
            'Vitamin A \u2013 supports healthy vision',
            'Vitamin D \u2013 helps in bone growth and strength',
            'Vitamin E \u2013 protects body cells',
            'Vitamin K \u2013 important for blood clotting',
            'Fats also provide essential fatty acids, which are necessary for healthy skin, hair, and normal body functioning.',
          ],
        },
        {
          heading: 'Protection, Energy, and Body Functions',
          text: 'Fats help protect the body and support everyday functions.',
          list: [
            'Provide a cushion around vital organs such as the heart and kidneys',
            'Help maintain body temperature by providing insulation',
            'Provide a concentrated source of energy for daily activities',
            'Although carbohydrates are the body\u2019s main energy source, fats provide more than twice as much energy per gram.',
          ],
        },
        {
          heading: 'Healthy and Unhealthy Fats',
          text: 'Not all fats affect the body in the same way, so it is important to choose healthy sources.',
          list: [
            'Healthy sources of fats include:',
            'Nuts and seeds',
            'Milk and dairy products',
            'Eggs and fish',
            'Vegetable oils such as mustard, olive, and sunflower oil',
            'Traditional fats like ghee and coconut oil in moderate amounts',
            'Moderate amounts of saturated fats, such as those found in ghee and coconut oil, can be part of a balanced diet. Ghee contains butyric acid, which may support gut health, while coconut oil contains medium-chain fatty acids that are often used quickly for energy.',
            'Unhealthy fats to avoid:',
            'Trans fats, which should be avoided completely',
            'Foods such as packaged snacks, bakery products, and deep-fried fast foods',
            'Including healthy fats in balanced amounts helps support overall health and normal body functions.',
          ],
        },
        {
          heading: 'Embrace Healthy Fats Through Smart Food Choices',
          text: 'Healthy fats can be easily included in everyday meals with simple changes in cooking and food combinations. Instead of avoiding fats completely, it is better to use natural fats in balanced amounts and combine them with regular foods.',
          list: [
            'Simple ways to include healthy fats:',
            'Add a small ghee tadka to vegetable dishes instead of eating very dry subzi. This improves both taste and nutrient absorption.',
            'Eat whole-grain bread with butter or nut butter, and add a few nuts such as almonds or walnuts.',
            'Add nuts or peanut butter to fruits, such as apples or bananas, to make the snack more filling and nutritious.',
            'Use ghee and cold-pressed oils such as mustard oil, coconut oil, or groundnut oil for cooking in moderate amounts.',
            'These simple additions help make meals more balanced, satisfying, and nutritious while providing beneficial fats needed by the body.',
          ],
        },
      ],
    },
  },
  10: {
    document: {
      title: 'LOOK AFTER YOUR GUT: GUT-FRIENDLY FOODS',
      sections: [
        {
          heading: 'Introduction',
          text: 'A healthy gut is the foundation of good health. The gut refers to the digestive system, especially the stomach and intestines, where food is digested and nutrients are absorbed. Inside the gut live trillions of helpful microorganisms, often called good bacteria.',
          list: [
            'Together they form the gut microbiome. These microbes help us digest food, fight infections, and even support learning and mood.',
          ],
        },
        {
          heading: 'Why Gut Health Matters',
          text: 'A healthy gut helps children:',
          list: [
            'Digest food better',
            'Absorb important nutrients',
            'Build stronger immunity',
            'Maintain regular bowel movements',
            'Improve mood and concentration',
            'About 70% of the body\u2019s immune system is linked to the gut, which means gut health plays a major role in preventing illness.',
          ],
        },
        {
          heading: 'The Role of Fibre in Our Food',
          text: 'Fibre is the part of plant foods that our body cannot digest fully. Instead, it supports digestion and feeds good gut bacteria. Fibre also helps prevent constipation and keeps the digestive system active.',
          list: [
            'There are two main types of fibre.',
          ],
        },
        {
          heading: '1. Soluble Fibre',
          text: 'Soluble fibre dissolves in water and forms a soft gel in the stomach. It helps slow digestion and supports good bacteria in the gut.',
          list: [
            'Common sources',
            'Oats',
            'Apples',
            'Bananas',
            'Lentils and beans',
            'Barley',
          ],
        },
        {
          heading: '2. Insoluble Fibre',
          text: 'Insoluble fibre does not dissolve in water. It adds bulk to food and helps move waste through the intestines.',
          list: [
            'Common sources',
            'Whole wheat',
            'Brown rice',
            'Nuts and seeds',
            'Vegetables such as carrots, cabbage, and beans',
            'Both types are important for a healthy digestive system.',
          ],
        },
        {
          heading: 'Prebiotic Foods',
          text: 'Prebiotics are special types of fibre that act as food for good gut bacteria. When children eat prebiotic foods, they help beneficial microbes grow stronger.',
          list: [
            'Examples',
            'Garlic',
            'Onion',
            'Bananas',
            'Whole grains',
            'Beans and legumes',
            'A less-known fact is that slightly unripe bananas contain more prebiotic fibre than fully ripe ones.',
          ],
        },
        {
          heading: 'Probiotic Foods',
          text: 'Probiotics are foods that contain live beneficial bacteria. These bacteria help maintain a healthy balance in the gut.',
          list: [
            'Examples',
            'Curd (yogurt)',
            'Buttermilk',
            'Fermented foods like idli, dosa, and dhokla',
            'Some traditional fermented foods',
            'Regular consumption of probiotic foods can improve digestion and help the body recover after illness.',
            'Mixing and Matching for a Happy Gut',
            'Gut health improves when fibre, prebiotics, and probiotics are eaten together. Balanced meals help both the body and the gut bacteria.',
            'Examples of good combinations:',
            'Vegetable paratha with curd',
            'Idli or dosa with sambar',
            'Dal, roti, and vegetables',
            'Fruit with yogurt',
            'Rice with fermented foods and vegetables',
            'Eating a variety of foods is one of the best ways to support gut health.',
          ],
        },
        {
          heading: 'The Gut\u2013Brain Connection',
          text: 'The gut and the brain communicate constantly through what scientists call the gut\u2013brain connection.',
          list: [
            'Healthy gut bacteria help produce chemicals that influence:',
            'Mood',
            'Memory',
            'Focus',
            'Stress levels',
            'In fact, about 90% of the body\u2019s serotonin (a chemical that affects mood) is produced in the gut, not the brain. This is why digestive health can affect how children feel and behave.',
          ],
        },
        {
          heading: 'Some Lesser-Known Facts',
          text: 'Gut bacteria begin developing right from birth and change with diet and environment.',
          list: [
            'Eating many different plant foods helps create a stronger and more diverse gut microbiome.',
            'Physical activity and good sleep also support gut health.',
            'Traditional home-cooked meals often support gut health better than highly processed foods.',
          ],
        },
        {
          heading: 'Common Misconceptions',
          text: '1. Only probiotic foods improve gut health.\u000aNot true. Gut bacteria also need fibre and prebiotic foods to survive and grow.',
          list: [
            '2. Fibre is important only for adults.\u000aChildren also need fibre for proper digestion and prevention of constipation.',
            '3. All bacteria are harmful.\u000aMany bacteria are beneficial and essential for good health.',
            '4. Expensive supplements are necessary for gut health.\u000aSimple everyday foods like curd, fruits, vegetables, and whole grains are enough to support a healthy gut.',
            'Gut health is essential for children\u2019s growth, immunity, digestion, and learning ability. A balanced diet that includes fibre-rich foods, prebiotics, and probiotics helps build a strong digestive system and a healthy gut microbiome. Encouraging children to eat a variety of fruits, vegetables, whole grains, pulses, and fermented foods can help them develop lifelong healthy eating habits.',
          ],
        },
      ],
    },
  },
  11: {
    document: {
      title: 'TAKE FOODS RICH IN VITAMINS AND MINERALS',
      sections: [
        {
          heading: 'Introduction',
          text: 'Vitamins and minerals are tiny nutrients that our body needs in small amounts, but they are very important for growth, strength, and good health. Children need them every day so they can grow well, stay active, learn better, and fight diseases.',
          list: [
            'Why Do We Need Vitamins and Minerals?',
            'Vitamins and minerals help our body in many ways:',
            '\ud83e\uddb4 Build strong bones and teeth',
            '\ud83d\udc40 Keep our eyes healthy',
            '\ud83e\udde0 Support brain development and learning',
            '\ud83d\udee1\ufe0f Protect us from illness and infections',
            '\ud83d\udcaa Help muscles work properly',
            '\u26a1 Help the body release energy from food',
            '\ud83e\ude79 Help wounds heal and keep skin healthy',
            'Without enough vitamins and minerals, children may feel tired, fall sick often, or grow slowly.',
          ],
        },
        {
          heading: 'Types of Vitamins',
          text: 'Vitamins are mainly of two types.',
        },
        {
          heading: '1. Water-Soluble Vitamins',
          text: 'These include Vitamin B group and Vitamin C.',
          list: [
            'They cannot be stored in the body, so we need to eat foods rich in them every day.',
            'Many B vitamins help release energy from food so we can play and study.',
            'Vitamin C helps in:',
            'building strong skin and tissues (collagen),',
            'healing wounds,',
            'fighting infections,',
            'helping the body absorb iron.',
            'Foods rich in water-soluble vitamins include:',
            'Whole grains and millets',
            'Pulses and beans',
            'Vegetables',
            'Fruits such as guava, citrus fruits (orange, lemon), berries, and amla (Indian gooseberry)',
          ],
        },
        {
          heading: '2. Fat-Soluble Vitamins',
          text: 'These include Vitamins A, D, E, and K.',
          list: [
            'These vitamins help with:',
            '\ud83d\udc40 Good vision (Vitamin A)',
            '\ud83e\uddb4 Strong bones (Vitamin D)',
            '\ud83d\udee1\ufe0f Immunity and body protection',
            '\ud83e\ude78 Blood clotting (Vitamin K)',
            'Sources include:',
            'Milk, curd, and other dairy foods',
            'Nuts and seeds',
            'Leafy green vegetables',
            'Orange and yellow vegetables such as carrots and pumpkin',
          ],
        },
        {
          heading: 'Important Vitamins for Indian Children',
          text: 'Some vitamins are especially important in India.',
        },
        {
          heading: 'Vitamin A',
          text: 'Helps eyesight and immunity',
          list: [
            'Found in carrots, pumpkin, spinach, mango, papaya',
          ],
        },
        {
          heading: 'Vitamin B12',
          text: 'Important for blood and brain health',
          list: [
            'Mostly found in animal foods like milk, eggs, and dairy products',
            'People who eat only plant foods may need fortified foods or supplements',
          ],
        },
        {
          heading: 'Vitamin D',
          text: 'Helps the body use calcium to build strong bones',
          list: [
            'Our body makes vitamin D from sunlight',
            'Children should spend some time outdoors in sunlight, especially between 11 AM and 3 PM, to help the body make vitamin D.',
            'Small amounts may also come from:',
            'mushrooms grown in sunlight',
            'some fortified foods',
          ],
        },
        {
          heading: 'Minerals: Another Important Group of Nutrients',
          text: 'Minerals are also essential for the body. They help in:',
          list: [
            '\ud83e\uddb4 Bone health',
            '\ud83d\udcaa Muscle movement',
            '\u2764\ufe0f Heart health',
            '\ud83e\udde0 Brain function',
            '\u2699\ufe0f Making enzymes and hormones',
            'Important minerals include:',
            'Calcium \u2013 bones and teeth',
            'Iron \u2013 healthy blood and prevents anaemia',
            'Iodine \u2013 brain development',
            'Zinc \u2013 immunity and growth',
            'Magnesium and potassium \u2013 muscle and heart function',
            'These minerals are found in many foods such as:',
            'milk and dairy products',
            'pulses and beans',
            'nuts and seeds',
            'whole grains and millets',
            'fruits and vegetables',
          ],
        },
        {
          heading: 'Fruits and Vegetables: Nature\u2019s Treasure \ud83c\udf4e\ud83e\udd66',
          text: 'Fruits and vegetables are rich in vitamins, minerals, and antioxidants that keep our body strong.',
          list: [
            'Eating different colours of fruits and vegetables helps us get many nutrients.',
          ],
        },
        {
          heading: 'Make a Rainbow Plate \ud83c\udf08',
          text: '\ud83d\udd34 Red \u2013 tomatoes, apples',
          list: [
            '\ud83d\udfe0 Orange \u2013 carrots, papaya',
            '\ud83d\udfe1 Yellow \u2013 mango, banana',
            '\ud83d\udfe2 Green \u2013 spinach, peas',
            '\ud83d\udfe3 Purple \u2013 beetroot, grapes',
            'When we eat a variety of colours, our body receives many different vitamins and minerals.',
          ],
        },
        {
          heading: 'Fortified Foods and Supplements',
          text: 'Fortified foods are foods to which important vitamins and minerals are added to improve nutrition. In India, common fortified foods include:',
          list: [
            'Fortified milk and edible oils \u2013 contain Vitamin A and Vitamin D for good vision, immunity, and strong bones.',
            'Fortified rice and wheat flour (atta) \u2013 contain iron, folic acid, and Vitamin B12, which help prevent anaemia and support growth and brain development.',
            'Double fortified salt \u2013 contains iodine and iron, important for brain development and healthy blood.',
            'To identify fortified foods, look for the +F logo on food packets in India. This symbol shows that the food has added vitamins or minerals.',
            'If children do not get enough nutrients from food, doctors may give supplements, such as iron, vitamin D, or vitamin B12.',
          ],
        },
        {
          heading: 'Healthy Habit to Remember \u2b50',
          text: 'Eat fruits and vegetables every day',
          list: [
            'Try to have a rainbow plate with many colours',
            'Eat whole grains, pulses, nuts, and dairy foods',
            'Spend some time playing outdoors in sunlight',
            'Choose healthy foods instead of junk food',
            'A colourful, balanced diet helps children grow strong, stay healthy, and learn better every day! \ud83c\udf31\ud83d\udcaa',
          ],
        },
      ],
    },
  },
  12: {
    document: {
      title: 'Hold Back on Sugar',
      sections: [
        {
          heading: 'Introduction',
          text: 'Sugar is a type of carbohydrate that gives the body quick energy. When we eat sugar, it is quickly digested and enters the bloodstream, causing the blood sugar level to rise. While sugar can provide energy, eating too much of it can harm our health. Therefore, it is important to develop the habit of limiting sugar intake.',
        },
        {
          heading: 'Natural Sugar and Added Sugar',
          text: 'Sugar can be found in two main forms: natural sugar and added sugar.',
          list: [
            'Natural sugars are present in foods such as fruits and milk. These foods also provide important nutrients like vitamins, minerals, and fiber, which help the body grow and stay healthy.',
            'Added sugars are sugars that are added to foods during cooking or food processing. They are commonly found in sweets, cakes, biscuits, chocolates, packaged juices, breakfast cereals, and flavored yogurt. Added sugar provides energy but usually does not provide important nutrients.',
          ],
        },
        {
          heading: 'Sugary Drinks',
          text: 'Sugary drinks are one of the biggest sources of added sugar. These include soft drinks, packaged fruit drinks, energy drinks, and sweetened beverages. Such drinks may contain a large amount of sugar but very little nutrition. Drinking them often can increase the risk of tooth decay, weight gain, and other health problems. Water, milk, or fresh fruit are healthier choices.',
        },
        {
          heading: 'Hidden Sugars in Packaged Foods',
          text: 'Sugar is often hidden in packaged foods under different names. When reading food labels, sugar may appear as glucose, fructose, sucrose, corn syrup, maltose, or dextrose. Because sugar is present in many packaged foods, children may consume more sugar than they realize.',
        },
        {
          heading: 'Jaggery, Brown Sugar, and Other Sweeteners',
          text: 'Some people believe that jaggery (gur) or brown sugar are healthier than white sugar. Jaggery may contain small amounts of minerals, and brown sugar contains a little molasses. However, both are still forms of sugar and should be eaten in moderation.',
          list: [
            'There are also other natural sweeteners, such as honey and maple syrup, and artificial or low-calorie sweeteners like aspartame, saccharin, and stevia. Even when using these sweeteners, it is important to avoid making foods too sweet.',
          ],
        },
        {
          heading: 'Sugar and Health',
          text: 'Eating too much sugar can lead to several health problems, including:',
          list: [
            'Tooth decay (cavities)',
            'Weight gain',
            'Increased risk of diseases such as diabetes in the future',
            'Because of these risks, it is important to limit foods and drinks that contain high amounts of sugar.',
          ],
        },
        {
          heading: 'Guidelines for Daily Sugar Intake',
          text: 'Health experts recommend that added sugar should make up less than 10% of the total daily calories, and preferably less than 5% for better health. For children, this means about 20\u201325 grams of added sugar per day, which is around 4\u20136 teaspoons.',
          list: [
            'Since sugar is often present in packaged foods and drinks, much of this daily amount may come from hidden sugars, even without adding sugar directly to food.',
          ],
        },
        {
          heading: 'Developing the Habit of Holding Back on Sugar',
          text: 'To build the habit of limiting sugar:',
          list: [
            'Choose fresh fruits instead of sweets',
            'Drink water or milk instead of sugary drinks',
            'Reduce consumption of packaged snacks and sweetened beverages',
            'Read food labels to check for hidden sugars',
            'Enjoy sweet foods only occasionally',
          ],
        },
        {
          heading: 'Conclusion',
          text: 'Sugar can provide quick energy, but too much sugar can harm health. By choosing natural foods and limiting added sugar, children can develop the healthy habit of holding back on sugar and maintain a balanced and nutritious diet.',
        },
      ],
    },
  },
  13: {
    document: {
      title: '\u2018Yes\u2019 to Less Salt \u2013 Limit Sodium',
      sections: [
        {
          heading: 'Introduction',
          text: 'Salt makes food tasty, but eating too much salt can harm our health. Learning to limit salt is an important healthy habit for students. Salt contains sodium, a mineral that the body needs in small amounts to function properly. However, modern diets often contain more sodium than our bodies actually require, mainly from processed and packaged foods. Developing the habit of using less salt and choosing healthier foods helps protect long-term health.',
        },
        {
          heading: '1. Why Do We Need Sodium?',
          text: 'Sodium plays several important roles in the body. It helps to:',
          list: [
            'Maintain the balance of fluids in the body',
            'Help nerves send signals between the brain and the body',
            'Support muscle movement, including the beating of the heart',
            'Maintain normal blood pressure and cell function',
            'Although sodium is essential, the body requires only a small quantity. When we regularly eat too much sodium, it can lead to high blood pressure, heart disease, and kidney problems later in life. Therefore, moderation is important.',
          ],
        },
        {
          heading: '2. Sodium and Potassium Balance',
          text: 'The body works best when there is a healthy balance between sodium and potassium. For good health, the body needs less sodium and more potassium.',
          list: [
            'Excess sodium can increase blood pressure and strain the heart.',
            'Potassium helps relax blood vessels and reduce the harmful effects of excess sodium.',
            '\ud83d\udc49 A simple guide is: Potassium intake should be about 2\u20133 times higher than sodium intake.',
            'Eating foods rich in potassium helps maintain this balance. Examples include:',
            'Bananas',
            'Coconut water',
            'Spinach and other green leafy vegetables',
            'Beans and lentils',
            'Fresh fruits and vegetables',
            'A diet rich in fruits, vegetables, and whole foods naturally improves the sodium\u2013potassium balance, which supports heart health.',
          ],
        },
        {
          heading: '3. Sodium from Common Salt',
          text: 'The most common source of sodium in our diet is table salt used in cooking and at the table.',
          list: [
            'Salt is made of two elements:',
          ],
        },
        {
          heading: 'Salt = Sodium + Chloride',
          text: 'About 40% of salt is sodium.\u000aFor example, 1 teaspoon of salt contains about 2,000 mg of sodium.',
          list: [
            'Replace some salt with MSG to reduce sodium without compromising taste.',
            'However, sodium does not come only from the salt we add while cooking. Large amounts of sodium are also found in:',
            'Packaged foods',
            'Sauces and condiments',
            'Snack foods',
            'Instant foods and fast foods',
            'Often, these hidden sources contribute more sodium than cooking salt.',
          ],
        },
        {
          heading: '4. How Much Salt Is Enough?',
          text: 'Health experts recommend limiting salt intake.',
          list: [
            'Adults: Less than 5 grams of salt per day (about 1 teaspoon)',
            'Children: Even smaller amounts are recommended.',
            'It is important to remember that this limit includes all sources of salt \u2014 cooking salt, table salt, and salt present in packaged or processed foods.',
          ],
        },
        {
          heading: '5. Types of Salt \u2013 Are They Different?',
          text: 'Many varieties of salt are available in the market, such as:',
          list: [
            'Table salt',
            'Sea salt',
            'Rock salt (sendha namak)',
            'Himalayan pink salt',
            'These salts may look different in colour, texture, or crystal size, and some may contain tiny amounts of other minerals. However, from a health point of view, all types of salt contain sodium.',
            'Therefore, switching from one type of salt to another does not significantly reduce sodium intake.',
          ],
        },
        {
          heading: '6. Sodium Reduction Options',
          text: 'Some alternatives and ingredients may help reduce sodium intake when used carefully.',
        },
        {
          heading: 'Monosodium Glutamate (MSG)',
          text: 'MSG is used in some foods to provide an umami or savoury flavour.',
          list: [
            'It contains sodium, but less sodium than common salt.',
            'Because it enhances flavour, sometimes less salt is required in cooking.',
          ],
        },
        {
          heading: 'Low-Sodium Salt (Potassium Salt)',
          text: 'Some salt products replace part of the sodium with potassium.',
          list: [
            'These are often called low-sodium or potassium salts.',
            'They can help reduce sodium intake, but they should be used carefully and in moderation.',
            'Natural Sodium in Foods\u000aMany natural foods already contain small amounts of sodium, such as milk, vegetables, and grains.',
          ],
        },
        {
          heading: '7. Added Salt vs Hidden Salt',
          text: 'Understanding the difference between added salt and hidden salt helps us control sodium intake.',
          list: [
            'Added Salt\u000aSalt that we add during cooking or sprinkle on food at the table.',
            'Hidden Salt\u000aSalt that is already present in processed and packaged foods, such as:',
            'Chips and namkeen',
            'Instant noodles',
            'Biscuits and crackers',
            'Pickles and sauces',
            'Packaged soups and ready-to-eat meals',
            'Often, hidden salt contributes more sodium than the salt added during cooking.',
          ],
        },
        {
          heading: '8. Reducing Salt at Home',
          text: 'Small daily habits can help reduce salt intake without reducing taste.',
          list: [
            'Taste food first before adding extra salt',
            'Use herbs, spices, lemon, garlic, and ginger to enhance flavour',
            'Prefer fresh, home-cooked meals instead of packaged foods',
            'Limit salty snacks, instant foods, and fast foods',
            'Choose fresh fruits, nuts, and vegetables as snacks',
            'Gradually reducing salt allows the taste buds to adjust naturally over time.',
          ],
        },
        {
          heading: '9. Spotting Salt in Packaged Foods',
          text: 'When buying packaged foods, reading the nutrition label can help identify sodium content.',
          list: [
            'Look for words such as:',
            'Sodium',
            'Salt',
            'Baking soda',
            'Sodium bicarbonate',
            'Sodium nitrate',
            'Monosodium glutamate (MSG)',
            'Foods labelled \u201clow sodium\u201d or \u201creduced sodium\u201d usually contain less salt than regular products.',
          ],
        },
        {
          heading: '10. Sodium-to-Calories Thumb Rule (1:1)',
          text: 'A simple rule can help judge whether a packaged food has too much sodium.',
          list: [
            '\ud83d\udc49 Sodium (in mg) should not exceed the number of calories in the food.',
            'For example:',
            'If a snack contains 200 calories, it should ideally have 200 mg sodium or less.',
            'If the sodium number is much higher than the calories, the food is likely too salty and should be eaten only occasionally.',
          ],
        },
        {
          heading: 'Key Message',
          list: [
            'Eating less salt today helps protect health in the future. By choosing fresh foods, fruits, vegetables, and home-cooked meals, and by using spices and natural flavours instead of excess salt, students can build lifelong healthy eating habits. \ud83c\udf3f',
          ],
        },
      ],
    },
  },
  14: {
    document: {
      title: 'Making Mealtimes Mindful',
      sections: [
        {
          heading: 'Introduction',
          text: 'Eating is something we do every day, but many times we rush through meals without paying attention to what or how we are eating. Mindful mealtimes help us slow down, enjoy our food, and take better care of our bodies. When we eat with awareness, we not only nourish our bodies but also build healthier habits and stronger connections with others.',
        },
        {
          heading: '1. Chewing Well and Eating Slowly',
          text: 'Chewing is the first and one of the most important steps of digestion. When we chew food properly, it is broken down into smaller pieces and mixed with saliva. This makes it easier for the stomach to digest the food and absorb nutrients. Poor chewing can make digestion harder and may cause discomfort such as bloating or stomach pain.',
          list: [
            'Students often swallow food quickly, especially when they are in a hurry or distracted by television, phones, or conversations. Eating too fast also prevents the body from recognizing when it is full.',
            'To build the habit of mindful chewing:',
            'Take small bites instead of large ones.',
            'Try chewing each bite thoroughly before swallowing.',
            'Notice the taste, smell, and texture of the food.',
            'Put the spoon or fork down between bites sometimes.',
            'Eating slowly allows the brain enough time to receive signals from the stomach that it is satisfied. This helps prevent overeating and supports better digestion.',
          ],
        },
        {
          heading: '2. The Power of the PAUSE',
          text: 'One of the simplest ways to practice mindful eating is to introduce a short pause before and during meals. A pause helps us shift from rushing into eating to becoming aware and present.',
          list: [
            'Before eating, take a brief moment to pause:',
            'Look at your food.',
            'Take a deep breath.',
            'Notice how hungry you feel.',
            'Prepare your mind to eat calmly.',
            'This pause helps the body get ready for digestion and encourages us to eat more thoughtfully.',
            'During the meal, pause occasionally:',
            'After a few bites, stop for a moment.',
            'Check if you are still hungry.',
            'Notice the flavours and textures of the food.',
            'Drink a sip of water and continue slowly.',
            'These small pauses help us listen to our bodies and avoid eating too quickly or too much.',
          ],
        },
        {
          heading: '3. Practicing Intuitive Eating',
          text: 'Intuitive eating means learning to trust the body\'s natural signals of hunger and fullness. Our body usually tells us when it needs energy and when it has had enough.',
          list: [
            'Instead of eating simply because food is available or because everyone else is eating, students can learn to ask themselves:',
            'Am I truly hungry?',
            'Am I feeling full?',
            'How does this food make my body feel?',
            'When we eat according to our body\'s signals, we develop a healthier relationship with food. This also helps us avoid both overeating and undereating.',
          ],
        },
        {
          heading: '4. Eating Together',
          text: 'Meals are not only about food; they are also about relationships. Eating together with family, friends, or classmates creates opportunities for conversation, sharing stories, and building connections.',
          list: [
            'When people eat together:',
            'They often eat more slowly and mindfully.',
            'They learn about different foods and cultures.',
            'They strengthen bonds with family and friends.',
            'Even one shared meal a day can help create a sense of belonging and community.',
          ],
        },
        {
          heading: '5. Practicing Gratitude',
          text: 'Food reaches our plate because of the efforts of many people and natural resources. Farmers grow crops, workers transport food, cooks prepare meals, and nature provides sunlight, soil, and water.',
          list: [
            'Taking a moment of gratitude before eating reminds us to respect food and avoid wasting it. Gratitude can be practiced in simple ways:',
            'Silently thanking the people who prepared the meal.',
            'Appreciating the effort and resources that brought the food to the table.',
            'Being mindful not to waste food.',
            'This small habit encourages appreciation and responsibility.',
          ],
        },
        {
          heading: 'Building the Habit',
          text: 'Making mealtimes mindful does not require big changes. It begins with small actions practiced regularly:',
          list: [
            'Chew slowly and thoroughly.',
            'Pause before and during meals.',
            'Listen to your body\u2019s hunger and fullness signals.',
            'Share meals with others whenever possible.',
            'Take a moment to express gratitude.',
            'With practice, these habits turn everyday meals into moments of nourishment, awareness, and connection.',
          ],
        },
      ],
    },
  },
  15: {
    document: {
      title: 'IDENTIFY WHAT INFLUENCES OUR FOOD CHOICES',
      sections: [
        {
          heading: 'Introduction',
          text: 'People choose foods for many different reasons. Hunger is one reason, but it is not the only factor that influences what we eat. Often, foods are chosen because they look attractive, smell pleasant, taste good, or feel enjoyable to eat.',
          list: [
            'Our senses\u2014such as sight, smell, taste, and texture\u2014play an important role in how we experience food. Cooking and food preparation can also influence how foods taste and how appealing they feel. At the same time, some foods are designed to taste very strong because they contain high amounts of sugar, salt, fats, or flavour enhancers.',
            'Understanding these influences helps students become more aware of how food choices are shaped. When students recognize these factors, they can learn to enjoy healthy foods and make thoughtful decisions about what they eat.',
          ],
        },
        {
          heading: '1. Our Senses and Food Appeal',
          text: 'Food is experienced through our senses. When we eat, our eyes, nose, tongue, and mouth work together to create the experience of flavour.',
          list: [
            'Appearance is often the first thing people notice. Colourful foods or well-presented dishes may look more appealing and attract attention. The smell of food can also influence appetite. Pleasant aromas often make food seem more enjoyable.',
            'Texture also plays an important role in how food feels in the mouth. Foods may feel soft, crunchy, smooth, or juicy. These qualities can make meals more interesting and enjoyable.',
            'When these sensory qualities come together, they strongly influence which foods people prefer to eat.',
          ],
        },
        {
          heading: '2. Understanding the Basic Tastes',
          text: 'The human tongue can recognise several basic tastes that combine to create the flavour of foods. These tastes help people identify and enjoy different types of foods.',
          list: [
            'Common basic tastes include sweet, salty, sour, bitter, and umami. Sweet tastes are often found in fruits and natural sugars. Salty tastes enhance flavour in many dishes. Sour tastes appear in foods like lemon, tamarind, and yogurt. Bitter tastes can be found in certain vegetables and leafy greens, while umami provides a savoury flavour found in foods like tomatoes and mushrooms.',
            'Traditional food systems such as Ayurveda also describe additional tastes such as pungent and astringent. Together, these tastes create the diverse flavours that make meals enjoyable.',
            'A combination of different tastes often leads to more balanced and satisfying meals.',
          ],
        },
        {
          heading: '3. How Cooking Changes Taste and Texture',
          text: 'Cooking plays an important role in shaping the taste and texture of food. Many foods taste very different when they are cooked compared to when they are raw.',
          list: [
            'Cooking can improve flavour and aroma, soften textures, and make food easier to digest. For example, roasting vegetables can bring out their natural sweetness, while cooking pulses makes them softer and easier to eat.',
            'Cooking also helps destroy harmful microbes, making food safer to consume. Food preparation techniques such as washing, cutting, soaking, and grinding also influence how foods are prepared and enjoyed.',
            'Through cooking, nutritious foods can become more appealing and enjoyable.',
          ],
        },
        {
          heading: '4. Choosing Foods Beyond Just Taste',
          text: 'Although taste is important, it should not be the only factor guiding food choices. Some foods taste very strong because they contain high amounts of sugar, salt, fats, or flavour enhancers.',
          list: [
            'Many packaged snacks and instant foods are designed to stimulate taste buds and the brain\u2019s reward system. This can make them very tempting, even if they provide fewer nutrients.',
            'At the same time, natural ingredients such as herbs and spices can add flavour while maintaining nutritional value. Ingredients such as ginger, garlic, coriander, turmeric, and cumin are commonly used to enhance taste in healthy dishes.',
            'Learning to consider both taste and nutrition helps people make healthier food choices.',
          ],
        },
        {
          heading: '5. Looking Beyond Taste in Packaged Foods',
          text: 'Packaged foods may contain ingredients that influence taste, colour, and shelf life. These may include added sugar, salt, artificial flavours, and flavour enhancers.',
          list: [
            'Sometimes foods may also contain adulterants\u2014substances added to improve appearance or increase quantity but that do not contribute to nutrition. Artificial colours or additional starch may sometimes be added to certain foods.',
            'Reading ingredient lists and understanding what foods contain can help people make informed choices. Being aware of how foods are processed helps individuals look beyond taste alone.',
            'Choosing foods that are fresh and minimally processed can support healthier eating habits.',
          ],
        },
        {
          heading: '6. Making Healthy Foods Appealing',
          text: 'Healthy foods can also be delicious and enjoyable when prepared well. Cooking methods, ingredients, and presentation can make nutritious foods more attractive.',
          list: [
            'Using herbs and spices can enhance flavour without relying on excessive salt or sugar. Adding colourful fruits and vegetables can make meals visually appealing. Combining different textures\u2014such as crunchy nuts, soft vegetables, or fresh salads\u2014can also improve the eating experience.',
            'Cooking methods such as roasting, steaming, or lightly saut\u00e9ing foods can bring out natural flavours. These techniques help create meals that are both nutritious and enjoyable.',
            'When healthy foods are prepared thoughtfully, they can be just as appealing as highly processed foods.',
          ],
        },
        {
          heading: 'Key Takeaways',
          list: [
            'Food choices are influenced by many factors, including taste, smell, appearance, and texture.',
            'Our senses play an important role in how we experience and enjoy food.',
            'Different tastes combine to create the flavour of foods.',
            'Cooking and food preparation can improve taste, texture, and safety.',
            'Some processed foods contain strong flavours because of added sugar, salt, fats, or flavour enhancers.',
            'Understanding ingredients helps people make more thoughtful food choices.',
            'Healthy foods can also be delicious when prepared with herbs, spices, and good cooking methods.',
            'Being aware of what influences our food choices helps us enjoy food while making healthier decisions every day. 🌱',
          ],
        },
      ],
    },
  },
  16: {
    document: {
      title: 'NO FOOD WASTE',
      sections: [
        {
          heading: 'Introduction',
          text: 'Food is one of the most valuable things we have. It takes a lot of hard work and many natural resources to grow crops, harvest them, transport them, cook them, and bring them to our plates. Yet, a very large amount of food is wasted every day around the world. Developing the habit of not wasting food helps us respect people\u2019s efforts and protect our planet.',
          list: [
            'How much food is wasted?',
            'The amount of food wasted in the world is enormous. Experts estimate that about one-third of all food produced globally is never eaten. This means nearly 1.3 billion tonnes of food are wasted every year. Imagine millions of trucks filled with food being thrown away instead of feeding people.',
            'Food waste happens at many different stages:',
            'At farms: Some fruits and vegetables are left in fields because they are damaged or do not look perfect for sale.',
            'During storage and transport: Poor storage facilities, pests, or long transport can cause food to spoil before reaching markets.',
            'In markets, hotels, and restaurants: Unsold food or food prepared in excess is sometimes thrown away.',
            'In homes and schools: People often cook or take more food than they can eat, and the leftovers are wasted.',
            'Even a small amount of waste from each person adds up to a huge problem when millions of people do the same.',
            'Why should we not waste food?',
            'There are many important reasons to avoid wasting food.',
            'Respect for farmers and workers: Farmers, farm workers, truck drivers, shopkeepers, and cooks all work hard to bring food to our plates. Wasting food means their effort and time are wasted.',
            'Many people still go hungry: While a lot of food is wasted, millions of people around the world do not have enough to eat every day.',
            'Saving natural resources: Growing food requires water, fertile soil, sunlight, fuel, and human labour. When food is wasted, these precious resources are wasted too.',
            'Protecting the environment: When food is thrown away and rots in landfills, it produces gases that contribute to climate change.',
            'What can we do to avoid wasting food?',
            'Children can play an important role in reducing food waste by practicing simple daily habits.',
            '1. Take small helpings\u000aAt home or in school, take a small portion of food first. If you are still hungry, you can take more later.',
            '2. Finish what is on your plate\u000aTry to eat all the food you have taken. Think before you throw away food.',
            '3. Buy only what is needed\u000aFamilies can plan meals and buy only the amount of food they will use so that it does not spoil.',
            '4. Store food properly\u000aKeeping food in clean containers and storing it correctly in cool places or refrigerators helps it stay fresh longer.',
            '5. Use leftovers wisely\u000aLeftover food can sometimes be reused in the next meal instead of being thrown away.',
            '6. Share extra food\u000aIf there is extra food, it can be shared with neighbours, friends, or people in need.',
            'Food waste and plastic waste',
            'Food waste is often connected to another environmental problem: plastic waste. Many foods are packed in plastic bags, bottles, and wrappers. When food is thrown away, the plastic packaging is also discarded. Plastic takes many years to break down and can pollute land, rivers, and oceans.',
            'To reduce this problem, we can:',
            'Use reusable containers and water bottles.',
            'Avoid unnecessary plastic packaging when possible.',
            'Reuse and recycle plastic materials.',
            'A good habit for life',
            'The habit of not wasting food is a simple but powerful way to care for people and the environment. By taking only what we need, finishing our meals, storing food carefully, and avoiding unnecessary waste, each one of us can help reduce food waste and make the world a better place.',
          ],
        },
      ],
    },
  },
  17: {
    document: {
      title: 'Decode Food Labels',
      sections: [
        {
          heading: '1. Processing Is Not Always Bad',
          text: 'Food processing does not always mean unhealthy food.\u000aSimple actions like husking rice, grinding wheat, or cooking pulses are also forms of processing. These steps improve taste, safety, and digestibility of foods.',
        },
        {
          heading: '2. Refining Grains Removes Nutrients',
          text: 'When grains are refined to make foods like white rice or refined flour (maida), the bran and germ are removed.\u000aThese parts contain fibre, vitamins, and minerals, so refined foods often have fewer nutrients than whole grains.',
        },
        {
          heading: '3. Ultra-Processed Foods Are Often Nutrient-Poor',
          text: 'Many packaged snacks such as chips, cookies, soft drinks, noodles, and sweets are highly processed.\u000aThey are usually high in sugar, salt, and fat but low in nutrients.',
          list: [
            'Eating these foods too often may increase the risk of obesity, diabetes, and heart disease.',
          ],
        },
        {
          heading: '4. Food Labels Tell More Than Nutrition',
          text: 'Food labels also provide useful information such as:\u000a\u2022 manufacturing and expiry dates\u000a\u2022 storage instructions\u000a\u2022 allergen information\u000a\u2022 food additives and preservatives',
          list: [
            'These details help consumers store and use foods safely.',
          ],
        },
        {
          heading: '5. Food Symbols Help Identify Products',
          text: 'Food packages in India often display standard symbols regulated by FSSAI, such as:',
          list: [
            '\ud83d\udfe2 Vegetarian food\u000a\ud83d\udd34 Non-vegetarian food\u000a\ud83c\udf3e Fortified foods\u000a\ud83c\udf31 Organic foods',
            'These symbols help people quickly identify foods that match their dietary preferences.',
          ],
        },
        {
          heading: '6. Daily Value (DV%) Helps Compare Nutrients',
          text: 'Nutrition labels often show Daily Value percentage (DV%).',
          list: [
            '\u2022 5% DV or less \u2192 Low in that nutrient\u000a\u2022 20% DV or more \u2192 High in that nutrient',
            'This helps consumers quickly understand whether a food contains too much or too little of a nutrient.',
          ],
        },
        {
          heading: '7. Bread Labels Follow Specific Standards',
          text: 'According to FSSAI guidelines (2022):',
          list: [
            '\u2022 Whole wheat bread must contain at least 75% whole wheat flour\u000a\u2022 Brown bread must contain at least 50% whole wheat flour\u000a\u2022 Multigrain bread must contain at least 20% grains other than wheat',
            'These standards ensure that the name of the product matches what is inside.',
          ],
        },
        {
          heading: 'Decoding Food Labels: Understanding Processed Foods and Packaged Food',
          text: 'In modern food systems, many foods undergo some form of processing before they reach our plate. Understanding the difference between basic processing, refined foods, and highly processed foods, along with learning to read food labels, helps people make healthier food choices.',
        },
        {
          heading: '1. What Are Processed Foods?',
          text: 'The term processed foods is often misunderstood. Processing does not simply mean unhealthy food. Basic activities such as husking paddy, cooking pulses, grinding wheat into flour, or preparing meals at home are also forms of food processing. These processes help improve the taste, safety, and digestibility of foods.',
          list: [
            'However, some types of processing can reduce nutritional value. For example, refining grains removes important components such as the bran and germ, which contain fibre, vitamins, and minerals. Common examples include white rice and refined wheat flour (maida).',
            'More concerning is highly processed or ultra-processed foods. These foods are usually:',
            'High in saturated fat, sugar, and salt',
            'High in calories but low in nutrients',
            'Often made with refined ingredients',
            'Examples include biscuits, cookies, bakery products, noodles, pizza, buns, rolls, sweets, desserts, packaged juices, soft drinks, aerated beverages, chips, fries, and other fried snacks.',
            'When minimally processed foods are replaced with ultra-processed foods, the nutrient density decreases while energy intake increases. This dietary shift increases the risk of non-communicable diseases such as obesity, Type-2 diabetes, and heart disease.',
          ],
        },
        {
          heading: '2. Why Food Labels Are Important',
          text: 'Packaged foods include food labels that provide useful information to consumers. These labels help people understand what the product contains and make informed purchasing decisions.',
          list: [
            'In India, food labelling standards are regulated by the Food Safety and Standards Authority of India (FSSAI). These guidelines ensure that information on food packages is accurate and consistent.',
            'Food labels generally provide details such as:',
            'Ingredients used in the product',
            'Nutritional information',
            'Manufacturing and expiry dates',
            'Shelf life and storage instructions',
            'Allergen information',
            'Food additives and health claims',
            'Standardised logos also help consumers easily identify different categories of foods such as vegetarian, non-vegetarian, organic, and fortified foods.',
          ],
        },
        {
          heading: '3. Understanding the Ingredients List',
          text: 'Ingredients on packaged foods are always listed in descending order of quantity. This means the ingredient used in the largest amount appears first.',
          list: [
            'When reading the ingredients list, it is important to check whether sugar, fat, or sodium appears among the first few ingredients. If these are listed within the first five ingredients, it may indicate that the product contains high amounts of these components.',
            'Food labels may also highlight allergy-causing ingredients, preservatives, and additives, which is important for people with specific dietary restrictions.',
          ],
        },
        {
          heading: '4. Understanding Nutrition Labels',
          text: 'The nutrition label provides detailed information about the nutrients present in the food. This usually includes:',
          list: [
            'Calories (energy)',
            'Carbohydrates',
            'Sugars',
            'Protein',
            'Total fat',
            'Saturated fat',
            'Trans fat',
            'Fibre',
            'Sodium',
            'Selected vitamins and minerals',
            'When interpreting nutrition labels, the following points are important:',
            'Trans fats should ideally be zero.',
            'Saturated fat, cholesterol, sugars, added sugars, and sodium should be kept as low as possible.',
            'A useful guideline is to maintain a sodium-to-calorie ratio close to 1:1.',
            'Nutrients such as protein, fibre, and monounsaturated fats (MUFA) are beneficial, so higher values are generally preferable.',
            'Total fat intake should ideally remain below 30% of total daily calories.',
            'Foods labelled \u201cfat-free\u201d or \u201clow fat\u201d may still contain similar calories, so these claims should be interpreted carefully.',
            'Another important point is that sugar may appear under different names, such as:',
            'Sucrose',
            'Fructose',
            'Glucose',
            'Dextrose',
            'Corn syrup',
            'Maltose',
            'Brown sugar',
            'Cane sugar',
            'Caramel',
            'Inverted sugar syrup',
            'Maple syrup',
            'Palm sugar',
            'Recognising these names helps consumers identify hidden sugars in packaged foods.',
          ],
        },
        {
          heading: '5. Understanding Serving Size and Daily Value',
          text: 'The nutrition information on most labels is usually provided per 100 g or 100 ml or per serving size. Understanding serving size is essential for calculating how much nutrition or energy you actually consume.',
          list: [
            'For example, if a packet contains two servings but you eat the entire packet, you are consuming twice the calories and nutrients mentioned on the label.',
            'Another useful indicator is the Daily Value Percentage (DV%), which is calculated based on a 2000-calorie diet.',
            '5% DV or less indicates the food is low in that nutrient.',
            '20% DV or more indicates the food is high in that nutrient.',
            'This helps consumers quickly determine whether a food product contains too much or too little of a particular nutrient.',
          ],
        },
        {
          heading: '6. Food Standards Example: Bread Labelling in India',
          text: 'Food standards also define how certain foods must be labelled. For example, according to FSSAI guidelines (2022):',
          list: [
            'Whole wheat bread must contain at least 75% whole wheat flour.',
            'Brown bread must contain at least 50% whole wheat flour.',
            'Multi-grain bread must contain at least 20% grains other than wheat.',
            'These standards help ensure that the product name reflects the actual ingredients used.',
          ],
        },
        {
          heading: 'Conclusion',
          text: 'Understanding food processing and decoding food labels is an important step toward making healthier dietary choices. By reading the ingredients list, checking nutritional information, understanding serving sizes, and being cautious about highly processed foods, consumers can select foods that better support their health and nutritional needs.',
        },
      ],
    },
  },
  18: {
    document: {
      title: 'FOLLOW SAFE FOOD PRACTICES \ud83c\udf4e',
      sections: [
        {
          heading: 'Introduction',
          text: '\u201cIf it is not safe, it is not food.\u201d',
          list: [
            'Food gives us energy, helps us grow, and keeps our bodies strong. But food is useful only when it is safe to eat. If food is dirty, contaminated, or mixed with harmful substances, it can make us sick. That is why we say \u201cIf it is not safe, it is not food.\u201d',
            'Unsafe food can cause food poisoning, stomach infections, and other illnesses. By learning about safe food practices and following them every day, we can protect our health and the health of others.',
          ],
        },
        {
          heading: 'What Makes Our Food Unsafe? \u26a0\ufe0f',
          text: 'Food can become unsafe for many reasons:',
          list: [
            'Germs entering the food through dirty hands or surfaces',
            'Flies and insects sitting on uncovered food',
            'Unclean water used to wash or cook food',
            'Improper storage that allows germs to grow',
            'Spoiled or rotten ingredients',
            'Chemicals or toxins present in food',
            'Food adulteration, where harmful substances are mixed with food',
            'When food is not handled properly, it becomes a source of disease instead of nourishment.',
          ],
        },
        {
          heading: 'Germs in Our Food \ud83e\udda0',
          text: 'Germs are tiny living organisms that cannot be seen with our eyes. Some germs are helpful, but others can cause illness.',
          list: [
            'Germs can enter food through:',
            'Dirty hands while cooking or serving',
            'Unclean utensils or kitchen surfaces',
            'Contaminated water',
            'Raw food touching cooked food',
            'Flies and insects landing on food',
            'When food is left uncovered or kept for too long, these germs can multiply quickly and make the food unsafe.',
          ],
        },
        {
          heading: 'Preventing Germs from Growing \ud83d\udeab\ud83e\udda0',
          text: 'We can protect our food from germs by following simple habits:',
          list: [
            'Wash hands with soap before touching food',
            'Wash fruits and vegetables thoroughly',
            'Cook food properly so that germs are killed',
            'Keep food covered to protect it from insects',
            'Use clean utensils and kitchen surfaces',
            'Store leftover food in the refrigerator',
            'These small steps help keep our food safe and healthy.',
          ],
        },
        {
          heading: 'The Five Keys to Food Safety \ud83d\udd11',
          text: 'Health experts recommend five important rules for keeping food safe:',
          list: [
            'Keep Clean \u2013 Always wash hands, utensils, and cooking areas.',
            'Separate Raw and Cooked Food \u2013 Raw food can carry germs that contaminate cooked food.',
            'Cook Thoroughly \u2013 Proper cooking destroys harmful germs.',
            'Keep Food at Safe Temperatures \u2013 Do not leave cooked food outside for too long. Refrigerate when necessary.',
            'Use Safe Water and Raw Materials \u2013 Use clean water and fresh ingredients.',
            'Following these five keys helps prevent many food-related illnesses.',
          ],
        },
        {
          heading: 'Toxic Substances in Our Food \u2623\ufe0f',
          text: 'Sometimes food contains toxins, which are harmful substances that can damage our health.',
          list: [
            'These toxins may come from:',
            'Pesticides used in farming',
            'Chemicals added during storage or processing',
            'Mold or spoiled food',
            'Certain plants or contaminated grains',
            'Eating food containing toxins can cause serious health problems, so it is important to choose food carefully.',
          ],
        },
        {
          heading: 'Choosing Food That Does Not Have Toxins \ud83e\udd66',
          text: 'We can reduce the risk of toxins by making wise food choices:',
          list: [
            'Wash fruits and vegetables well before eating',
            'Eat fresh and properly cooked food',
            'Avoid stale, rotten, or foul-smelling food',
            'Buy food from reliable and hygienic shops',
            'Check the expiry date on packaged food',
            'Good food choices help us stay healthy and strong.',
          ],
        },
        {
          heading: 'Food Adulteration and Preventing It \u2697\ufe0f',
          text: 'Food adulteration means mixing food with cheaper, inferior, or harmful substances to increase profit.',
          list: [
            'Examples include:',
            'Adding water to milk',
            'Mixing artificial colors in spices',
            'Mixing stones or husk with grains',
            'Adding harmful chemicals to increase shelf life',
            'Adulterated food can cause serious health problems.',
            'To prevent food adulteration:',
            'Buy food from trusted stores',
            'Check labels and packaging carefully',
            'Avoid very cheap food that looks suspicious',
            'Spread awareness about safe food practices',
          ],
        },
        {
          heading: 'FSSAI Seal for Food Safety \ud83c\udff7\ufe0f',
          text: 'In India, the Food Safety and Standards Authority of India (FSSAI) is responsible for ensuring that food sold in the market is safe and of good quality.',
          list: [
            'Packaged food products approved by FSSAI carry an FSSAI license number or logo on the packet.',
            'When buying packaged food, always:',
            'Look for the FSSAI seal or license number',
            'Check the expiry date',
            'Ensure the packet is properly sealed and not damaged',
            'This helps us choose food that meets safety standards.',
            'Remember \ud83c\udf31',
            'Safe food habits are essential for a healthy life. By keeping food clean, cooking it properly, choosing fresh ingredients, and checking food labels, we can protect ourselves and our families from food-related diseases.',
            'Safe food keeps us healthy, active, and happy. \ud83c\udf7d\ufe0f\u2728',
          ],
        },
      ],
    },
  },
  19: {
    document: {
      title: 'USE VARIETY FOR BALANCED MEALS',
      sections: [
        {
          heading: 'Introduction',
          text: 'Healthy eating is an important part of growing, learning, and staying active. Our bodies need many different nutrients every day to provide energy, support growth, and protect us from diseases. However, no single food contains all the nutrients the body needs.',
          list: [
            'This is why it is important to include a variety of foods and maintain balance in our meals. Different foods provide different nutrients that help the body function properly. When meals include foods from several food groups in appropriate proportions, they are more nourishing and support better health.',
            'Learning to build varied and balanced meals helps children develop healthy eating habits that can support their well-being throughout life.',
          ],
        },
        {
          heading: '1. Why Variety in Food Matters',
          text: 'Our bodies require a wide range of nutrients to function properly. These nutrients include carbohydrates for energy, proteins for growth and repair, vitamins and minerals for body functions, and fibre for healthy digestion.',
          list: [
            'Since no single food provides all of these nutrients, eating a variety of foods becomes essential. When meals include different foods, the body receives a better combination of nutrients.',
            'Eating the same food repeatedly may not provide all the nutrients needed for health. Including different foods in daily meals helps the body stay strong, active, and healthy.',
            'Food variety also makes meals more enjoyable and interesting.',
          ],
        },
        {
          heading: '2. Understanding Different Food Groups',
          text: 'Foods can be grouped based on the nutrients they provide. Each group plays an important role in maintaining health.',
          list: [
            'Cereals and millets such as rice, wheat, and millets provide energy that helps the body perform daily activities. Pulses, beans, eggs, and milk provide protein that supports growth and helps repair body tissues.',
            'Fruits and vegetables provide vitamins, minerals, and fibre that help protect the body from illnesses and support digestion. Nuts and seeds provide healthy fats that support brain function and overall health.',
            'When meals include foods from different groups, they provide a better mix of nutrients.',
          ],
        },
        {
          heading: '3. Colourful Plates and Food Diversity',
          text: 'Meals that include foods of different colours often provide a wider variety of nutrients. Fruits and vegetables come in many colours such as green, red, orange, yellow, and purple.',
          list: [
            'Each colour often represents different nutrients that support health. For example, green vegetables may provide iron and fibre, while orange fruits may provide vitamins that support vision and immunity.',
            'A colourful plate usually means that the meal includes a variety of foods. This diversity helps ensure that the body receives different nutrients needed for good health.',
            'Encouraging colourful meals can help students develop healthier and more balanced eating habits.',
          ],
        },
        {
          heading: '4. Rotating Foods in Daily Meals',
          text: 'Food variety can also be increased by changing foods regularly in daily meals. Eating the same grain, vegetable, or pulse every day may limit the range of nutrients the body receives.',
          list: [
            'For example, families can rotate between different grains such as rice, wheat, or millets. They can also include different pulses such as lentils, chickpeas, or beans.',
            'Similarly, including different fruits and vegetables across the week helps increase dietary diversity.',
            'Rotating foods regularly helps ensure that meals remain nutritious, balanced, and interesting.',
          ],
        },
        {
          heading: '5. The \u201cMy Plate of the Day\u201d Concept',
          text: 'A helpful way to understand balanced meals is the \u201cMy Plate of the Day\u201d concept. This idea shows how different food groups can be arranged on a plate.',
          list: [
            'Half of the plate should contain fruits and vegetables. These foods provide vitamins, minerals, and fibre that support health.',
            'One quarter of the plate should include cereals or millets that provide energy. The remaining quarter should include protein foods such as pulses, beans, eggs, or milk products.',
            'Small amounts of healthy fats and drinking enough water also help maintain a balanced diet.',
          ],
        },
        {
          heading: '6. Building a Balanced Meal Using Everyday Foods',
          text: 'Balanced meals can be prepared using simple foods that are commonly available at home. A healthy meal usually includes foods from several food groups.',
          list: [
            'For example, a balanced meal may include roti or rice for energy, dal or beans for protein, cooked vegetables or salad for vitamins and minerals, curd or milk for additional nutrients, and a fruit for natural sweetness and fibre.',
            'Such meals provide a good combination of nutrients needed for energy, growth, and protection from disease.',
            'Balanced meals do not have to be complicated or expensive. Simple everyday foods can provide all the nutrients the body needs when they are combined thoughtfully.',
          ],
        },
        {
          heading: 'Key Takeaways',
          list: [
            'Our bodies need many nutrients for energy, growth, and good health.',
            'No single food provides all nutrients, so eating a variety of foods is important.',
            'Different food groups provide different nutrients needed by the body.',
            'Colourful meals often indicate greater food diversity.',
            'Rotating grains, pulses, fruits, and vegetables helps increase food variety.',
            'A balanced plate includes fruits and vegetables, cereals or millets, and protein foods in suitable proportions.',
            'Balanced meals can be prepared using simple everyday foods.',
            'Eating a variety of foods and keeping meals balanced helps children stay active, learn better, and grow healthy. 🌱',
          ],
        },
      ],
    },
  },
  20: {
    document: {
      title: 'LEARN TO PREPARE AND COOK FOOD',
      sections: [
        {
          heading: 'Introduction',
          text: 'Food preparation and cooking are important life skills that support healthy eating. While some foods such as fruits and certain vegetables can be eaten raw, many foods must be prepared or cooked before they can be eaten safely. Cooking makes foods softer, improves their taste, and helps the body digest them more easily.',
          list: [
            'The way food is prepared also influences its nutritional value, safety, and flavour. Simple practices such as soaking, sprouting, and using healthy cooking methods can make food more nutritious and easier for the body to use. By learning basic preparation skills, students gain practical knowledge that helps them prepare simple, wholesome meals and develop healthy eating habits.',
          ],
        },
        {
          heading: '1. Food Preparation in Everyday Life',
          text: 'Before food reaches our plate, it usually goes through several preparation steps. These steps help clean, organize, and prepare ingredients for cooking.',
          list: [
            'Common preparation practices include washing fruits and vegetables, cutting or peeling ingredients, soaking grains or pulses, and grinding grains into flour. These steps help remove dirt, improve food safety, and make ingredients easier to cook.',
            'Food preparation is therefore an essential part of everyday cooking. Understanding these steps helps students recognise that preparing food carefully is important for both nutrition and safety.',
          ],
        },
        {
          heading: '2. Cooking and Digestibility',
          text: 'Cooking changes food in many ways. Heat softens foods, improves flavour and aroma, and makes many foods easier to chew and digest.',
          list: [
            'For example, raw rice is hard and cannot be eaten safely, but cooked rice becomes soft and easy to digest. Similarly, pulses such as lentils become softer and more digestible after cooking.',
            'Cooking also helps destroy harmful microbes that may be present in raw foods. This makes cooked food safer to eat while improving its taste and texture.',
          ],
        },
        {
          heading: '3. Soaking and Sprouting for Better Nutrition',
          text: 'Traditional food practices such as soaking and sprouting can improve both nutrition and digestion.',
          list: [
            'When grains, pulses, or seeds are soaked in water, they begin to absorb moisture and become softer. This can reduce cooking time and improve digestibility.',
            'Sprouting occurs when soaked seeds begin to grow small shoots. During this process, certain vitamins increase and nutrients become easier for the body to absorb. Foods such as green gram, chickpeas, lentils, and fenugreek seeds are commonly sprouted.',
            'Sprouts can be eaten fresh in salads or lightly cooked in simple dishes.',
          ],
        },
        {
          heading: '4. Microgreens and Fresh Foods',
          text: 'Microgreens are very young plants harvested soon after the first leaves appear. They are small but highly nutritious and can be grown easily in small containers at home.',
          list: [
            'Common microgreens include mustard, radish, fenugreek, peas, and sunflower. These plants grow quickly and can often be harvested within one to two weeks.',
            'Microgreens can be added to salads, sandwiches, soups, or grain dishes. Growing small plants at home helps students understand where food comes from and encourages the consumption of fresh, nutritious foods.',
          ],
        },
        {
          heading: '5. Healthier Cooking Methods',
          text: 'The way food is cooked can influence how many nutrients remain in the meal. Some cooking methods help preserve nutrients better than others.',
          list: [
            'Healthier cooking methods include steaming, boiling with little water, roasting, stir-frying with small amounts of oil, and pressure cooking. These methods cook food effectively while helping retain nutrients.',
            'Using excessive oil, too much salt, or overcooking foods may reduce the nutritional value of meals. Simple cooking methods that use less oil and gentle heat help keep food healthier.',
          ],
        },
        {
          heading: '6. Learning Practical Food Skills',
          text: 'Knowing how to prepare simple foods is an important life skill. Basic skills such as washing fruits and vegetables, cutting ingredients, cooking simple dishes, and storing food safely help people prepare healthy meals.',
          list: [
            'Small preparation habits can also help preserve nutrients. For example, washing vegetables before cutting them, cutting vegetables just before cooking, and avoiding excessive peeling can help reduce nutrient loss.',
            'Learning these skills builds confidence and independence. It also helps students develop a deeper understanding of how everyday cooking practices support good health.',
          ],
        },
        {
          heading: 'Key Takeaways',
          list: [
            'Many foods need preparation or cooking before they can be eaten safely.',
            'Cooking softens foods, improves flavour, and makes them easier to digest.',
            'Traditional practices such as soaking and sprouting can improve nutrition and digestion.',
            'Microgreens and fresh foods provide valuable nutrients and can be grown easily at home.',
            'Healthier cooking methods help preserve nutrients in food.',
            'Learning basic food preparation skills helps people prepare safe, nutritious meals.',
            'Developing the habit of preparing and cooking food helps students build practical skills that support healthy eating throughout life. 🌱',
          ],
        },
      ],
    },
  },
  21: {
    document: {
      title: 'RESPONSIBLE CITIZENSHIP AND VALUES',
      sections: [
        {
          heading: 'Why Values and Responsible Citizenship Matter',
          text: 'Every society depends on shared values that guide how people interact with one another. Values such as honesty, respect, empathy, fairness, and responsibility help individuals make thoughtful decisions and contribute positively to their communities.',
          list: [
            'Responsible citizenship means understanding that our actions affect others. It involves respecting rules, appreciating diversity, protecting shared resources, and contributing to the well-being of society.',
            'Young people develop values through everyday experiences at home, school, and in the community. These values shape attitudes and behaviours that help them become active and responsible members of society.',
            'Schools play an important role in nurturing responsible citizenship by encouraging reflection, discussion, cooperation, and participation in community life. When students understand their values and responsibilities, they are better equipped to make ethical decisions and contribute to a just and inclusive society.',
          ],
        },
        {
          heading: '1. Understanding Values in Everyday Life',
          text: 'Values are principles that guide how individuals think, behave, and interact with others. They influence decisions, relationships, and the way people respond to challenges.',
          list: [
            'Values may include:',
            'honesty and integrity',
            'empathy and compassion',
            'respect for others',
            'responsibility',
            'fairness and justice',
            'These values are expressed through everyday actions\u2014helping someone in need, treating others with dignity, or acting responsibly when no one is watching.',
            'Recognising personal values helps students understand themselves and reflect on how their behaviour affects others.',
          ],
        },
        {
          heading: '2. How Values Shape Behaviour and Decisions',
          text: 'Our behaviour often reflects the values we believe in. When individuals act with honesty, respect, and fairness, they help build trust and cooperation in society.',
          list: [
            'For example:',
            'returning something that does not belong to us reflects honesty',
            'helping someone who is struggling shows empathy',
            'following rules in school demonstrates responsibility',
            'Sometimes individuals face situations where making the right decision may not be easy. In such moments, values act as a guide, helping people choose actions that are ethical and respectful.',
            'Developing the ability to reflect on decisions and consider their consequences is an important life skill.',
          ],
        },
        {
          heading: '3. Making Value-based Decisions',
          text: 'Responsible decision-making requires thinking about different choices and their possible outcomes.',
          list: [
            'Value-based decisions involve:',
            'understanding the situation clearly',
            'considering how actions affect others',
            'choosing the option that reflects fairness and responsibility',
            'Young people often encounter situations where they must choose between peer pressure and doing what they believe is right.',
            'Learning to stand by one\u2019s values helps individuals make decisions that promote personal integrity and social well-being.',
          ],
        },
        {
          heading: '4. Respecting Diversity and Building Inclusive Communities',
          text: 'Societies are made up of people from different backgrounds, cultures, languages, and beliefs. Respecting diversity means appreciating these differences and treating everyone with dignity.',
          list: [
            'Responsible citizens recognise that diversity strengthens communities. By respecting others and avoiding discrimination, individuals help create inclusive and harmonious environments.',
            'Students can practise respect for diversity by:',
            'listening to different perspectives',
            'valuing different cultures and traditions',
            'standing against unfair treatment or discrimination',
            'These actions help build communities where everyone feels respected and included.',
          ],
        },
        {
          heading: '5. Active Citizenship and Social Responsibility',
          text: 'Responsible citizenship goes beyond personal values\u2014it also involves contributing to society.',
          list: [
            'Active citizens take initiative to improve their communities through actions such as:',
            'participating in community activities',
            'protecting the environment',
            'supporting fairness and justice',
            'helping maintain public spaces',
            'Small actions can make a meaningful difference. When individuals take responsibility for their surroundings and support others, they help create healthier and more cooperative communities.',
            'Schools can encourage active citizenship by providing opportunities for students to participate in community projects and social initiatives.',
          ],
        },
        {
          heading: '6. From Values to Action: My Pledge for a Better Society',
          text: 'Responsible citizenship begins with personal commitment.',
          list: [
            'Students can reflect on how their everyday choices contribute to society. By practising values in daily life, young people can become positive role models for others.',
            'Examples of responsible actions include:',
            'treating others with respect and fairness',
            'helping people in need',
            'protecting shared resources',
            'standing up against unfair behaviour',
            'contributing positively to school and community life',
            'When individuals commit to practising these values, they help build a more compassionate and responsible society.',
          ],
        },
        {
          heading: 'Bringing the Life Skill Together',
          text: 'Responsible citizenship is built on values, thoughtful decisions, and active participation in society.',
          list: [
            'Understanding personal values helps students develop self-awareness. Respecting diversity strengthens communities. Responsible decisions build trust and fairness. Active citizenship encourages individuals to contribute to the common good.',
            'Together, these actions create a society where individuals care for one another and work collectively toward a better future.',
          ],
        },
        {
          heading: 'Key Message',
          list: [
            'Responsible citizenship begins with values.',
            'By practising honesty, respect, empathy, and responsibility\u2014and by contributing positively to our communities\u2014we help build a more inclusive, fair, and compassionate society.',
          ],
        },
      ],
    },
  },
  22: {
    document: {
      title: 'EQUALITY AND GENDER RESPECT',
      sections: [
        {
          heading: 'Why Equality and Gender Respect Matter',
          text: 'Equality and gender respect are essential for building a fair and inclusive society. Every individual, regardless of gender, deserves equal opportunities, respect, and dignity. When people are treated equally, they are able to develop their abilities, participate actively in society, and contribute positively to their communities.',
          list: [
            'Gender equality means recognising that girls and boys have the same rights, responsibilities, and opportunities. It challenges stereotypes and social expectations that limit individuals based on gender. Promoting gender respect helps create environments where everyone feels valued and safe.',
            'Young people play an important role in shaping attitudes toward equality. By learning to question stereotypes, respect differences, and support fairness, students can contribute to building a more just and respectful society. Schools provide an important space where students learn to treat one another with dignity and develop attitudes that promote equality and inclusion.',
          ],
        },
        {
          heading: '1. Understanding Gender and Equality',
          text: 'Gender refers to the roles, expectations, and behaviours that society associates with being male or female. These expectations are often shaped by culture, traditions, and social norms.',
          list: [
            'Gender equality means ensuring that individuals are not limited by these expectations and are able to pursue their interests and abilities freely. It emphasises fairness in access to education, opportunities, resources, and decision-making.',
            'Students can begin to understand gender equality by reflecting on everyday experiences and recognising that everyone deserves equal respect and opportunities.',
          ],
        },
        {
          heading: '2. Recognising Gender Stereotypes',
          text: 'Gender stereotypes are beliefs or assumptions about how girls and boys should behave, what roles they should play, and what activities they should pursue.',
          list: [
            'Examples of stereotypes may include:',
            'believing that certain professions are only suitable for men or women',
            'assuming that girls should behave differently from boys',
            'expecting boys to suppress emotions or girls to be passive',
            'Such stereotypes can limit the potential of individuals and reinforce unequal treatment.',
            'Recognising these stereotypes helps students question unfair expectations and encourages them to support equality in everyday life.',
          ],
        },
        {
          heading: '3. Understanding Gender Discrimination',
          text: 'Gender discrimination occurs when individuals are treated unfairly because of their gender. This may happen in different contexts such as education, work, family life, or social participation.',
          list: [
            'Examples may include:',
            'unequal opportunities in education or career choices',
            'expectations that restrict girls\u2019 or boys\u2019 activities',
            'unequal sharing of responsibilities at home',
            'tolerance of harmful practices or gender-based violence',
            'Understanding these issues helps students become aware of how inequality affects individuals and communities.',
          ],
        },
        {
          heading: '4. Respectful Behaviour and Positive Relationships',
          text: 'Respect for all genders is essential for healthy relationships and positive interactions. Respectful behaviour involves treating others with dignity, listening to different perspectives, and valuing diversity.',
          list: [
            'Students can practise gender respect by:',
            'treating classmates equally',
            'avoiding discriminatory language or behaviour',
            'appreciating the abilities and contributions of others',
            'supporting fairness and inclusion in group activities',
            'Respectful relationships create safe environments where everyone feels valued and confident.',
          ],
        },
        {
          heading: '5. Promoting Equality in Everyday Life',
          text: 'Promoting gender equality begins with everyday actions and attitudes. Young people can contribute to equality by challenging stereotypes, supporting fairness, and encouraging inclusive behaviour.',
          list: [
            'Examples of positive actions include:',
            'sharing responsibilities at home and school',
            'encouraging both girls and boys to participate in all activities',
            'respecting different interests and choices',
            'speaking up against unfair treatment',
            'Even small actions can help create more respectful and inclusive communities.',
          ],
        },
        {
          heading: '6. From Awareness to Action',
          text: 'Understanding equality is the first step toward creating change. When individuals act with fairness, respect, and empathy, they help build a society where everyone has the opportunity to thrive.',
          list: [
            'Students can reflect on their own attitudes and actions and think about how they can promote equality in their daily lives. By practising gender respect, young people contribute to creating communities that value dignity, fairness, and mutual understanding.',
          ],
        },
        {
          heading: 'Bringing the Life Skill Together',
          text: 'Equality and gender respect are important life skills that help individuals build healthy relationships and contribute to a fair society.',
          list: [
            'By recognising stereotypes, questioning discrimination, and practising respectful behaviour, students develop attitudes that promote equality and inclusion. Schools play a vital role in helping young people learn these values and apply them in their everyday lives.',
            'Through awareness, reflection, and responsible actions, students can help create environments where everyone feels respected and valued.',
          ],
        },
        {
          heading: 'Key Message',
          list: [
            'Equality and gender respect create stronger and more inclusive communities.',
            'By treating everyone with dignity, challenging stereotypes, and promoting fairness, we help build a society where all individuals have equal opportunities to grow, learn, and contribute.',
          ],
        },
      ],
    },
  },
  23: {
    document: {
      title: 'SOCIAL AND INTERPERSONAL SKILLS',
      sections: [
        {
          heading: 'Why Social and Interpersonal Skills Matter',
          text: 'Human beings are social by nature. Our ability to interact with others, build relationships, and communicate effectively plays an important role in our well-being and success in life.',
          list: [
            'Social or interpersonal skills include the abilities that help individuals understand others, express their thoughts clearly, cooperate with people, and resolve disagreements respectfully. These skills are especially important during adolescence, a stage when young people begin forming deeper friendships, interacting more with peers, and developing their identity.',
            'Healthy relationships with friends, family members, teachers, and others help young people feel supported and confident. At the same time, learning how to manage disagreements, respect differences, and communicate effectively is essential for maintaining positive relationships.',
            'Schools provide an important environment for developing these skills. Through discussions, group activities, and shared experiences, students learn to listen to others, express their views respectfully, understand different perspectives, and work together toward common goals.',
          ],
        },
        {
          heading: '1. Understanding Social Skills in Everyday Life',
          text: 'Social skills are the abilities that help people interact and communicate with others in positive and respectful ways.',
          list: [
            'These skills include:',
            'communication',
            'listening',
            'cooperation',
            'empathy',
            'respect for others',
            'teamwork',
            'These abilities help individuals form friendships, work effectively with others, and respond thoughtfully to different social situations.',
            'In school, social skills help students collaborate during group work, support their classmates, and build meaningful relationships with peers and teachers.',
            'Developing these skills also strengthens self-confidence and helps individuals feel connected to others.',
          ],
        },
        {
          heading: '2. Communication and Listening',
          text: 'Communication is an essential part of building relationships. It involves expressing ideas, thoughts, and feelings clearly while also listening carefully to others.',
          list: [
            'Effective communication includes:',
            'speaking clearly and respectfully',
            'listening attentively without interrupting',
            'understanding others\u2019 viewpoints',
            'expressing disagreement politely',
            'Listening is as important as speaking. When people feel heard and understood, it strengthens trust and mutual respect.',
            'Students can practise effective communication by participating in discussions, sharing ideas during group activities, and respecting different opinions.',
          ],
        },
        {
          heading: '3. Empathy and Understanding Others',
          text: 'Empathy is the ability to understand and share another person\u2019s feelings.',
          list: [
            'When individuals practise empathy, they are able to:',
            'recognise how others feel',
            'respond with kindness and support',
            'appreciate different perspectives',
            'Empathy helps build caring and supportive relationships. It encourages individuals to respond thoughtfully when others are experiencing challenges or difficulties.',
            'Students can practise empathy by being attentive to the feelings of friends and classmates, offering support, and avoiding behaviours that may hurt others.',
          ],
        },
        {
          heading: '4. Building Positive Friendships',
          text: 'Friendships are an important part of growing up. They provide companionship, support, and opportunities to share experiences.',
          list: [
            'Healthy friendships are built on:',
            'trust',
            'respect',
            'honesty',
            'understanding',
            'cooperation',
            'Good friends encourage each other to make positive choices and respect each other\u2019s differences.',
            'Students learn about friendship through everyday interactions\u2014sharing ideas, helping classmates, and working together during activities.',
            'Strong friendships help young people feel valued and connected.',
          ],
        },
        {
          heading: '5. Managing Disagreements and Conflicts',
          text: 'Disagreements are a natural part of human relationships. Differences in opinions, interests, or misunderstandings can sometimes lead to conflicts.',
          list: [
            'Learning how to manage disagreements respectfully is an important life skill.',
            'Positive ways to resolve conflicts include:',
            'staying calm',
            'listening to all viewpoints',
            'discussing the problem openly',
            'finding solutions that are fair to everyone',
            'Resolving disagreements peacefully strengthens relationships and promotes cooperation.',
            'By learning constructive conflict resolution, students develop patience, understanding, and respect for others.',
          ],
        },
        {
          heading: '6. Building Healthy Relationships',
          text: 'Healthy relationships are based on mutual respect, trust, and understanding.',
          list: [
            'They involve:',
            'clear and respectful communication',
            'appreciation of others\u2019 perspectives',
            'cooperation and shared responsibility',
            'respect for personal boundaries',
            'When individuals practise these behaviours, relationships become supportive and positive.',
            'Students can strengthen their relationships by being respectful, supportive, and open to learning from others.',
            'These qualities contribute to a positive school environment where everyone feels safe and valued.',
          ],
        },
        {
          heading: 'Bringing the Life Skill Together',
          text: 'Social and interpersonal skills help individuals build meaningful relationships and interact positively with others.',
          list: [
            'By learning to communicate effectively, listen attentively, practise empathy, and manage disagreements respectfully, students develop the ability to work with others and build supportive friendships.',
            'These skills not only improve relationships in school but also prepare young people to participate responsibly in their families, communities, and society.',
            'Developing strong social skills helps create environments where people feel respected, understood, and connected.',
          ],
        },
        {
          heading: 'Key Message',
          list: [
            'Positive relationships are built through communication, empathy, respect, and cooperation.',
            'By developing strong social and interpersonal skills, students can build meaningful relationships and contribute to supportive and inclusive communities.',
          ],
        },
      ],
    },
  },
  24: {
    document: {
      title: 'PUBERTY AND ADOLESCENCE',
      sections: [
        {
          heading: 'Why Puberty and Adolescence Matter',
          text: 'Adolescence is a stage of life when children gradually transition into adulthood. During this period, young people experience important changes in their bodies, emotions, relationships, and ways of thinking. These changes are natural and are part of growing up.',
          list: [
            'Puberty refers to the physical and hormonal changes that occur during adolescence and prepare the body for adulthood. These changes may occur at different times and at different speeds for each individual. Understanding puberty helps young people develop a positive self-image and accept their bodies with confidence.',
            'Adolescence is also a time when individuals begin to develop their identity, build friendships, explore new interests, and make important decisions about their lives. At the same time, young people may experience emotional ups and downs, curiosity about relationships, and influence from peers and media.',
            'Learning about puberty and adolescence helps students understand these changes, manage emotions, and make responsible choices. Schools play an important role in providing accurate information, encouraging open discussion, and helping students develop life skills that support healthy growth and well-being.',
            'Understanding adolescence enables young people to respect themselves and others while preparing for a healthy transition into adulthood.',
          ],
        },
        {
          heading: '1. Understanding Adolescence',
          text: 'Adolescence is a period marked by rapid physical, emotional, and social development. It is a time when individuals begin to form their own identities and develop new perspectives about themselves and the world around them.',
          list: [
            'Common characteristics of adolescence include:',
            'rapid physical growth',
            'increasing independence',
            'stronger emotional experiences',
            'curiosity and exploration',
            'developing friendships and social connections',
            'growing interest in future goals and careers',
            'Each individual experiences adolescence differently. Recognising this diversity helps students respect themselves and others during this stage of life.',
          ],
        },
        {
          heading: '2. Physical Changes During Puberty',
          text: 'Puberty is the stage when the body begins to mature physically. These changes occur because of hormonal activity in the body.',
          list: [
            'Some common physical changes during puberty include:',
            'For both boys and girls',
            'increase in height and weight',
            'growth of body hair',
            'development of sweat glands',
            'changes in skin such as acne',
            'Changes commonly experienced by girls',
            'development of breasts',
            'widening of hips',
            'onset of menstruation',
            'Changes commonly experienced by boys',
            'deepening of voice',
            'development of facial hair',
            'increase in muscle mass',
            'These changes may occur earlier for some individuals and later for others. Understanding that this variation is normal helps students feel more comfortable with their development.',
          ],
        },
        {
          heading: '3. Emotional Changes and Self-Awareness',
          text: 'Adolescence is not only about physical growth. Emotional and psychological changes are also common during this stage.',
          list: [
            'Young people may experience:',
            'mood swings',
            'stronger feelings such as excitement, anger, or confusion',
            'greater sensitivity to others\u2019 opinions',
            'curiosity about identity and relationships',
            'Developing self-awareness helps adolescents understand their emotions and respond to situations in thoughtful ways.',
            'Healthy ways to manage emotions include:',
            'talking to trusted adults or friends',
            'engaging in hobbies and physical activities',
            'practising relaxation and mindfulness',
            'reflecting before making decisions',
            'These strategies help adolescents build confidence and emotional resilience.',
          ],
        },
        {
          heading: '4. Peer Influence and Media Awareness',
          text: 'During adolescence, friends and peer groups often become an important part of daily life. Peer influence can sometimes encourage positive behaviour such as teamwork and cooperation, but it may also lead to risky or unhealthy choices.',
          list: [
            'Media and social platforms can also influence attitudes and behaviour by presenting images and ideas that may not always reflect reality.',
            'Learning to think critically helps students:',
            'evaluate messages they receive from media',
            'resist negative peer pressure',
            'make independent and responsible decisions',
            'Developing critical thinking skills helps adolescents make choices that support their health and well-being.',
          ],
        },
        {
          heading: '5. Respect, Relationships, and Personal Boundaries',
          text: 'As adolescents grow older, they begin to understand relationships in new ways. Healthy relationships are built on respect, trust, empathy, and communication.',
          list: [
            'Important aspects of respectful relationships include:',
            'valuing each person\u2019s dignity',
            'respecting personal boundaries',
            'listening to others\u2019 perspectives',
            'supporting friends and classmates',
            'Learning to treat others with respect helps create safe and positive environments at school and in the community.',
          ],
        },
        {
          heading: '6. Introduction to Reproductive Health and HIV Prevention',
          text: 'As young people grow older, it becomes important to understand basic concepts related to reproductive health. Reproductive health refers to the well-being of individuals in relation to their reproductive systems and overall physical and emotional health.',
          list: [
            'Access to accurate information helps adolescents avoid myths and misconceptions and make informed decisions about their health.',
            'An important health issue that young people should be aware of is HIV (Human Immunodeficiency Virus), which affects the body\u2019s immune system. Awareness and responsible behaviour play an important role in preventing infections and protecting health.',
            'Key aspects of prevention include:',
            'understanding how infections spread',
            'seeking reliable health information',
            'practising responsible behaviour',
            'respecting and supporting individuals affected by illness without stigma or discrimination',
            'Education about reproductive health helps adolescents develop healthy attitudes, make responsible decisions, and respect others.',
          ],
        },
        {
          heading: 'Bringing the Life Skill Together',
          text: 'Puberty and adolescence are important stages of growth that involve physical, emotional, and social changes. Understanding these changes helps young people develop confidence, self-awareness, and respect for others.',
          list: [
            'By learning about their bodies, managing emotions, thinking critically about influences around them, and building respectful relationships, adolescents can navigate this stage of life in healthy and positive ways.',
            'Schools, families, and communities all play an important role in supporting young people as they grow and develop.',
          ],
        },
        {
          heading: 'Key Message',
          list: [
            'Adolescence is a natural stage of growth and discovery.\u000aUnderstanding puberty, managing emotions, respecting others, and making responsible choices help young people develop confidence and well-being as they move toward adulthood.',
          ],
        },
      ],
    },
  },
  25: {
    document: {
      title: 'ETHICAL USE OF MEDIA AND INTERNET',
      sections: [
        {
          heading: 'Why Ethical Use of Media and Internet Matters',
          text: 'Digital technologies, the internet, and social media have become an important part of everyday life for young people. These tools offer opportunities to learn, communicate, collaborate, and access a vast range of information.',
          list: [
            'Students today interact with digital platforms for education, entertainment, and social connection. Online spaces allow individuals to share ideas, participate in discussions, and learn about events happening around the world.',
            'However, digital spaces also present certain challenges. Online platforms may expose users to misinformation, cyberbullying, privacy risks, harmful content, and digital fraud. Messages or images shared online can spread quickly and may have long-lasting consequences.',
            'With the rapid growth of technology, new issues have emerged such as identity theft, digital scams, algorithmic manipulation of information, social media addiction, and ethical challenges related to Artificial Intelligence (AI).',
            'Developing the life skill of ethical media and internet use helps students understand how to interact responsibly in digital environments. It encourages thoughtful communication, respect for others, protection of personal data, and careful evaluation of online information.',
            'Schools play an important role in helping students become responsible digital citizens who use technology wisely for learning, creativity, and positive social interaction.',
          ],
        },
        {
          heading: '1. Understanding Digital Media and Online Behaviour',
          text: 'Digital media refers to online platforms such as websites, messaging applications, social media networks, and online learning environments. These platforms allow people to communicate instantly and access information from many sources.',
          list: [
            'Because digital communication can reach large audiences quickly, it is important to think carefully before posting or sharing content. Words, images, and videos shared online may influence others and can remain accessible for a long time.',
            'Responsible online behaviour includes:',
            'thinking before posting or forwarding information',
            'using respectful language in online discussions',
            'recognising that online actions can affect others',
            'understanding that digital communication should follow the same values as face-to-face interaction.',
            'Learning to communicate responsibly online helps build positive and supportive digital communities.',
          ],
        },
        {
          heading: '2. Digital Citizenship and Respectful Communication',
          text: 'Digital citizenship refers to responsible participation in the digital world. It involves understanding how to behave ethically and respectfully while using technology.',
          list: [
            'Responsible digital citizens:',
            'communicate politely and respectfully online',
            'respect different opinions and perspectives',
            'avoid harmful behaviour such as cyberbullying or spreading rumours',
            'support others who may face harassment online',
            'follow rules and guidelines of digital platforms.',
            'Respectful online communication helps maintain trust and cooperation among users and encourages a safe and inclusive digital environment.',
          ],
        },
        {
          heading: '3. Protecting Privacy and Personal Information',
          text: 'Personal information includes details such as passwords, phone numbers, addresses, photographs, and other private data. When shared carelessly online, such information may be misused by others.',
          list: [
            'Protecting privacy is an important part of digital safety.',
            'Students can practise responsible behaviour by:',
            'using strong and secure passwords',
            'avoiding sharing personal details publicly',
            'being cautious when interacting with unknown people online',
            'understanding privacy settings on digital platforms',
            'asking permission before sharing someone else\u2019s photographs or information.',
            'Learning to protect personal information helps individuals avoid risks such as identity theft, data misuse, and online exploitation.',
          ],
        },
        {
          heading: '4. Recognising Online Risks and Digital Fraud',
          text: 'The internet can sometimes be misused for fraudulent activities. Cybercriminals may attempt to deceive individuals through fake messages, fraudulent websites, or misleading advertisements.',
          list: [
            'Examples of online risks include:',
            'phishing messages that ask for personal information',
            'fake investment or job offers',
            'impersonation scams where someone pretends to be a trusted authority',
            'threats or intimidation through digital platforms',
            'fraudulent practices sometimes described as \u201cdigital arrest\u201d scams, where individuals are pressured online to transfer money.',
            'Recognising suspicious messages, verifying information, and seeking help from trusted adults or authorities are important steps in preventing online harm.',
          ],
        },
        {
          heading: '5. Misinformation, Algorithms, and Social Media Influence',
          text: 'Not all information shared online is accurate. False or misleading content may spread rapidly on digital platforms.',
          list: [
            'Social media platforms often use algorithms to display content based on users\u2019 preferences and previous interactions. While this can help personalise information, it may also influence what people see and shape their opinions.',
            'Students can develop critical thinking skills by:',
            'verifying information from reliable sources',
            'checking the credibility of websites and messages',
            'avoiding sharing rumours or unverified news',
            'understanding that social media content may not always reflect the complete picture.',
            'Responsible information sharing helps reduce the spread of misinformation and promotes informed decision-making.',
          ],
        },
        {
          heading: '6. Artificial Intelligence and Responsible Technology Use',
          text: 'Artificial Intelligence (AI) technologies are increasingly integrated into digital platforms such as search engines, recommendation systems, educational tools, and virtual assistants.',
          list: [
            'AI can support learning and innovation, but it also raises important ethical questions related to privacy, fairness, and responsible use of technology.',
            'Students should understand that:',
            'AI systems use large amounts of data to generate responses',
            'automated systems may sometimes produce inaccurate or biased information',
            'technologies such as deep-fake images or videos may misrepresent reality',
            'responsible use of AI tools requires careful thinking and ethical judgement.',
            'Using emerging technologies thoughtfully ensures that digital innovation benefits individuals and society.',
          ],
        },
        {
          heading: 'Bringing the Life Skill Together',
          text: 'Ethical use of media and the internet involves responsible communication, respect for others, protection of personal information, and critical evaluation of online content.',
          list: [
            'By learning to recognise online risks, verify information, and use technology responsibly, students can navigate the digital world safely and confidently.',
            'Developing these skills enables young people to become aware, responsible, and ethical digital citizens who contribute positively to online communities.',
          ],
        },
        {
          heading: 'Key Message',
          list: [
            'Digital technologies can be powerful tools for learning, creativity, and communication.',
            'By using media and the internet responsibly\u2014respecting others, protecting privacy, and thinking critically about information\u2014students can help create safe, trustworthy, and positive digital environments for everyone.',
          ],
        },
      ],
    },
  },
  26: {
    document: {
      title: 'CHOOSING TO AVOID SUBSTANCE ABUSE',
      sections: [
        {
          heading: 'Why Choosing to Avoid Substance Abuse Matters',
          text: 'Adolescence is a time of curiosity, exploration, and increasing independence. During this stage, young people may encounter situations where they are exposed to substances such as tobacco, alcohol, drugs, or other harmful chemicals. Learning how to recognise these risks and make responsible choices is an important life skill.',
          list: [
            'Substance misuse can negatively affect physical health, emotional well-being, relationships, and academic performance. It may impair judgment, reduce concentration, and lead to behaviours that place individuals and others at risk. Preventing substance misuse during adolescence is therefore essential for maintaining health and supporting positive development.',
            'Young people may sometimes experiment with substances due to curiosity, peer pressure, stress, or influence from media and advertisements. Developing awareness and life skills such as critical thinking, decision-making, and self-confidence helps students resist these pressures and make healthier choices.',
            'Schools play an important role in helping students understand the risks associated with substance misuse and encouraging them to adopt safe and responsible behaviours.',
          ],
        },
        {
          heading: '1. Understanding Substance Use and Misuse',
          text: 'Substances are chemicals that can affect how the body and brain function. Some substances may be used for medical purposes when prescribed by a doctor, but misuse occurs when substances are used in ways that harm health or are taken without proper guidance.',
          list: [
            'Examples of substances that may be misused include:',
            'tobacco products',
            'alcohol',
            'drugs and inhalants',
            'certain medicines used improperly',
            'Substance misuse can affect the body, mind, and behaviour. It may reduce physical fitness, affect concentration and learning, and create difficulties in relationships with family and friends.',
            'Understanding the difference between safe use and harmful misuse helps students make informed decisions.',
          ],
        },
        {
          heading: '2. Recognising Influences and Pressures',
          text: 'Adolescents may face different influences that encourage experimentation with substances. These influences may include:',
          list: [
            'curiosity or desire to try new experiences',
            'peer pressure from friends or social groups',
            'stress or emotional challenges',
            'media portrayals that make substance use appear attractive',
            'lack of awareness about long-term consequences',
            'Recognising these influences helps students think critically about their choices. Learning to evaluate situations and consider consequences strengthens the ability to resist pressure and act responsibly.',
          ],
        },
        {
          heading: '3. Understanding the Consequences of Substance Misuse',
          text: 'Substance misuse can have serious effects on different aspects of life.',
          list: [
            'Physical health effects may include:',
            'damage to organs such as lungs, heart, and brain',
            'reduced physical stamina and overall health',
            'Emotional and mental effects may include:',
            'mood changes and emotional instability',
            'difficulty concentrating and learning',
            'Social consequences may include:',
            'conflicts with family and friends',
            'decline in school performance',
            'risky behaviours and unsafe situations',
            'Understanding these consequences helps young people realise that avoiding harmful substances supports their present well-being and future goals.',
          ],
        },
        {
          heading: '4. Developing Refusal and Decision-Making Skills',
          text: 'An important part of preventing substance misuse is learning how to respond confidently in situations where substances are offered.',
          list: [
            'Refusal skills help individuals say \u201cno\u201d to unhealthy choices while maintaining self-respect and positive relationships.',
            'Examples of refusal strategies include:',
            'politely but firmly declining the offer',
            'suggesting an alternative activity',
            'leaving the situation if it becomes uncomfortable',
            'seeking support from trusted friends or adults',
            'Decision-making skills also help individuals consider the consequences of their actions and choose behaviours that support health and safety.',
            'Developing these life skills enables students to respond effectively to challenging situations.',
          ],
        },
        {
          heading: '5. Promoting Healthy Alternatives',
          text: 'Healthy lifestyles provide positive alternatives to risky behaviours. Engaging in constructive activities helps young people build confidence, develop talents, and maintain physical and emotional well-being.',
          list: [
            'Examples of healthy activities include:',
            'sports and physical exercise',
            'creative arts and hobbies',
            'volunteering and community activities',
            'spending time with supportive friends and family',
            'Positive environments and supportive peer relationships encourage students to choose healthy behaviours and avoid harmful substances.',
            'In addition to substance misuse, some behaviours can also negatively affect well-being if they become excessive or unhealthy. These may include unhealthy eating patterns, such as eating disorders, or compulsive habits like excessive screen use. Learning to maintain balance in daily habits helps support overall health.',
          ],
        },
        {
          heading: '6. From Awareness to Responsible Choices',
          text: 'Understanding the risks of substance misuse is the first step toward making responsible choices. When young people develop confidence, awareness, and decision-making skills, they are better prepared to resist harmful influences.',
          list: [
            'Students can practise this life skill by:',
            'choosing activities that support health and well-being',
            'encouraging friends to make safe choices',
            'seeking help when faced with difficult situations',
            'supporting positive and healthy lifestyles in their communities',
            'Through awareness, reflection, and responsible behaviour, young people can protect their health and contribute to creating safer and healthier environments.',
          ],
        },
        {
          heading: 'Bringing the Life Skill Together',
          text: 'Choosing to avoid substance misuse is an important life skill that supports physical health, emotional well-being, and responsible decision-making.',
          list: [
            'By understanding risks, recognising influences, and practising refusal skills, students develop the confidence to make safe and informed choices. Schools and communities play an important role in guiding young people toward healthy behaviours and positive lifestyles.',
            'Through knowledge, reflection, and responsible actions, students can contribute to building communities that support health, safety, and well-being.',
          ],
        },
        {
          heading: 'Key Message',
          list: [
            'Choosing to avoid harmful substances helps protect health, relationships, and future opportunities.',
            'By making informed decisions and supporting healthy lifestyles, young people can build a strong foundation for a safe and positive future.',
          ],
        },
      ],
    },
  },
  27: {
    document: {
      title: 'TACKLING VIOLENCE AND STAYING SAFE',
      sections: [
        {
          heading: 'Why Safety and Violence Prevention Matter',
          text: 'Safety is a fundamental right of every child. Feeling safe at home, at school, and in the community allows young people to grow, learn, and develop confidence. When children understand how to recognise risks and respond to unsafe situations, they become better prepared to protect themselves and support others.',
          list: [
            'Violence can occur in many forms, including physical harm, bullying, emotional abuse, and unsafe behaviour that leads to injuries. It can take place in different settings\u2014at home, in school, in public spaces, or even online. Children and adolescents may also face risks from accidents such as road injuries, unsafe environments, or lack of safety awareness.',
            'Learning about safety helps young people identify risks, make informed decisions, and take responsible actions when faced with unsafe situations. It also encourages empathy and responsibility toward the safety of others.',
            'Schools play a crucial role in helping students develop awareness about personal safety, injury prevention, and respectful behaviour. Through discussion, reflection, and practical activities, students can learn how to recognise unsafe situations, seek help, and contribute to creating safer environments.',
          ],
        },
        {
          heading: '1. Understanding Violence and Personal Safety',
          text: 'Violence refers to actions that cause harm or threaten the safety and well-being of individuals. It may be physical, verbal, emotional, or psychological.',
          list: [
            'Examples include:',
            'bullying or threatening behaviour',
            'physical harm or assault',
            'verbal abuse or humiliation',
            'emotional harm or intimidation',
            'unsafe behaviour that may lead to injury',
            'Understanding these forms helps students recognise when a situation is unsafe and when action is needed to protect themselves or others.',
            'Personal safety involves being aware of one\u2019s surroundings, recognising warning signs, and taking steps to avoid harm.',
            'Developing awareness of safety issues empowers students to make responsible decisions and maintain their well-being.',
          ],
        },
        {
          heading: '2. Recognising Unsafe Situations',
          text: 'Sometimes situations may feel uncomfortable or unsafe. Learning to recognise early warning signs helps individuals respond quickly and seek support.',
          list: [
            'Unsafe situations may include:',
            'bullying or harassment',
            'strangers behaving suspiciously',
            'pressure to engage in risky or harmful behaviour',
            'unsafe environments such as poorly lit areas or crowded places',
            'online interactions that feel threatening or inappropriate',
            'Trusting one\u2019s instincts and recognising these signals are important steps in protecting personal safety.',
            'By understanding unsafe situations, students become more confident in identifying risks and taking appropriate action.',
          ],
        },
        {
          heading: '3. Preventing Injuries and Accidents',
          text: 'Many injuries can be prevented by following simple safety practices in daily life.',
          list: [
            'Common causes of injuries include:',
            'road accidents',
            'unsafe play or sports activities',
            'fire or electrical hazards',
            'improper use of tools or sharp objects',
            'unsafe environments at home or school',
            'Learning preventive measures helps reduce risks and protect individuals from harm.',
            'Examples of safety practices include:',
            'following road safety rules',
            'wearing protective equipment during sports',
            'handling electrical appliances carefully',
            'avoiding risky behaviour',
            'Adopting these habits promotes a culture of safety and responsibility.',
          ],
        },
        {
          heading: '4. Responding to Unsafe Situations',
          text: 'When faced with unsafe situations, it is important to remain calm and take protective actions.',
          list: [
            'Safe responses may include:',
            'moving away from danger',
            'saying \u201cNo\u201d confidently when feeling uncomfortable',
            'seeking help from trusted adults',
            'reporting unsafe behaviour to responsible authorities',
            'Trusted adults may include:',
            'parents or guardians',
            'teachers',
            'school counsellors',
            'community members responsible for safety',
            'Seeking help early can prevent harm and ensure appropriate support.',
            'Learning how to respond to unsafe situations builds confidence and resilience.',
          ],
        },
        {
          heading: '5. Building Safe Relationships and Communities',
          text: 'Safety is strengthened when individuals treat each other with respect and empathy.',
          list: [
            'Positive behaviours that contribute to safer environments include:',
            'respecting others\u2019 boundaries',
            'standing against bullying or harassment',
            'supporting friends who feel unsafe',
            'promoting fairness and kindness',
            'When individuals care for one another and speak up against harmful behaviour, they help create safe and inclusive communities.',
            'Schools can encourage safety by promoting open communication, cooperation, and mutual respect among students.',
          ],
        },
        {
          heading: '6. From Awareness to Action: My Safety Commitment',
          text: 'Safety begins with personal awareness and responsible action.',
          list: [
            'Students can reflect on simple steps they can take to stay safe and support others.',
            'Examples of safety actions include:',
            'following safety rules at school and in public places',
            'avoiding risky behaviour that may lead to injuries',
            'seeking help when facing unsafe situations',
            'supporting peers who may need assistance',
            'promoting respect and kindness in everyday interactions',
            'By practising these behaviours, young people contribute to safer environments for themselves and their communities.',
          ],
        },
        {
          heading: 'Bringing the Life Skill Together',
          text: 'Tackling violence and staying safe requires awareness, confidence, and responsible action. Recognising unsafe situations helps individuals protect themselves. Preventing injuries through safe behaviour reduces risks in daily life. Seeking help and supporting others strengthens safety within communities.',
          list: [
            'When students learn to respect others, stand against violence, and follow safety practices, they help create environments where everyone can learn and grow without fear.',
            'Developing these life skills empowers young people to make safe choices and contribute positively to society.',
          ],
        },
        {
          heading: 'Key Message',
          list: [
            'Safety begins with awareness and responsible actions.',
            'By recognising unsafe situations, preventing injuries, seeking help when needed, and supporting others, young people can protect themselves and contribute to safer schools and communities.',
          ],
        },
      ],
    },
  },
  28: {
    document: {
      title: 'SYSTEMS THINKING FOR THE WEB OF LIFE',
      sections: [
        {
          heading: 'Introduction',
          text: 'Life on Earth depends on a network of natural systems that are closely connected. The air we breathe, the water we drink, the soil that grows our food, and the ecosystems that support life are all part of this web of life. Understanding these connections helps us see how nature sustains both human health and the health of the planet.',
          list: [
            'Every living organism depends on these natural systems. Plants require sunlight, water, air, and nutrients from the soil to grow. Animals depend on plants or other animals for food. Humans depend on plants, animals, air, and water for nourishment, energy, and survival. In this way, all forms of life are linked through a system of natural relationships.',
            'When natural systems are healthy, they provide clean air, safe water, fertile soil, and nutritious food. These resources support the functioning of the human body and the well-being of communities. Recognizing these connections helps us understand that protecting the environment is essential for sustaining life.',
          ],
        },
        {
          heading: 'Air \u2013 Supporting Life and Climate',
          text: 'Air is essential for all living organisms. Humans and animals breathe in oxygen, which the body uses to produce energy for growth and daily activities. At the same time, we breathe out carbon dioxide.',
          list: [
            'Plants play a vital role in maintaining the balance of gases in the atmosphere. Through photosynthesis, plants use carbon dioxide, water, and sunlight to produce food and release oxygen. This natural process supports life on Earth.',
            'However, human activities such as burning fuels for energy, transportation, and industry release additional gases into the atmosphere. These greenhouse gases trap heat and contribute to climate change, which affects weather patterns, ecosystems, and living conditions across the planet.',
          ],
        },
        {
          heading: 'Water \u2013 Sustaining Life and Food Systems',
          text: 'Water is fundamental for life. In the human body, water helps transport nutrients, regulate body temperature, support digestion, and remove waste.',
          list: [
            'Water is also essential for growing food. Plants need water for photosynthesis and growth. Freshwater from rivers, lakes, rainfall, and groundwater supports agriculture, ecosystems, and daily human activities.',
            'Changes in climate can affect rainfall patterns, water availability, and crop production. Protecting water resources and using water wisely helps ensure that clean water remains available for both people and ecosystems.',
          ],
        },
        {
          heading: 'Food \u2013 Connecting Soil, Water, and Living Systems',
          text: 'Food provides the nutrients and energy needed for life. Most food systems begin with plants, which produce food using sunlight, water, carbon dioxide, and nutrients from the soil.',
          list: [
            'Humans eat many plant foods directly, such as grains, fruits, vegetables, and pulses. Animals also contribute to food systems by providing foods such as milk, eggs, and meat. Many animals depend on plants as their main source of food.',
            'Healthy food systems depend on fertile soil, clean water, sunlight, biodiversity, and stable climate conditions. When these natural systems are protected, they support the production of diverse and nutritious foods.',
          ],
        },
        {
          heading: 'Understanding the Web of Life',
          text: 'Air, water, soil, plants, animals, and humans are interconnected in natural systems. For example:',
          list: [
            '\u2022 Healthy soil supports plant growth.\u000a\u2022 Plants produce oxygen and food.\u000a\u2022 Water supports plant growth and human health.\u000a\u2022 Animals and humans depend on plants for nourishment.',
            'Climate change demonstrates how these connections work across the Earth system. For instance:',
            'Energy use \u2192 greenhouse gas emissions \u2192 climate change \u2192 impacts on water availability and food production',
            'When these systems are disrupted through pollution, deforestation, or unsustainable practices, the balance of ecosystems can be affected.',
          ],
        },
        {
          heading: 'Caring for the Systems That Sustain Life',
          text: 'Protecting the natural systems that sustain life is essential for a healthy future. Individuals and communities can help by:',
          list: [
            '\u2022 Reducing energy use and air pollution\u000a\u2022 Conserving water and preventing waste\u000a\u2022 Supporting sustainable agriculture and healthy food systems\u000a\u2022 Protecting forests, soil, and biodiversity',
            'Small everyday choices can contribute to healthier ecosystems and a more sustainable planet.',
          ],
        },
        {
          heading: 'Key Message',
          list: [
            'Life on Earth is supported by an interconnected web of air, water, soil, food, and living organisms. By understanding these relationships and adopting responsible lifestyles, we can help protect the natural systems that sustain life for present and future generations. \ud83c\udf0d',
          ],
        },
      ],
    },
  },
  29: {
    document: {
      title: 'UNDERSTANDING THE HUMAN BODY AND ENVIRONMENT',
      sections: [
        {
          heading: 'Introduction',
          text: 'The human body is an extraordinary system that works continuously to keep us alive, active, and able to interact with the world around us. Every moment, the body performs many complex processes such as breathing, circulating blood, digesting food, moving muscles, and responding to information from the environment. Although these processes often occur automatically, they are influenced by our daily habits, lifestyle choices, and the environments in which we live.',
          list: [
            'Children experience many signals from their bodies every day. They may feel hunger when the body needs nourishment, thirst when the body requires water, or tiredness when it needs rest. Sometimes the body may also signal discomfort or pain when something is not functioning properly. Learning to recognise and understand these signals is an important step in developing awareness about health and well-being.',
            'Understanding how the human body works also helps children recognise the strong connection between their health and the environment. Clean air, nutritious food, regular physical activity, and healthy surroundings all contribute to the proper functioning of the body. When children develop this awareness early in life, they are more likely to build habits that support lifelong health and well-being.',
          ],
        },
        {
          heading: '1. Understanding the Human Body and Its Systems',
          text: 'The human body is made up of several interconnected systems that work together to support life. These systems include the respiratory system, digestive system, nervous system, circulatory system, and musculoskeletal system. Each system has a specific role, but they depend on each other to function effectively.',
          list: [
            'Even when we are not aware of it, the body is constantly working. The lungs help us breathe, the heart pumps blood throughout the body, the digestive system processes the food we eat, and the brain coordinates activities and responses.',
            'Children often experience different sensations throughout the day\u2014energy, tiredness, hunger, or excitement. These sensations are signals that help the body maintain balance. Learning about how the body works helps children understand these signals and respond to them appropriately.',
            'When children understand the basic functioning of the body, they become more aware of how their daily habits affect their health. This awareness encourages them to develop healthy routines such as eating nutritious foods, staying physically active, maintaining hygiene, and getting enough rest.',
          ],
        },
        {
          heading: '2. Breathing and the Importance of Clean Air',
          text: 'Breathing is one of the most essential processes for life. Every time we inhale, our lungs take in oxygen from the air. Oxygen is then transported through the bloodstream to all the cells in the body. Cells use this oxygen to produce the energy required for movement, thinking, and other activities.',
          list: [
            'During this process, the body produces carbon dioxide as a waste gas. When we exhale, this gas leaves the body.',
            'Breathing usually happens automatically, but it adjusts depending on the body\u2019s needs. When we run, climb stairs, or play sports, our muscles require more energy. To meet this demand, the body increases the rate and depth of breathing so that more oxygen can reach the cells.',
            'The quality of the air we breathe is very important for maintaining healthy lungs. Clean air allows the respiratory system to function properly, while polluted air containing smoke, dust, or harmful chemicals can damage the lungs and make breathing difficult.',
            'Therefore, protecting the environment is closely linked to protecting human health. Reducing pollution, planting trees, and ensuring good ventilation in homes and classrooms help maintain cleaner air and support healthy breathing.',
          ],
        },
        {
          heading: '3. The Nervous System: How the Body Responds to the Environment',
          text: 'The nervous system enables the body to sense and respond to the environment around it. The brain acts as the body\u2019s control centre, while nerves form a network that carries messages between the brain and different parts of the body.',
          list: [
            'Our senses\u2014sight, hearing, smell, taste, and touch\u2014collect information from the surroundings. For example, our eyes detect light and colour, our ears detect sound, and our skin senses temperature and pressure. These signals are sent to the brain, which processes the information and determines how the body should respond.',
            'For example, if we accidentally touch a hot object, the nerves quickly send a message to the brain. The brain then signals the muscles to pull the hand away to avoid injury.',
            'The nervous system also helps control movement, balance, memory, emotions, and concentration. It allows us to learn new skills, solve problems, and interact with others.',
            'Healthy habits such as proper sleep, balanced nutrition, regular exercise, and managing stress help the brain and nervous system function effectively.',
          ],
        },
        {
          heading: '4. Food as Fuel and the Gut\u2013Brain Connection',
          text: 'Food provides the body with the nutrients and energy needed for growth, repair, and daily functioning. The digestive system breaks down the food we eat into smaller nutrients that can be absorbed and used by the body.',
          list: [
            'However, digestion is not only a physical process. The digestive system is closely connected to the brain through what scientists call the gut\u2013brain connection. Signals constantly travel between the digestive system and the brain, allowing them to influence each other.',
            'Many people notice that emotions can affect digestion. Stress or anxiety may sometimes cause stomach discomfort or changes in appetite. Similarly, when the digestive system is healthy, it can contribute to improved mood and overall well-being.',
            'The gut also contains beneficial microorganisms that help digest food, support immunity, and maintain overall health. Eating a balanced diet rich in fruits, vegetables, whole grains, pulses, and fermented foods helps maintain a healthy gut environment.',
            'Healthy eating involves maintaining balance, variety, and moderation. Consuming different types of foods ensures that the body receives the nutrients it needs while avoiding excessive intake of sugar, salt, and processed foods.',
          ],
        },
        {
          heading: '5. Movement, Posture, and Active Living',
          text: 'The human body is designed for movement. Muscles, bones, and joints allow us to walk, run, stretch, and perform a wide range of daily activities. Regular movement helps maintain physical strength, flexibility, and overall health.',
          list: [
            'However, many modern lifestyles involve long periods of sitting. Students often spend hours sitting in classrooms, studying at desks, or using digital devices. This sedentary behaviour reduces the amount of natural movement the body needs.',
            'Poor posture during long periods of sitting can also lead to physical discomfort. Slouching, bending the neck forward while using screens, or sitting without proper support can strain the neck, shoulders, and back.',
            'Maintaining good posture while sitting and standing is important for protecting the body. Sitting upright, adjusting screens to eye level, and taking short breaks to stretch or walk can help reduce strain.',
            'Encouraging regular movement through sports, outdoor play, walking, and physical activities helps maintain both physical and mental well-being.',
          ],
        },
        {
          heading: '6. Listening to the Body\u2019s Signals',
          text: 'The human body constantly communicates its needs through signals that help maintain balance and health. These signals include hunger, thirst, fatigue, discomfort, and pain.',
          list: [
            'For example:',
            'Hunger indicates that the body needs nourishment.',
            'Thirst signals the need for water.',
            'Fatigue suggests that the body requires rest.',
            'Pain may indicate strain, injury, or illness.',
            'Pain is an important protective signal because it alerts us when the body may be experiencing stress or damage. Muscle soreness after physical activity, headaches caused by dehydration, or discomfort from poor posture are examples of signals that help us recognise when the body needs attention.',
            'Recognising and responding to these signals helps maintain health. Drinking water, resting when tired, adjusting posture, or seeking medical help when needed allows the body to recover and maintain balance.',
            'Learning to listen to the body helps children develop awareness and responsibility for their own well-being.',
          ],
        },
        {
          heading: 'Conclusion',
          text: 'Understanding the human body and its relationship with the environment is an important part of developing healthy lifestyles. The body functions as an interconnected system in which breathing, nutrition, movement, rest, and emotional well-being all influence overall health.',
          list: [
            'Environmental factors such as air quality, food availability, and daily activity patterns also play a significant role in supporting or affecting human health. Clean air supports breathing, nutritious foods provide energy and nutrients, and regular movement keeps the body strong and active.',
            'By learning how the body works and recognising its signals, children become more aware of their own health needs. This awareness helps them develop habits that support physical, mental, and emotional well-being.',
            'When children understand the connection between their bodies, their habits, and the environment around them, they are better prepared to make responsible choices that support lifelong health and resilience.',
          ],
        },
      ],
    },
  },
  30: {
    document: {
      title: 'SOIL HEALTH AND FOOD PRODUCTION',
      sections: [
        {
          heading: '1. Soil: The Living Foundation of Food',
          text: 'Every meal we eat begins its journey in the soil. Healthy soil supports the growth of crops that provide grains, fruits, vegetables, pulses, nuts, and fodder for animals. These foods nourish people, sustain communities, and form the foundation of food systems around the world.',
          list: [
            'Soil is not simply a surface where plants grow. It is a living system made up of minerals, organic matter, water, air, and a wide range of organisms. These components work together to create conditions that allow plants to grow and produce food.',
            'When soil remains healthy and fertile, it supports productive farms and stable food supplies. However, when soil becomes degraded through erosion, excessive chemical use, or loss of organic matter, crop productivity and food security can be affected.',
          ],
        },
        {
          heading: '2. Organic Matter: The Heart of Soil Health',
          text: 'Organic matter is one of the most important components of healthy soil. It comes from decomposed plant materials, crop residues, animal waste, and microorganisms. Over time, this organic material forms humus, which improves soil fertility and structure.',
          list: [
            'Organic matter helps soil retain nutrients and release them slowly to plants. It also improves soil structure by making soil loose and porous, allowing roots to grow easily and access nutrients.',
            'Equally important, organic matter supports soil organisms such as earthworms, fungi, and bacteria. These organisms help break down organic materials and recycle nutrients that plants require for healthy growth.',
            'However, intensive farming practices and excessive soil disturbance can reduce organic matter levels in soil, making it less fertile and less productive over time.',
          ],
        },
        {
          heading: '3. Soil Moisture and Water Retention',
          text: 'Moisture plays a vital role in soil health and plant growth. Water allows nutrients in the soil to dissolve so that plant roots can absorb them. It also supports the microorganisms that help maintain soil fertility.',
          list: [
            'Soils rich in organic matter can retain moisture more effectively. Organic materials act like a sponge, absorbing rainfall and gradually releasing water to plants when needed. This improves crop resilience during dry periods and reduces the need for frequent irrigation.',
            'Maintaining soil moisture is therefore essential for stable crop production. Practices such as mulching, adding organic matter, and protecting soil structure help improve water retention and support sustainable agriculture.',
          ],
        },
        {
          heading: '4. Soil Biodiversity and Nutrient Cycling',
          text: 'Healthy soil is home to an enormous diversity of living organisms. Earthworms, insects, bacteria, fungi, and other microorganisms form a complex soil ecosystem that supports plant growth.',
          list: [
            'These organisms help break down organic materials such as plant residues and animal waste. Through this process, nutrients are released back into the soil in forms that plants can absorb. This natural recycling process is known as nutrient cycling.',
            'When soil biodiversity is healthy, nutrients are continuously renewed, soil structure improves, and plants grow more efficiently. However, excessive use of chemicals, soil disturbance, and loss of organic matter can reduce soil biodiversity and disrupt these natural processes.',
            'Protecting soil organisms is therefore essential for maintaining productive and sustainable food systems.',
          ],
        },
        {
          heading: '5. Fertilizers, Chemicals, and Modern Agricultural Challenges',
          text: 'Farmers often use fertilizers to supply nutrients that crops need for growth. Chemical fertilizers can increase yields and support food production, especially when soils lack sufficient nutrients.',
          list: [
            'However, excessive or imbalanced use of chemical fertilizers can affect soil health over time. Heavy reliance on chemical inputs may reduce soil organic matter and harm beneficial soil organisms.',
            'Modern agriculture also faces challenges such as soil erosion, declining soil fertility, and environmental pollution. Sustainable nutrient management\u2014combining organic inputs like compost and manure with careful fertilizer use\u2014helps maintain soil productivity while protecting the soil ecosystem.',
          ],
        },
        {
          heading: '6. Soil Health, Climate Change, and Sustainable Food Futures',
          text: 'Soil health is closely connected to climate change. Soils rich in organic matter can store carbon in the ground, helping reduce the amount of carbon dioxide in the atmosphere. This process helps mitigate climate change.',
          list: [
            'At the same time, climate change affects soil conditions and food production. Changes in rainfall patterns, rising temperatures, and extreme weather events can influence soil moisture, soil fertility, and crop productivity.',
            'Maintaining healthy soils with adequate organic matter and moisture helps farms become more resilient to climate stress. Healthy soils therefore play an important role in both sustainable food production and climate adaptation.',
          ],
        },
        {
          heading: 'Key Message',
          list: [
            'Healthy soil rich in organic matter and living organisms is the foundation of sustainable food production. By protecting soil biodiversity, maintaining soil moisture, and managing fertilizers responsibly, we can build resilient food systems and support a healthier planet. \ud83c\udf31',
          ],
        },
      ],
    },
  },
  31: {
    document: {
      title: 'THOUGHTFUL CONSUMPTION AND WASTE REDUCTION',
      sections: [
        {
          heading: 'Introduction',
          text: 'Every day we use many things such as food, water, paper, toys, electricity, and plastic items. These things make our lives easier and more comfortable, but they also come from natural resources like trees, soil, water, and minerals. If we use these resources carelessly or throw things away too quickly, we create a lot of waste and harm the environment.',
          list: [
            'Learning how to use things wisely is an important life skill. Thoughtful consumption means being careful about what we use, how much we use, and what we do with things after we finish using them. When we reduce waste and make smarter choices, we help protect nature and keep our surroundings clean.',
            'Children can play an important role in this effort. Simple habits like finishing food, reusing materials, saving energy, and reducing plastic can make a big difference. By learning these habits early, young people can help create a more sustainable future for everyone.',
          ],
        },
        {
          heading: '1. Thoughtful Consumption: Reuse, Share, and Recycle',
          text: 'Thoughtful consumption means thinking carefully before buying or using something. Instead of taking things for granted, we can ask simple questions: Do I really need this? Can I use what I already have? Making careful choices helps us avoid wasting important resources such as water, energy, and materials.',
          list: [
            'Everything we use\u2014food, clothes, toys, books, and school supplies\u2014comes from nature. Trees, water, soil, and minerals are used to make the things we enjoy every day. When we use these resources wisely, we help protect nature and ensure that there is enough for the future.',
            'One of the best ways to reduce waste is to reuse, share, and recycle. Many items can be used more than once instead of being thrown away. Glass jars can be reused for storage, scrap paper can be used for drawing, and old clothes or toys can be shared or donated to others. Recycling materials such as paper, plastic, metal, and glass helps turn waste into new products. By practicing reuse, sharing, and recycling, children learn to care for resources and reduce waste.',
          ],
        },
        {
          heading: '2. Why Reducing Waste Is Important',
          text: 'Waste is anything we throw away after using it. Today, people produce a large amount of waste, including plastic bottles, food scraps, packaging materials, and broken items. Much of this waste ends up in landfills, rivers, and oceans.',
          list: [
            'When waste accumulates, it can harm animals, plants, and natural environments. Plastic waste, for example, can remain in nature for hundreds of years. Animals sometimes mistake plastic for food, which can make them sick or even cause death.',
            'Producing new products also requires energy and natural resources. When items are quickly thrown away and replaced, more materials and energy are used to produce new ones. This increases pollution and puts pressure on the environment.',
            'Reducing waste helps conserve natural resources and protects ecosystems. Simple habits such as repairing items, reusing materials, and recycling waste can help reduce the amount of trash that ends up in landfills and natural habitats.',
          ],
        },
        {
          heading: '3. Reducing Food Waste',
          text: 'Food waste happens when edible food is thrown away instead of being eaten. Many families cook or serve more food than they actually need, and leftovers sometimes end up in the trash. This wastes not only food but also the water, energy, and effort used to grow and prepare it.',
          list: [
            'Children can help reduce food waste by taking small portions during meals and finishing what is on their plates before taking more. Packing lunch carefully and eating most of it at school can also prevent food from being wasted.',
            'Leftovers can often be used in new meals. For example, leftover rice can be used to make fried rice the next day, and vegetables can be added to soups or sandwiches. Food should also be stored properly so that it stays fresh for longer.',
            'Some food scraps, such as fruit peels and vegetable skins, can be composted. Composting turns these scraps into natural fertilizer that helps plants grow. By following these simple steps, families can greatly reduce food waste.',
          ],
        },
        {
          heading: '4. Reducing Plastic Waste',
          text: 'Plastic is widely used in everyday items such as bottles, bags, packaging, and straws. Although plastic is convenient, it creates serious environmental problems because it does not break down easily. Many plastic items are used only once and then thrown away.',
          list: [
            'Plastic waste often ends up in rivers and oceans, where it harms wildlife and pollutes natural habitats. Animals may accidentally eat plastic or become trapped in it.',
            'Children can help reduce plastic waste by using reusable items. Carrying a reusable water bottle, packing lunch in reusable containers, and using cloth shopping bags instead of plastic bags can reduce the use of single-use plastics.',
            'Another useful habit is choosing products with less plastic packaging. Plastic containers can also be reused for storage at home, and plastic waste should always be placed in the correct recycling bins. These small actions can significantly reduce plastic pollution.',
          ],
        },
        {
          heading: '5. Reducing Energy Waste',
          text: 'Energy is used every day to power lights, fans, televisions, computers, and many other devices. Much of this energy comes from natural resources such as coal, oil, and natural gas. When energy is wasted, more resources are used and more pollution is created.',
          list: [
            'Children can help reduce energy waste through simple daily actions. Turning off lights when leaving a room is one of the easiest ways to save electricity. Switching off fans, televisions, and other devices when they are not in use also helps conserve energy.',
            'Using natural sunlight during the day instead of turning on lights can save electricity. Unplugging chargers and electronic devices when they are not needed also prevents unnecessary energy use.',
            'Saving energy helps reduce pollution and protects natural resources. By developing energy-saving habits, children can contribute to a cleaner and more sustainable environment.',
          ],
        },
        {
          heading: '6. Small Actions Make a Big Difference',
          text: 'Every small action counts when it comes to protecting the environment. Turning off lights, finishing meals, carrying reusable items, and recycling properly are simple steps that anyone can take.',
          list: [
            'Children often influence their families and friends through their actions. When young people practice thoughtful consumption, they inspire others to adopt similar habits.',
            'Schools and communities can also support waste reduction by organizing recycling programs, clean-up drives, and awareness activities. These efforts encourage everyone to work together to care for the environment.',
            'By making thoughtful choices every day, children can help create a cleaner and healthier planet.',
          ],
        },
        {
          heading: 'Conclusion',
          text: 'Thoughtful consumption and waste reduction are important skills that help protect our planet. When people learn to use resources wisely and reduce waste, they help ensure that nature remains healthy for future generations.',
          list: [
            'Children can make a difference through simple daily actions such as finishing food, reducing plastic use, saving energy, reusing items, and recycling waste. These habits may seem small, but together they create a powerful positive impact.',
            'By working together and making thoughtful choices, we can build a cleaner, greener, and more sustainable world for everyone.',
          ],
        },
      ],
    },
  },
  32: {
    document: {
      title: 'APPRECIATION OF BIODIVERSITY',
      sections: [
        {
          heading: 'Introduction: Why Biodiversity Matters',
          text: 'Biodiversity means the variety of living things on Earth. This includes plants, animals, insects, birds, and tiny organisms that we cannot see easily. All these living things exist together in nature and form ecosystems such as forests, rivers, farms, grasslands, and oceans.',
          list: [
            'Biodiversity is very important for our daily lives, especially for the food we eat. Different plants and animals provide us with fruits, vegetables, grains, nuts, and many other foods. Healthy ecosystems help produce nutritious and diverse foods that support our health.',
            'In the past, people grew and ate many different kinds of crops and local foods. Today, however, farming often focuses on only a few crops such as wheat, rice, and maize. As a result, many traditional crops and food varieties are disappearing. Learning about biodiversity helps us understand why it is important to protect nature and maintain a wide variety of foods.',
          ],
        },
        {
          heading: '1. Understanding Biodiversity',
          text: 'Biodiversity refers to the wide variety of living organisms on Earth. It includes different species of plants, animals, insects, and microorganisms, as well as the ecosystems where they live.',
          list: [
            'Scientists often talk about biodiversity at three levels.',
            'Species diversity means the variety of different plants and animals.',
            'Genetic diversity refers to differences within a species, such as different varieties of crops.',
            'Ecosystem diversity includes different environments like forests, rivers, oceans, farms, and grasslands.',
            'Each living organism plays an important role in keeping ecosystems balanced. For example, plants produce oxygen and food, insects help pollinate flowers, and microorganisms help break down waste in the soil. When many different species live together, ecosystems become stronger and more stable.',
            'We can observe biodiversity in many places around us\u2014gardens, farms, parks, forests, and even cities.',
          ],
        },
        {
          heading: '2. Biodiversity, Food Diversity, and Gut Health',
          text: 'Biodiversity is closely connected to the diversity of foods we eat. Different plants provide different nutrients that our bodies need to stay healthy. Fruits, vegetables, grains, legumes, nuts, and seeds all provide important vitamins, minerals, fiber, and other nutrients.',
          list: [
            'Eating a wide variety of foods also supports the tiny living organisms that live inside our digestive system. These organisms are called the gut microbiome. The gut microbiome includes many types of helpful bacteria and microorganisms that help our bodies digest food, absorb nutrients, and maintain good health.',
            'Just like ecosystems in nature, our gut also needs diversity to stay healthy. When we eat many different plant foods, we feed different kinds of helpful microbes in our gut. This creates a balanced and healthy microbiome that supports digestion, strengthens the immune system, and helps protect the body from disease.',
            'However, when diets become less diverse and rely mostly on a few staple foods or processed foods, the diversity of microbes in our gut can decrease. This may affect digestion and overall health.',
            'In the past, people often ate many varieties of local foods that were grown in their region. Today, global agriculture depends heavily on only a few crops such as wheat, rice, and maize. As traditional crops disappear, both biodiversity in nature and diversity in our diets are reduced.',
            'Protecting biodiversity and encouraging people to eat a wide variety of foods helps support both environmental health and gut health. Diverse ecosystems help produce diverse foods, and diverse foods help maintain a healthy and diverse gut microbiome.',
            'Biodiversity is closely connected to the diversity of foods we eat. Different plants provide different nutrients that our bodies need to stay healthy. Fruits, vegetables, grains, legumes, nuts, and seeds all provide vitamins, minerals, and other important nutrients.',
            'In the past, farmers grew many varieties of crops that were adapted to their local environment. These crops helped provide a wide variety of foods for people.',
            'Today, much of the world\u2019s food production depends on only a few crops. As farming becomes more uniform, many traditional crops are disappearing. This reduces both biodiversity and the variety of nutrients in our diets.',
            'Protecting biodiversity helps ensure that people can continue to enjoy many different types of healthy foods.',
          ],
        },
        {
          heading: '3. The Role of Pollinators in Food Production',
          text: 'Many plants that produce fruits, vegetables, nuts, and seeds depend on pollination. Pollination happens when pollen is transferred from one flower to another, allowing plants to produce fruits and seeds.',
          list: [
            'Insects such as bees, butterflies, and beetles are important pollinators. Birds and some small animals can also help with pollination. These pollinators play a vital role in growing many of the foods we eat every day.',
            'However, pollinator populations are declining in many places due to habitat loss, pollution, and the use of harmful chemicals. When pollinators decline, the production of many fruits and vegetables can also decrease.',
            'Protecting pollinators is therefore essential for maintaining biodiversity and ensuring that we continue to have a variety of foods.',
          ],
        },
        {
          heading: '4. Biodiversity and Human Well-Being',
          text: 'Biodiversity supports many aspects of human life and well-being. Diverse ecosystems provide food, clean water, medicines, and other resources that people depend on.',
          list: [
            'Many medicines come from plants that grow in forests and other natural environments. Natural areas such as parks, forests, and rivers also provide places where people can relax and enjoy nature, which supports mental well-being.',
            'Biodiversity also supports many economic activities such as agriculture, fisheries, and tourism. When ecosystems remain healthy and balanced, they continue to support communities and livelihoods.',
          ],
        },
        {
          heading: '5. Threats to Biodiversity',
          text: 'Although biodiversity is very important, many human activities are causing it to decline. Deforestation, pollution, climate change, and intensive farming can damage habitats and reduce the number of species in an area.',
          list: [
            'Plastic waste and pollution can harm animals and plants. Climate change can alter ecosystems and make it difficult for some species to survive. When natural habitats are destroyed, many plants and animals lose the places where they live.',
            'The loss of biodiversity can also affect food production. When certain insects, plants, or soil organisms disappear, important processes such as pollination and soil fertility can be affected.',
          ],
        },
        {
          heading: '6. Protecting and Appreciating Biodiversity',
          text: 'Protecting biodiversity helps maintain healthy ecosystems and diverse food systems. Farmers, communities, and individuals can all play a role in conserving biodiversity.',
          list: [
            'Some ways to protect biodiversity include:',
            'growing different varieties of crops',
            'protecting natural habitats and forests',
            'reducing pollution and waste',
            'supporting local and traditional foods',
            'protecting pollinators such as bees and butterflies',
            'Young people can also learn to appreciate biodiversity by observing nature around them. School gardens, parks, farms, and natural areas are good places to see different plants, insects, and animals.',
            'When students learn about biodiversity and understand its importance, they are more likely to care for nature and protect it.',
          ],
        },
        {
          heading: 'Conclusion: Living in Harmony with Nature',
          text: 'Biodiversity is essential for healthy ecosystems, diverse food systems, and human well-being. It supports the food we eat, the air we breathe, and the natural environments we enjoy.',
          list: [
            'By understanding biodiversity and appreciating the variety of life around us, people can make choices that help protect nature. Supporting diverse agriculture, protecting pollinators, and caring for natural habitats all help maintain biodiversity.',
            'When we live in harmony with nature, we help ensure that future generations will continue to enjoy a healthy planet and a wide variety of nutritious foods.',
          ],
        },
      ],
    },
  },
  33: {
    document: {
      title: 'INTERCONNECTED ECOSYSTEMS AWARENESS',
      sections: [
        {
          heading: 'PEOPLE, PLANET, AND HEALTH',
        },
        {
          heading: 'Introduction',
          text: 'The natural world is made up of many ecosystems that work together to support life on Earth. Forests, rivers, oceans, farmland, grasslands, and even cities are part of larger environmental systems that interact with one another. These ecosystems provide the resources and conditions needed for people, animals, and plants to survive and thrive.',
          list: [
            'Human well-being depends on healthy ecosystems. The food we eat, the water we drink, the air we breathe, and the climate that supports agriculture all come from natural systems. When ecosystems remain balanced and healthy, they support both environmental stability and human health.',
            'Understanding how ecosystems are connected helps students see that caring for nature is also a way of caring for people. When we protect ecosystems, we support both the planet and human well-being.',
          ],
        },
        {
          heading: '1. Ecosystems and the Benefits They Provide',
          text: 'Ecosystems provide many important benefits that support life and human well-being. These benefits are often called ecosystem services. Natural systems help regulate climate, filter water, maintain fertile soil, and support food production.',
          list: [
            'For example, forests help improve air quality and influence rainfall patterns. Wetlands help clean water and reduce flooding. Rivers and oceans provide food and support many livelihoods. These natural processes work continuously to support life on Earth.',
            'Many of these services happen quietly in the background, and people may not always notice them. Yet without healthy ecosystems, it would be difficult to grow food, maintain water supplies, or keep the environment stable.',
            'Recognising the value of ecosystems helps students understand why protecting natural environments is important for both environmental sustainability and human health.',
          ],
        },
        {
          heading: '2. Connections Between Ecosystems and Human Health',
          text: 'Human health is closely connected to the condition of ecosystems. Clean water helps prevent disease, fertile soil supports nutritious food production, and healthy environments contribute to physical and mental well-being.',
          list: [
            'Natural areas such as forests, parks, and green spaces also provide places where people can relax, exercise, and connect with nature. These environments help reduce stress and support mental health.',
            'When ecosystems become polluted or degraded, the effects can influence human health. Contaminated water can spread disease, polluted air can affect breathing, and damaged soils can reduce the quality of food production.',
            'Understanding these connections helps students realise that protecting ecosystems also helps protect human health.',
          ],
        },
        {
          heading: '3. Sustainable Food Systems and Ecosystem Balance',
          text: 'Food systems depend strongly on healthy ecosystems. Farmers rely on fertile soil, reliable water sources, sunlight, and stable climate conditions to grow crops and raise livestock.',
          list: [
            'Sustainable food systems aim to produce food while protecting natural resources. Practices such as conserving soil, managing water carefully, reducing food waste, and supporting responsible farming help maintain ecosystem balance.',
            'When farming practices damage ecosystems, soil fertility can decline and water resources may become polluted. This can affect food production and make agriculture less sustainable over time.',
            'By supporting sustainable food systems, communities can ensure that food production remains productive while protecting the ecosystems that make it possible.',
          ],
        },
        {
          heading: '4. Human Activities and Ecosystem Challenges',
          text: 'Human activities have changed many ecosystems across the world. Urban growth, industrial activities, transportation, and intensive agriculture can place pressure on natural systems.',
          list: [
            'Activities such as pollution, deforestation, and excessive use of chemicals can damage ecosystems and reduce their ability to provide important services. For example, polluted water can harm aquatic life and reduce safe drinking water supplies.',
            'When ecosystems are weakened, the effects can spread through communities that depend on natural resources for food, water, and livelihoods.',
            'Understanding these challenges helps students recognise why responsible resource use and sustainable practices are important for protecting ecosystems.',
          ],
        },
        {
          heading: '5. Climate Change and Ecosystem Resilience',
          text: 'Climate change is affecting ecosystems around the world. Rising temperatures, changing rainfall patterns, and extreme weather events such as floods, droughts, and storms can influence forests, rivers, agriculture, and other natural systems.',
          list: [
            'These changes can affect plant growth, water availability, and food production. Some ecosystems may struggle to adapt to rapid environmental changes, which can also affect communities that depend on these systems.',
            'At the same time, healthy ecosystems help reduce climate risks. Forests absorb carbon from the atmosphere, wetlands reduce the impact of floods, and healthy soils store water and carbon. These natural systems help regulate the climate and support environmental stability.',
            'Protecting and restoring ecosystems can therefore help reduce climate risks and strengthen the resilience of both nature and human communities.',
          ],
        },
        {
          heading: '6. Building Awareness for Sustainable Futures',
          text: 'Everyone can help protect ecosystems through everyday actions. Conserving water, reducing waste, protecting natural habitats, and supporting sustainable food choices all contribute to environmental health.',
          list: [
            'Schools, families, and communities can work together to promote environmental awareness and responsible lifestyles. Small actions, when practiced by many people, can make a significant difference in protecting ecosystems.',
            'Education plays an important role in helping students understand how ecosystems support life and how human actions influence environmental systems.',
            'By developing ecosystem awareness, students can learn to make choices that support sustainability and protect the planet.',
          ],
        },
        {
          heading: 'Conclusion',
          text: 'Ecosystems connect people, nature, and health in many important ways. They provide the food we eat, the water we drink, and the natural systems that regulate climate and sustain life.',
          list: [
            'Climate change and environmental pressures remind us that ecosystems must be protected and managed responsibly. Healthy ecosystems help reduce environmental risks and support sustainable food systems and human well-being.',
            'By understanding these connections and making responsible choices, individuals and communities can help protect ecosystems and build a healthier, more sustainable future for both people and the planet.',
          ],
        },
      ],
    },
  },
  34: {
    document: {
      title: 'NURTURE HEALTHY LIVING FOR PERSONAL AND PLANETARY WELL-BEING',
      sections: [
        {
          heading: 'How Sustainable Habits Support Health',
          text: 'Health is not only the absence of illness\u2014it is the result of daily choices that support the body\u2019s ability to function, adapt, and recover. What we eat, how we move, how we rest, how we manage stress, and how we interact with our environment all influence our well-being.',
          list: [
            'Healthy living is closely connected to sustainability. The foods we eat, the environments we live in, and the lifestyle choices we make influence both personal health and the health of ecosystems. Clean air, safe water, nutritious food, and healthy surroundings are essential for both people and the planet.',
            'Earlier insights explored how nature sustains life, how food systems depend on soil and biodiversity, and how food choices and cooking practices influence diets. These ideas come together in sustainable healthy living. When individuals adopt balanced habits that respect both the body and the environment, they contribute to healthier communities and more sustainable societies.',
            'This insight explores how balanced lifestyles, strong immunity, hygiene, digestive health, and responsible habits support long-term well-being while also promoting environmental sustainability.',
          ],
        },
        {
          heading: '1. Health as a Balance of Body, Mind, and Environment',
          text: 'Health involves several interconnected dimensions that influence overall well-being.',
          list: [
            'Physical health refers to the body\u2019s ability to function effectively. Nutritious foods, regular physical activity, sufficient sleep, and good hygiene help maintain strength and resilience. Access to clean air, safe water, and nutritious food from sustainable systems also supports physical health.',
            'Mental health relates to how we think, learn, and respond to challenges. Supportive social environments, meaningful activities, and balanced routines contribute to mental well-being. Spending time in natural environments such as parks or green spaces can also support mental health.',
            'Emotional health involves recognising and managing feelings such as joy, stress, frustration, or sadness. Developing emotional awareness helps individuals build positive relationships and cope with life\u2019s challenges.',
            'These dimensions of health are interconnected. When people maintain balanced lifestyles and healthy environments, they support both personal well-being and community resilience.',
          ],
        },
        {
          heading: '2. Immunity: Strengthening the Body Naturally',
          text: 'The human body has natural systems that protect it from disease. The immune system identifies harmful microorganisms and works to eliminate them before they cause serious illness.',
          list: [
            'Healthy lifestyles strengthen the immune system. Balanced diets rich in fruits, vegetables, whole grains, pulses, and other whole foods provide nutrients that support immune function. Regular physical activity, adequate rest, and stress management also contribute to strong immunity.',
            'Environmental conditions also influence immune health. Clean air, safe water, hygienic surroundings, and access to nutritious food help reduce exposure to harmful pathogens.',
            'The immune system also develops through experience. As the body encounters microbes in the environment, it learns to recognise and respond to them more effectively. Over time, this process helps the body distinguish between harmless substances and harmful pathogens.',
            'Maintaining strong immunity supports both individual health and community well-being.',
          ],
        },
        {
          heading: '3. Preventing Infectious Diseases Through Healthy Environments',
          text: 'Some diseases are caused by infectious agents such as bacteria, viruses, fungi, and parasites. These organisms can spread through contaminated water, unsafe food, poor sanitation, insect vectors, or close contact between individuals.',
          list: [
            'Preventing infectious diseases requires both personal hygiene and healthy environments. Simple practices such as regular handwashing, safe food preparation, and maintaining clean surroundings can significantly reduce the spread of infections.',
            'Access to clean water, proper sanitation systems, and effective waste management are also essential for preventing disease. Communities that maintain clean environments are better able to protect public health.',
            'Vaccination is another important method of disease prevention. Vaccines help the immune system recognise harmful pathogens and respond quickly when exposure occurs. Immunization programs protect individuals and also help protect communities through collective immunity.',
          ],
        },
        {
          heading: '4. Gut Health and the Importance of Balanced Diets',
          text: 'The digestive system plays a central role in health and well-being. It breaks down food, absorbs nutrients, and supports immune function.',
          list: [
            'The digestive tract also contains a diverse community of beneficial microorganisms known as the gut microbiome. These microorganisms help digest food, produce nutrients, and protect against harmful microbes.',
            'Diet strongly influences digestive health. Diets rich in fruits, vegetables, whole grains, pulses, and fermented foods support a healthy microbiome and improve digestion.',
            'In contrast, diets high in highly processed foods, excessive sugar, unhealthy fats, and low fibre may disrupt gut health. Maintaining balanced eating habits supports both digestive health and overall well-being.',
          ],
        },
        {
          heading: '5. Lifestyle Diseases and Sustainable Living',
          text: 'Many modern health challenges develop gradually over time due to long-term lifestyle patterns. These conditions, known as non-communicable diseases, include diabetes, heart disease, obesity, and hypertension.',
          list: [
            'Unhealthy diets, physical inactivity, excessive stress, and lack of sleep increase the risk of developing these conditions. Highly processed foods and sedentary lifestyles have become more common in many societies.',
            'Adopting sustainable lifestyles can help reduce these risks. Eating balanced diets that include diverse, minimally processed foods, staying physically active, and maintaining healthy daily routines support long-term health.',
            'Communities that promote active living, nutritious foods, and healthy environments help reduce the risk of lifestyle diseases and improve overall well-being.',
          ],
        },
        {
          heading: '6. Responsible Choices for Health and Well-being',
          text: 'Protecting health also involves avoiding behaviours that harm the body and the environment. Tobacco, alcohol, and drug use can damage many organs and increase the risk of serious diseases.',
          list: [
            'Excessive consumption of highly processed foods high in sugar, salt, and unhealthy fats can also affect long-term health. Developing balanced attitudes toward food and body image helps support healthy growth and well-being.',
            'Safety practices also contribute to health. Following road safety rules, using protective equipment during sports, and maintaining safe surroundings help reduce the risk of injuries.',
            'Responsible lifestyle choices contribute not only to personal well-being but also to the well-being of families, communities, and society as a whole.',
          ],
        },
        {
          heading: 'Key Message',
          list: [
            'Healthy living is built through everyday sustainable habits. Balanced nutrition, strong immunity, good hygiene, healthy digestion, physical activity, and responsible lifestyle choices support long-term well-being.',
            'When individuals understand how their daily choices influence both their health and the environment, they can adopt habits that promote sustainable living, resilient communities, and a healthier planet for future generations.',
          ],
        },
      ],
    },
  },
};

export default KNOW_MORE_DATA;
