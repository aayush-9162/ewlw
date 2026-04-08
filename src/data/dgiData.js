// Dietary Guidelines for Indians 2024 — mapped to habits (keyed by habit index 0-based)
// Full PDF: /DGI_2024.pdf

const DGI_DATA = {
  1: {
    guidelines: [
      {
        guidelineNum: 14,
        title: 'Drink Adequate Quantity of Water',
        description: 'Water is essential for life and plays a vital role in maintaining normal body functions. It helps regulate body temperature, supports digestion, transports nutrients, and removes waste products from the body. Drinking sufficient water every day is important for maintaining hydration and overall health.',
        details: [
          'Individuals should drink water regularly during the day rather than waiting until they feel thirsty.',
          'The need for water may increase during hot weather, physical activity, illness, or pregnancy and lactation.',
          'It is advisable to prefer plain drinking water instead of sugary beverages or drinks with added sugars.',
          'Regular consumption of water, along with a balanced diet and healthy lifestyle, helps maintain hydration and contributes to overall health and well-being.',
        ],
      },
    ],
  },
  3: {
    guidelines: [
      {
        guidelineNum: 10,
        title: 'Be Physically Active and Exercise Regularly to Maintain Good Health',
        description: 'Regular physical activity is an important part of a healthy lifestyle and plays a key role in maintaining overall health and well-being. Engaging in regular physical activity helps improve physical fitness and supports better health outcomes.',
        details: [
          'Physical activities such as walking, cycling, running, playing sports, or participating in other forms of exercise help maintain healthy body weight, improve cardiovascular fitness, and strengthen muscles and bones.',
          'Physical activity contributes to better metabolism and helps regulate blood sugar, blood pressure, and cholesterol levels.',
          'It also supports mental well-being by reducing stress, improving mood, and promoting better sleep.',
          'Combining balanced dietary habits with regular physical activity is essential for maintaining optimal health.',
        ],
      },
    ],
  },
  8: {
    guidelines: [
      {
        guidelineNum: 8,
        title: 'Obtain Good Quality Proteins and Essential Amino Acids (EAA) Through Appropriate Combination of Foods',
        description: 'Proteins are essential nutrients required for growth, tissue repair, and the proper functioning of the body. Adequate intake of good quality proteins through regular foods is necessary for maintaining health and supporting growth and development.',
        details: [
          'Foods such as pulses, beans, lentils, milk and milk products, eggs, fish, and lean meat are good sources of proteins.',
          'In plant-based diets, combining cereals with pulses, such as rice with lentils or wheat with chickpeas, helps improve the overall quality of protein intake.',
          'Excessive dependence on protein supplements for muscle building is generally unnecessary for most individuals.',
          'A balanced diet that includes a variety of natural protein-rich foods, along with regular physical activity, can adequately support muscle maintenance, growth, and overall health.',
        ],
      },
    ],
  },
  9: {
    guidelines: [
      {
        guidelineNum: 7,
        title: 'Use Oils/Fats in Moderation; Choose a Variety of Oilseeds, Nuts, Nutricereals and Legumes',
        description: 'Fats are an important part of the diet as they provide energy and help the body absorb fat-soluble vitamins such as vitamins A, D, E, and K. However, excessive intake of fats can increase the risk of obesity and other diet-related diseases.',
        details: [
          'Dietary fats are obtained from both visible sources (cooking oils, butter, ghee) and invisible sources in foods like nuts, oilseeds, cereals, pulses, milk, eggs, and meat.',
          'Including a variety of oilseeds, nuts, legumes, and nutricereals in the daily diet helps provide healthy fats and essential fatty acids.',
          'Foods such as groundnuts, sesame seeds, flax seeds, almonds, and walnuts are rich sources of beneficial fats.',
          'Limiting excessive fat intake and choosing healthier sources of fats can reduce the risk of chronic diseases.',
        ],
      },
    ],
  },
  11: {
    guidelines: [
      {
        guidelineNum: 6,
        title: 'Eat Plenty of Vegetables and Legumes',
        description: 'Vegetables and legumes are important components of a healthy diet and provide many essential nutrients required for maintaining good health. They are rich sources of vitamins, minerals, dietary fibre, and protective compounds.',
        details: [
          'Green leafy vegetables provide essential vitamins such as vitamin A, vitamin C, and folate, along with minerals like iron and calcium.',
          'Legumes such as lentils, chickpeas, beans, and peas are good sources of plant-based proteins, dietary fibre, and several micronutrients.',
          'Including different types of vegetables and a variety of legumes improves nutrient intake and dietary diversity.',
          'Regular consumption of vegetables and legumes can help reduce the risk of chronic diseases such as obesity, diabetes, heart disease, and certain cancers.',
        ],
      },
    ],
  },
  13: {
    guidelines: [
      {
        guidelineNum: 11,
        title: 'Restrict Salt Intake',
        description: 'Salt is an essential component of the diet as it contains sodium, required for maintaining fluid balance, nerve function, and muscle activity. However, excessive consumption of salt can have harmful health effects.',
        details: [
          'High consumption of salt is linked to elevated blood pressure, which increases the risk of hypertension, heart disease, and stroke.',
          'Reducing salt intake can be achieved by limiting the use of salt during cooking and avoiding the addition of extra salt at the table.',
          'It is also advisable to reduce the consumption of processed foods that contain high amounts of hidden salt.',
          'Using herbs, spices, and natural flavorings can enhance the taste of food without increasing sodium intake.',
        ],
      },
    ],
  },
  16: {
    guidelines: [
      {
        guidelineNum: 12,
        title: 'Consume Safe and Clean Foods',
        description: 'Food safety and hygiene are essential for protecting health and preventing food-borne illnesses. Ensuring that food is prepared, stored, and consumed in a safe and hygienic manner helps reduce the risk of disease.',
        details: [
          'Proper hygiene practices such as washing hands before handling food, cleaning fruits and vegetables thoroughly, and maintaining cleanliness in the kitchen are essential.',
          'Safe food preparation practices include cooking food thoroughly, storing cooked and raw foods separately, and keeping perishable foods under proper storage conditions.',
          'Using clean water for cooking and drinking and protecting food from contamination by insects, pests, and harmful microorganisms is important.',
          'Adopting safe food handling and hygiene practices at every stage helps prevent food-borne diseases.',
        ],
      },
    ],
  },
  17: {
    guidelines: [
      {
        guidelineNum: 17,
        title: 'Read Food Labels to Make Informed and Healthy Food Choices',
        description: 'Today, many food items are available in pre-packaged form, making it important for consumers to know what the product contains. Food labels help people assess the nutritional quality, ingredients, and shelf life of foods.',
        details: [
          'Food labels provide essential information such as ingredients, nutritional values, manufacturing and expiry dates, storage instructions, and allergen details.',
          'Ingredients are listed in descending order based on their quantity in the product.',
          'Nutrition facts, often given per serving or per 100 g/100 ml, help consumers understand the amount of calories, fats, sugars, and other nutrients.',
          'Consumers should always verify claims by reading the ingredient list and nutrition information.',
        ],
      },
      {
        guidelineNum: 15,
        title: 'Minimize the Consumption of High Fat, Sugar and Salt (HFSS) and Ultra-Processed Foods (UPFs)',
        description: 'In recent years, there has been a rapid increase in the availability and consumption of processed and ready-to-eat foods. Many of these foods contain high amounts of fats, sugars, and salt, which may negatively affect health.',
        details: [
          'Ultra-processed foods typically undergo multiple stages of industrial processing and often contain additives such as preservatives, flavor enhancers, artificial colours, and sweeteners.',
          'Examples include packaged snacks, sugary beverages, instant foods, confectionery items, and many ready-to-eat or fast foods.',
          'Frequent intake of foods high in fat, sugar, and salt can influence taste preferences, making individuals more likely to prefer unhealthy food options.',
          'Limiting these foods and choosing fresh, minimally processed foods can help maintain better nutritional balance.',
        ],
      },
    ],
  },
  19: {
    guidelines: [
      {
        guidelineNum: 1,
        title: 'Eat a Variety of Foods to Ensure a Balanced Diet',
        description: 'A healthy diet requires the intake of different types of foods that together provide all the nutrients needed for proper growth, development, and maintenance of health. Consuming a variety of foods from different food groups is necessary to achieve a balanced diet.',
        details: [
          'A balanced diet should include foods from multiple food groups such as cereals and millets, pulses and legumes, milk and milk products, vegetables, fruits, nuts, seeds, and animal foods where applicable.',
          'Variety within each food group is also important because different foods contain different nutrients.',
          'Including different types of cereals, millets, pulses, vegetables, and fruits in daily meals improves nutrient intake and dietary diversity.',
          'Following a balanced and diverse diet helps support growth and development, improves immunity, and reduces the risk of diet-related diseases.',
        ],
      },
      {
        guidelineNum: 5,
        title: 'Ensure Adequate and Appropriate Diets for Children and Adolescents Both in Health and Sickness',
        description: 'Proper nutrition during childhood and adolescence is essential for growth, development, and overall health. Providing adequate and balanced diets during these periods helps support optimal development.',
        details: [
          'Diets should include a variety of foods from different food groups providing essential nutrients such as proteins, vitamins, minerals, and energy required for growth.',
          'During illness, children often lose appetite — it is important to continue feeding with easily digestible, nutrient-rich foods and provide frequent meals.',
          'After recovery, additional nutritious foods may be required to help regain lost weight and restore strength.',
          'Healthy dietary habits established during childhood and adolescence can promote better health throughout life.',
        ],
      },
    ],
  },
  20: {
    guidelines: [
      {
        guidelineNum: 13,
        title: 'Adopt Appropriate Pre-Cooking and Cooking Methods',
        description: 'The way food is prepared and cooked plays an important role in preserving its nutritional value and ensuring food safety. Adopting appropriate pre-cooking and cooking methods is important for maintaining the quality and health benefits of food.',
        details: [
          'Pre-cooking practices such as washing vegetables thoroughly, cutting them just before cooking, and avoiding excessive peeling can help reduce nutrient loss.',
          'Soaking pulses and legumes before cooking can improve their digestibility and nutrient availability.',
          'Healthy cooking methods such as steaming, boiling, pressure cooking, and sautéing with minimal oil are recommended.',
          'Overcooking food should be avoided because it may destroy heat-sensitive nutrients such as certain vitamins.',
        ],
      },
    ],
  },
  34: {
    guidelines: [
      {
        guidelineNum: 9,
        title: 'Adopt a Healthy Lifestyle to Prevent Abdominal Obesity, Overweight and Overall Obesity',
        description: 'Maintaining a healthy lifestyle is essential for preventing overweight and obesity, which are major risk factors for many non-communicable diseases. Adopting healthy lifestyle practices can help maintain a healthy body weight.',
        details: [
          'Consuming a diet rich in vegetables, fruits, whole grains, pulses, nuts, and other nutrient-dense foods while limiting foods high in fat, sugar, and salt can help maintain energy balance.',
          'Regular physical activity such as walking, cycling, sports, or exercise helps burn excess calories, strengthens muscles, and improves cardiovascular health.',
          'Reducing sedentary behaviors such as prolonged sitting and screen time can further help in maintaining a healthy body weight.',
          'Adopting healthy lifestyle habits from an early age can help prevent obesity and reduce the risk of diseases such as diabetes, hypertension, and heart disease.',
        ],
      },
    ],
  },
};

export default DGI_DATA;
