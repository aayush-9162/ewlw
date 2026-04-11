// Quiz data per habit (keyed by habit index 0-based)
const HABIT_QUIZZES = {
  0: {
    title: 'Respect Mealtimes Quiz',
    questions: [
      {
        q: 'What happens when we eat meals at regular times every day?',
        options: [
          'We feel sleepy all day',
          'Our body stays active and focused',
          'We get more hungry',
          'Nothing changes',
        ],
        answer: 1,
        reasons: [
          'Eating at regular times does not cause sleepiness; it actually prevents it.',
          'Eating at regular times helps our body stay active, focused, and full of energy throughout the day!',
          'Regular meals help control hunger, not increase it.',
          'Regular meal timings make a big difference in energy and focus.',
        ],
      },
      {
        q: 'Which meal should you NEVER skip?',
        options: [
          'Lunch',
          'Dinner',
          'Breakfast',
          'Evening snack',
        ],
        answer: 2,
        reasons: [
          'Lunch is important but not the most critical meal to never skip.',
          'Dinner matters but skipping it is less harmful than skipping breakfast.',
          'Breakfast is the most important meal! It gives your body energy after a long night of sleep.',
          'Evening snack is optional and not a main meal.',
        ],
      },
      {
        q: 'What is a good time to eat dinner?',
        options: [
          'Just before sleeping',
          'At midnight',
          '2-3 hours before bedtime',
          'Skip dinner completely',
        ],
        answer: 2,
        reasons: [
          'Eating just before sleeping can cause indigestion and disturb sleep.',
          'Midnight is too late and can upset the body clock.',
          'Eating dinner 2-3 hours before bedtime helps your body digest food properly and gives you better sleep!',
          'Skipping dinner entirely is not recommended as the body needs evening nutrition.',
        ],
      },
      {
        q: 'What can happen if you skip meals often?',
        options: [
          'You become stronger',
          'You feel tired and cannot concentrate',
          'You run faster',
          'You sleep better',
        ],
        answer: 1,
        reasons: [
          'Skipping meals reduces energy and does not make you stronger.',
          'Skipping meals makes you tired, unfocused, and can even make you over-hungry later!',
          'Lack of food energy actually reduces physical performance.',
          'Skipping meals can disturb sleep, not improve it.',
        ],
      },
      {
        q: 'Which is a healthy eating habit?',
        options: [
          'Snacking all day instead of meals',
          'Eating only once a day',
          'Eating 3 balanced meals at regular times',
          'Eating only junk food',
        ],
        answer: 2,
        reasons: [
          'Constant snacking confuses hunger signals and prevents proper digestion.',
          'One meal a day does not provide enough energy throughout the day.',
          'Having 3 balanced meals at regular times is the best way to keep your body healthy and happy!',
          'Junk food lacks essential nutrients needed for growth and health.',
        ],
      },
    ],
  },
  2: {
    title: 'Unplug and Recharge Quiz',
    questions: [
      {
        q: 'The main reason for limiting screen time is that excessive screen use can:',
        options: [
          'Completely replace the need for learning activities',
          'Replace important activities like outdoor play and social interaction',
          'Improve physical fitness automatically',
          'Increase the body\u2019s natural energy levels',
        ],
        answer: 1,
        reasons: [
          'Screens may support learning but should not replace all learning activities.',
          'Excessive screen time can replace activities essential for healthy development, such as outdoor play, reading, and spending time with family and friends.',
          'Screen use usually reduces physical activity rather than improving fitness.',
          'Excessive screen time can lead to tiredness and reduced activity instead of increasing energy.',
        ],
      },
      {
        q: 'One common physical health effect of too much screen time is:',
        options: [
          'Improved muscle strength',
          'Eye strain and headaches',
          'Faster body growth',
          'Increased physical activity',
        ],
        answer: 1,
        reasons: [
          'Screen use often involves sitting and does not build muscle strength.',
          'Looking at screens continuously can cause eye strain and headaches.',
          'Body growth depends on nutrition, sleep, and activity, not screen use.',
          'Excessive screen time usually reduces physical activity.',
        ],
      },
      {
        q: 'Why can using screens late at night affect sleep?',
        options: [
          'Screens increase hunger levels',
          'Screen light interferes with the body\u2019s natural sleep cycle',
          'Screens reduce oxygen in the room',
          'Screens increase digestion activity',
        ],
        answer: 1,
        reasons: [
          'Hunger is not the main factor affecting sleep here.',
          'The light from screens can interfere with the body\u2019s natural sleep cycle and disturb sleep.',
          'Screens do not change oxygen levels in the room.',
          'Screen use does not increase digestion.',
        ],
      },
      {
        q: 'The purpose of the 20\u201320\u201320 rule is to:',
        options: [
          'Improve internet speed while studying',
          'Protect the eyes from strain during screen use',
          'Increase screen brightness',
          'Improve posture while sitting',
        ],
        answer: 1,
        reasons: [
          'The rule is not related to internet speed.',
          'The 20\u201320\u201320 rule helps relax the eye muscles and prevent eye strain.',
          'The rule does not involve adjusting screen brightness.',
          'Posture improvement is unrelated to this rule.',
        ],
      },
      {
        q: 'Which of the following is an example of a healthy digital habit?',
        options: [
          'Using screens during meals',
          'Avoiding breaks while using screens',
          'Setting a daily limit for recreational screen time',
          'Using screens until bedtime',
        ],
        answer: 2,
        reasons: [
          'Mealtimes should ideally be device-free.',
          'Regular breaks are recommended during screen use.',
          'Setting limits helps maintain balanced and responsible technology use.',
          'Using screens before bedtime can disturb sleep.',
        ],
      },
      {
        q: 'Many digital apps and games are designed to keep users engaged mainly by:',
        options: [
          'Limiting the time people can use them',
          'Providing continuous rewards and notifications',
          'Reducing visual stimulation',
          'Encouraging frequent breaks from screens',
        ],
        answer: 1,
        reasons: [
          'Many apps do not limit time; they encourage longer use.',
          'Many apps use rewards, notifications, and new content to maintain attention and increase screen time.',
          'Digital apps often increase stimulation instead of reducing it.',
          'Apps rarely encourage breaks; they often encourage continued use.',
        ],
      },
      {
        q: 'Excessive screen use can reduce concentration mainly because:',
        options: [
          'Screens decrease the brain\u2019s ability to store memories permanently',
          'Constant switching between apps and videos reduces attention span',
          'Screen light damages the brain\u2019s thinking ability',
          'The body stops producing energy while using devices',
        ],
        answer: 1,
        reasons: [
          'Screens do not permanently stop memory formation.',
          'Constantly switching between apps, games, and videos can reduce attention span and make it harder to focus.',
          'Screen light does not directly damage thinking ability in this way.',
          'The body continues producing energy normally.',
        ],
      },
      {
        q: 'Spending too much time online may sometimes lead to feelings of loneliness because:',
        options: [
          'Internet connections reduce emotional thinking',
          'Online interactions may replace face-to-face communication',
          'Digital devices prevent people from speaking',
          'The brain becomes unable to recognise emotions',
        ],
        answer: 1,
        reasons: [
          'Internet use does not directly reduce emotional thinking.',
          'Excessive online time may reduce real-life interactions with family and friends, which can lead to loneliness.',
          'Devices do not physically prevent people from speaking.',
          'Emotional recognition is not the main issue described.',
        ],
      },
      {
        q: 'Which situation best shows a balanced use of technology?',
        options: [
          'Spending all free time playing online games',
          'Using screens for learning but also doing sports and hobbies',
          'Avoiding all technology completely',
          'Watching videos late at night every day',
        ],
        answer: 1,
        reasons: [
          'Spending all free time online removes time for other healthy activities.',
          'Balanced technology use includes learning on screens while also engaging in physical activity, hobbies, and social interaction.',
          'Technology can be useful when used responsibly.',
          'Late-night screen use can disturb sleep.',
        ],
      },
      {
        q: 'Which activity best helps the brain \u201cunplug and recharge\u201d after long screen use?',
        options: [
          'Switching from one app to another',
          'Playing an outdoor game or spending time with friends',
          'Watching another video on a different device',
          'Increasing screen brightness while studying',
        ],
        answer: 1,
        reasons: [
          'Switching apps still keeps the brain engaged with screens.',
          'Outdoor play, hobbies, and social interaction allow the brain to rest from constant digital stimulation.',
          'Watching another video continues screen exposure.',
          'Changing brightness does not reduce screen exposure or mental fatigue.',
        ],
      },
    ],
  },
};

export default HABIT_QUIZZES;
