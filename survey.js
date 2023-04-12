
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const listQuestion = ["What's your name? Nicknames are also acceptable :) ","hat's an activity you like doing?: ","What do you listen to while doing that?: ",
"Which meal is your favourite (eg: dinner, brunch, etc.): ","What's your favourite thing to eat for that meal?: ",
"Which sport is your absolute favourite: ","What is your superpower? In a few words, tell us what you are amazing at!: "]
//onsole.log(listQuestion.length)
let answers = [];
let index = 0;
const askQue = function () {
if (index < listQuestion.length){
  rl.question(listQuestion[index], (key) =>{
  answers.push(key) 
  index++
  askQue()
  })
}else {
  console.log(`Your name is : ${answers[0]}, you like ${answers[1]}, you listen ${answers[2]} while doing that, 
           your facourite meal is ${answers[3]}, and your favorite thing of this meal us ${answers[4]},
            your absolute favor sport is ${answers[5]}, and your superpower is ${answers[6]}`)
  rl.close()
}
};
askQue();  
 

    

