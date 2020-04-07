const readline = require('readline');

const questionAndAnswer = [
  {
    q: "What's your name? Nicknames are also acceptable :)",
    a: (answer) => `I like to be called ${answer}.`
  },
  {
    q: "What's an activity you like doing?",
    a: (answer) => `An activity I like doing is ${answer}.`
  },
  {
    q: "What do you listen to while doing that?",
    a: (answer) => `I listen to ${answer}`
  },
  {
    q: "Which meal is your favourite (eg: dinner, brunch, etc.)",
    a: (answer) => `My favourite meal is ${answer}`
  }, 
  {
    q: "What's your favourite thing to eat for that meal?",
    a: (answer) => `I like to eat ${answer}`
  },
  {
    q: "Which sport is your absolute favourite?",
    a: (answer) => `My favourite sport is ${answer}`
  },
  {
    q: "What is your superpower? In a few words, tell us what you are amazing at!",
    a: (answer) => `I am the best at ${answer}`
  }
]

const askQuestion = function(rl, arr, index, result) {
  rl.question(`${arr[index].q} `, (answer) => {
    result += `${arr[index].a(answer)} \n`;
    if (index === arr.length - 1) {
      console.log(result);
      rl.close();
    } else {
      index += 1;
      askQuestion(rl, arr, index, result);
    }
  });
}

const makeProfile = function() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  askQuestion(rl, questionAndAnswer, 0, "")
}

makeProfile()