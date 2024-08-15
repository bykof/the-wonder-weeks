import dayjs from "dayjs";

const leapWeeks = [
  {
    start: 4.5,
    end: 5.5,
    info: 'Leap 1 marks your baby\'s entry into the "world of sensations" around week 4 to 6. During this period, babies often become fussier, crying more and becoming clingy. This phase is linked to their rapid sensory development. By week 6, babies start adapting to these changes, showing increased interest in their surroundings, possibly shedding their first tear, and even offering their first smile. This leap helps reveal early aspects of their personality and developmental focus.',
  },
  {
    start: 7.5,
    end: 9.5,
    info: 'Leap 2 occurs around week 8 and introduces your baby to the "world of patterns." During this leap, babies start recognizing simple patterns in their environment, like movement or sounds, and may begin responding to these with more deliberate actions. They might also become more fussy as they adjust to these new cognitive abilities. You\'ll likely see them focusing more on faces, discovering their hands, and trying to interact more with their surroundings.',
  },
  {
    start: 11.5,
    end: 12.5,
    info: 'Leap 3 occurs around week 12 and introduces your baby to the "world of smooth transitions." During this stage, babies start noticing smoother transitions in movement, sound, and light. They may begin to perceive things like flowing water or a ball rolling across the floor. This leap can lead to increased fussiness as babies adjust to these new perceptions, but they also start engaging more with their environment, becoming more interested in toys, and developing better motor control.',
  },
  {
    start: 14.5,
    end: 19.5,
    info: 'Leap 4 occurs around week 19 and introduces your baby to the "world of events." During this leap, babies begin to understand the concept of events, noticing that certain actions lead to specific outcomes. This understanding allows them to explore cause and effect, making them more curious and interactive. However, this period can also lead to more fussiness as they adjust to these new cognitive skills, and they might seek extra comfort from caregivers.',
  },
  {
    start: 22.5,
    end: 26.5,
    info: 'Leap 5 occurs around week 26 and introduces your baby to the "world of relationships." During this stage, babies begin to understand the distance between objects and people, which leads to a better grasp of spatial relationships. This cognitive leap often results in increased clinginess and moodiness as they become more aware of their environment and the separation from caregivers. However, it also brings new skills, like reaching out for objects and a greater interest in exploring their surroundings.',
  },
  {
    start: 28.5,
    end: 30.5,
    special: true,
    info: "",
  },
  {
    start: 33.5,
    end: 37.5,
    info: "",
  },
  {
    start: 41.5,
    end: 46.5,
    info: 'Leap 7 occurs around week 46 and introduces your baby to the "world of sequences." During this stage, babies begin to understand the concept of sequences, meaning they can recognize and anticipate the order of events, like the steps in a routine. This cognitive development might lead to new skills like trying to stack blocks or follow more complex routines, but it can also make them more demanding as they try to master these new concepts.',
  },
  {
    start: 50.5,
    end: 54.5,
    info: 'Leap 8 occurs around week 55 and introduces your baby to the "world of programs." During this stage, babies start to understand that actions can be linked together to achieve a specific goal. This cognitive leap leads to more complex behaviors, like trying to put on shoes or fitting pieces together in a puzzle. However, this period can also bring increased frustration as they work to master these new skills.',
  },
  {
    start: 59.5,
    end: 64.5,
    info: 'Leap 9 occurs around week 64 and introduces your baby to the "world of principles." During this stage, babies begin to understand rules and principles, such as how objects behave under certain conditions or the idea of sharing. This cognitive leap can lead to increased independence and problem-solving abilities, but it might also bring about stubbornness as they test boundaries and assert their will.',
  },
  {
    start: 70.5,
    end: 75.5,
    info: 'Leap 10 occurs around week 75 and introduces your toddler to the "world of systems." During this stage, toddlers begin to grasp how different systems work together and influence each other. This cognitive development enhances their understanding of routines, social rules, and complex problem-solving. However, it can also lead to more frustration as they become aware of inconsistencies and challenges in their environment.',
  },
];

const calculateLeaps = (birthdate) => {
  return leapWeeks.map((week) => {
    const start = dayjs(birthdate).add(week.start, "week").subtract(1, "day");
    const end = dayjs(birthdate).add(week.end, "week");
    return {
      start,
      end,
      special: week.special,
      daysLeft: dayjs(start).diff(dayjs(), "days"),
      info: week.info,
    };
  });
};

export default calculateLeaps;
