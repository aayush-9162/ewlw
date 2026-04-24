// Video resources per habit (keyed by habit index 0-based)
// These appear in Teaching & Learning Resources > Video tab
const HABIT_VIDEOS = {
  0: [
    {
      title: 'Why Respecting Meal Times Matters',
      embedUrl: 'https://www.youtube.com/embed/RgiVKYYEl-s?si=1',
      description: 'Ryan Fernando, a leading Indian celebrity and sports nutritionist, shares a simple but powerful health tip. He explains why respecting meal times is important for maintaining good digestion, balanced energy, and overall well-being.',
    },
  ],
  1: [
    {
      title: 'How Much Water Should You Drink Daily?',
      embedUrl: 'https://www.youtube.com/embed/Knmv8JLikGM?si=1',
      description: 'Dr. Saurabh Sethi, a renowned gastroenterologist known for sharing digestive health and nutrition advice, explains that a simple rule for staying hydrated is to drink about eight glasses of water a day (around 2 litres), though the exact amount can vary depending on factors like physical activity, climate, and individual body needs.',
    },
    {
      title: 'Why Do We Drink Water? \u2013 The Dr. Binocs Show (6:09 m)',
      embedUrl: 'https://www.youtube.com/embed/31F0laJjyy8',
      description: 'This engaging video by The Dr. Binocs Show explains why drinking water is essential for our body and why we feel thirsty. It highlights how water helps regulate body temperature, aids digestion, and supports overall body functions. The video also explains that thirst is the body\u2019s natural signal to stay hydrated. It encourages regular water intake, understanding hydration needs, and valuing water as an important resource for health and well-being.',
    },
    ],
  2: [
    {
      title: 'Stop Brain Rot. Stop Scrolling by Dr Sid Warrier (8:04 m)',
      embedUrl: 'https://www.youtube.com/embed/uw7kllUlI_g?si=1',
      description: 'Dr. Siddharth Warrier, neuroscientist, discusses the problem of excessive screen time and \u201Cbrain rot.\u201D He explains how constant scrolling on social media can trap the brain in a dopamine loop, reducing focus and mental clarity. He highlights the importance of limiting screen time and using curiosity and creativity to keep the brain healthy and productive.',
    },
    {
      title: 'Spending Too Much Time On Your Phone \u2013 The Dr. Binocs Show',
      embedUrl: 'https://www.youtube.com/embed/4v_ybv_U-Dg',
      description: 'This insightful video explores the effects of excessive phone usage on our daily lives. It highlights how spending too much time on screens can reduce outdoor activities and lead to staying indoors for long periods, which may negatively impact both physical and mental health. The video encourages maintaining a healthy balance between screen time and active habits, promoting outdoor play, movement, and mindful use of digital devices for overall well-being.',
    },
    ],
  3: [
    {
      title: 'Importance of Exercising for kids | Kids Fitness | Fittr Kids (1:50 m)',
      embedUrl: 'https://www.youtube.com/embed/mnXTTQDAr9I',
      description: 'This educational video by Fittr Kids explains why regular exercise is important for children\u2019s physical and mental health. It shows that activities like sports, running, and active play help build strong muscles and bones, improve fitness, and boost mood and concentration.',
    },
  ],
  4: [
    {
      title: 'Why Do We Need Sleep? (3:32 m)',
      embedUrl: 'https://www.youtube.com/embed/_aAmaCeq9v4',
      description: 'This educational video explains why sleep is essential for the brain and body to function properly. It highlights that sleep helps the brain rest, process information, and improve concentration and problem-solving abilities for daily activities at school and home.',
    },
  ],
  5: [
    {
      title: 'Hygiene Habits for Kids - Compilation \u2013 Smile and Learn (11:03 m)',
      embedUrl: 'https://www.youtube.com/embed/l6XGE-Xuq3M',
      description: 'This educational video by Smile and Learn teaches children important personal hygiene habits such as proper handwashing, daily bathing, and brushing teeth regularly. It explains step-by-step practices that help remove germs and keep the body clean and healthy.',
    },
    {
      title: 'Cleanliness | Proper Hygiene For Kids | Science for Kids \u2013 Teacher Ira (7:17 m)',
      embedUrl: 'https://www.youtube.com/embed/4rxzW-OwMrs',
      description: 'This educational video by Teacher Ira teaches children the importance of cleanliness and proper hygiene in daily life. It explains simple habits such as washing hands, brushing teeth, bathing regularly, and keeping clothes clean to remove germs and stay healthy.',
    },
  ],
  6: [
    {
      title: 'How stress affects your brain \u2013 Madhumita Murgia (TED-Ed, 4:15 m)',
      embedUrl: 'https://www.youtube.com/embed/WuyPuH9ojCE?si=1',
      description: 'This video explains how stress affects the brain and why long-term stress can be harmful. It describes how stress triggers the release of the hormone cortisol, which prepares the body for \u201Cfight or flight.\u201D However, when stress becomes chronic, high cortisol levels can damage brain areas responsible for memory, learning, and decision-making.',
    },
  ],
  7: [
    {
      title: 'How do carbohydrates impact your health? \u2013 Richard J. Wood (TED-Ed, 5:10 m)',
      embedUrl: 'https://www.youtube.com/embed/wxzc_2c6GMg?si=1',
      description: 'This TED-Ed video explains the importance of choosing the right types of carbohydrates for good health. It highlights that while carbs provide the body with energy, eating too many refined or unhealthy carbs can lead to problems like insulin resistance and increase the risk of diseases such as type-2 diabetes and heart disease. The lesson encourages people to focus on healthier carbohydrates, such as whole grains and fibre-rich foods, for better long-term health.',
    },
  ],
  9: [
    {
      title: 'What is fat? \u2013 George Zaidan (TED-Ed, 4:21 m)',
      embedUrl: 'https://www.youtube.com/embed/QhUrc4BnPgg?si=1',
      description: 'This TED-Ed video explains that not all fats are harmful and that the type of fat consumed matters more than the total amount. It describes how fats are made of molecules called triglycerides and highlights the differences between saturated, unsaturated, and trans fats, showing how some fats can be beneficial for health while others should be limited.',
    },
  ],
  10: [
    {
      title: 'How the food you eat affects your gut \u2013 Shilpa Ravella (TED-Ed, 5:09 m)',
      embedUrl: 'https://www.youtube.com/embed/1sISguPDlhY?si=1',
      description: 'This TED-Ed video explains how the food we eat affects the bacteria living in our gut. It describes how trillions of microbes in the digestive system help break down food, produce nutrients, and support overall health. The video highlights that eating a balanced and fibre-rich diet helps maintain a healthy gut microbiome, which is important for digestion and well-being.',
    },
    {
      title: 'Is Your Gut Healthy? \u2013 The Dr. Binocs Show (5:40 m)',
      embedUrl: 'https://www.youtube.com/embed/4zLU2UE90jM',
      description: 'This informative video explains how our digestive health is closely linked to overall well-being. It highlights how everyday signs, like bowel habits and stool appearance, can give important clues about our diet and digestion. The video discusses how factors such as fiber intake, hydration, and digestion speed affect gut health. It also emphasizes that lasting changes in these patterns may indicate underlying health issues. It encourages paying attention to body signals, maintaining a balanced diet, and staying hydrated to support a healthy digestive system.',
    },
    ],
  11: [
    {
      title: 'Why Are Vitamins Important? \u2013 The Dr. Binocs Show (7:49 m)',
      embedUrl: 'https://www.youtube.com/embed/SmsCJpBuNrE',
      description: 'This informative video explains why vitamins are essential for our body and overall health. It highlights different types of vitamins and how each one supports important functions such as growth, immunity, energy production, and maintaining healthy skin and bones. The video also explains that our body needs vitamins in small amounts but regularly, and a balanced diet helps meet these needs. It encourages making healthy food choices to ensure proper intake of essential nutrients and support overall well-being.',
    },
    {
      title: 'Why Are Minerals Important? \u2013 The Dr. Binocs Show (5:44 m)',
      embedUrl: 'https://www.youtube.com/embed/uZousR_FfEE',
      description: 'This informative video explains what minerals are and why they are essential for our body. It highlights the different types of minerals and their important roles, such as supporting strong bones and teeth, maintaining fluid balance, and helping muscles and nerves function properly. The video also explains how the body uses minerals from the food we eat and emphasizes the importance of a balanced diet. It encourages making healthy food choices to ensure adequate intake of essential minerals for overall health and well-being.',
    },
    {
      title: 'Show Younger Children Why Eating Their Fruit and Veg Is Good for Them \u2013 Eat Happy Project (3:15 m)',
      embedUrl: 'https://www.youtube.com/embed/kteZneJm1EI',
      description: 'This educational video by the Eat Happy Project explains why fruits and vegetables are important for children\u2019s health. It shows that these foods contain essential vitamins, minerals, and fiber that help the body grow strong, stay healthy, and fight illness.',
    },
    {
      title: 'Why do we need to eat vegetables and fruits? (2:05 m)',
      embedUrl: 'https://www.youtube.com/embed/_EDZQ2mddZM',
      description: 'This educational video explains the importance of including both fruits and vegetables in daily meals. It highlights that these foods are rich in vitamins, minerals, and fiber, which help the body stay healthy, boost immunity, and provide energy.',
    },
  ],
  12: [
    {
      title: 'How sugar affects the brain \u2013 Nicole Avena (TED-Ed, 5:10 m)',
      embedUrl: 'https://www.youtube.com/embed/lEXBxijQREo?si=1',
      description: 'This TED-Ed video explains how sugar affects the brain and why people often crave sweet foods. It explains that consuming sugar activates the brain\u2019s reward system and releases dopamine, which can create cravings and encourage people to eat more sugary foods. The video highlights why sugar should be consumed in moderation for better health.',
    },
    {
      title: 'Is Sugar Bad For You? \u2013 The Dr. Binocs Show (5:43 m)',
      embedUrl: 'https://www.youtube.com/embed/NkY3KuahkqY',
      description: 'This informative video explains how sugar affects our body and health. It highlights different types of sugar, such as glucose and fructose, and how they are processed in the body. The video discusses the potential negative effects of consuming too much sugar, including impacts on the liver, heart, and overall energy levels. It also touches on how sugar can influence the brain through dopamine, affecting cravings. It encourages mindful consumption of sugar and making healthier food choices to support overall well-being.',
    },
    ],
  16: [
    {
      title: 'SafeConsume Food Safety \u2013 User Journey Animation (2:30 m)',
      embedUrl: 'https://www.youtube.com/embed/nf4R6XHCU4Q',
      description: 'This educational video from the SafeConsume food safety project explains how food can become contaminated at different stages\u2014from buying and storing food to preparing, cooking, and handling leftovers. It highlights the risks of cross-contamination and the \u201cchain of infection,\u201d showing key points where good hygiene practices are necessary.',
    },
  ],
  17: [
    {
      title: 'How to read labels \u2013 GunjanShouts (7:08 m)',
      embedUrl: 'https://www.youtube.com/embed/n0D03GBgMB8?si=1',
      description: 'This video explains how packaged foods that appear healthy can actually contain high amounts of sugar, salt, and unhealthy ingredients. It encourages viewers to read nutrition labels carefully and check the ingredient list instead of trusting marketing claims on the front of the package. It highlights that understanding food labels helps people identify hidden sugars and make healthier food choices.',
    },
  ],
  18: [
    {
      title: 'Farmers\u2019 Markets for Kids \u2013 Farmers\u2019 Markets Help the Environment (5:59 m)',
      embedUrl: 'https://www.youtube.com/embed/f86BI7HcqBQ',
      description: 'This educational video explains how farmers\u2019 markets help people buy fresh fruits and vegetables directly from local farmers. It shows that these markets provide healthier, seasonal foods while also supporting local farmers and reducing the distance food travels from farm to table. The video also highlights how farmers\u2019 markets help protect the environment and local communities by promoting fresh, locally grown produce.',
    },
  ],
  19: [
    {
      title: 'Balanced Diet || Best Food for Health \u2013 Learning Junction (3:35 m)',
      embedUrl: 'https://www.youtube.com/embed/9VtxCxtsMAI',
      level: 1,
      description: 'This educational video by Learning Junction explains the concept of a balanced diet and its importance for maintaining good health. It highlights that a healthy diet should include a proper mix of carbohydrates, proteins, fats, vitamins, and minerals to provide energy, support growth, and protect the body from diseases.',
    },
    {
      title: 'What Is a Balanced Diet? (2:49 m)',
      embedUrl: 'https://www.youtube.com/embed/Ws7qOur3Tr0',
      level: 2,
      description: 'This educational video explains that a balanced diet includes the right amounts of carbohydrates, proteins, fats, vitamins, minerals, fiber, and water needed for the body to function properly. It highlights that eating a variety of foods from different food groups helps maintain energy, support growth, and keep the body healthy.',
    },
  ],
  30: [
    {
      title: 'Make the Most of Compost! (5:19 m)',
      embedUrl: 'https://www.youtube.com/embed/Q5s4n9r-JGU',
      description: 'This video explains how food scraps and plant waste can be turned into compost, a natural fertilizer that helps plants grow. It shows that composting reduces food waste and supports a healthier environment by returning nutrients to the soil.',
    },
    {
      title: 'What Is Seed Germination? \u2013 The Dr. Binocs Show (6:27 m)',
      embedUrl: 'https://www.youtube.com/embed/JSe_VUMymjo',
      level: 1,
      description: 'This informative video explains what seed germination is and how a seed grows into a plant. It highlights the stages of germination and the conditions required, such as water, air, and suitable temperature. The video shows how the seed begins to sprout and develop roots and shoots, leading to plant growth. It encourages understanding plant life cycles and the importance of proper care for healthy plant development.',
    },
    {
      title: 'What Is Soil Erosion & Conservation? \u2013 The Dr. Binocs Show (5:31 m)',
      embedUrl: 'https://www.youtube.com/embed/uo_ntewAemw',
      level: 2,
      description: 'This informative video explains what soil erosion is and why it is a serious environmental concern. It highlights how natural forces like wind and water, as well as human activities, can lead to the loss of fertile topsoil. The video also discusses methods of soil conservation, such as afforestation and proper land management, to protect and preserve soil. It encourages responsible environmental practices to maintain soil health and support sustainable living.',
    },
    {
      title: 'How To Grow Plants Without Soil? \u2013 The Dr. Binocs Show (6:03 m)',
      embedUrl: 'https://www.youtube.com/embed/LV2jIkOwYl8',
      level: 2,
      description: 'This fascinating video explains how plants can grow without soil using a method called hydroponics. It highlights how plants receive essential nutrients directly from water solutions instead of soil. The video explores how this technique supports plant growth, saves space, and uses less water compared to traditional farming. It encourages curiosity about innovative and sustainable ways of growing plants and understanding modern agricultural practices.',
    },
  ],
  31: [
    {
      title: 'How Recycling Works! | How to Help Our Earth \u2013 SciShow Kids (4:09 m)',
      embedUrl: 'https://www.youtube.com/embed/VlRVPum9cp4',
      description: 'This video explains how recycling turns used materials like paper, plastic, glass, and metal into new products, helping reduce waste and protect the environment. It encourages simple recycling habits to keep the Earth clean and conserve natural resources.',
    },
    {
      title: 'Types of Waste \u2013 Waste Management Methods \u2013 Learning Junction (4:01 m)',
      embedUrl: 'https://www.youtube.com/embed/H--LWj2KpoM',
      description: 'This educational video explains the different types of waste such as biodegradable and non-biodegradable waste and how they should be managed properly. It highlights the importance of reducing, reusing, and recycling waste to protect the environment and keep our surroundings clean.',
    },
  ],
  33: [
    {
      title: 'Ecosystem \u2013 The Dr. Binocs Show (3:58 m)',
      embedUrl: 'https://www.youtube.com/embed/sKJoXdrOT70',
      level: 1,
      description: 'This engaging video explains what an ecosystem is and how living and non-living things interact with each other. It highlights how every place\u2014big or small\u2014can function as its own ecosystem, where plants, animals, humans, and the environment are all connected. The video explores the components of an ecosystem and how they depend on each other for survival. It encourages curiosity about nature and understanding our role in maintaining balance within ecosystems.',
    },
    {
      title: 'Eco-Friendly Habits | What Is Sustainable Living? \u2013 The Dr. Binocs Show (5:54 m)',
      embedUrl: 'https://www.youtube.com/embed/PBkmOhOk8nk',
      level: 1,
      description: 'This informative video explains what sustainable living means and why eco-friendly habits are important for protecting our planet. It highlights how daily actions like reducing waste, reusing materials, saving water, and recycling can help conserve natural resources. The video also discusses environmental challenges such as climate change, loss of biodiversity, and rising temperatures. It encourages adopting simple, responsible habits to reduce environmental impact and contribute to a healthier, more sustainable future.',
    },
  ],
};

export default HABIT_VIDEOS;
