
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

  const func = {...user,...jobInfos};
  const {name, age, nationality, profession, squad, squadInitials } = func;
  console.log(`Hi everyone, my name is ${name}, i'm ${age} years old, and i'm ${nationality}, currently i'm ${profession}, my squad the ${squad} is the best! I love you, go ${squadInitials}!!`);