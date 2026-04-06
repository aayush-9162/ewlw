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
        explain: 'Eating at regular times helps our body stay active, focused, and full of energy throughout the day!',
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
        explain: 'Breakfast is the most important meal! It gives your body energy after a long night of sleep.',
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
        explain: 'Eating dinner 2-3 hours before bedtime helps your body digest food properly and gives you better sleep!',
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
        explain: 'Skipping meals makes you tired, unfocused, and can even make you over-hungry later!',
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
        explain: 'Having 3 balanced meals at regular times is the best way to keep your body healthy and happy!',
      },
    ],
  },
};

export default HABIT_QUIZZES;
