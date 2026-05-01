import './App.css';
import { useState } from 'react';


function App() {
  
const [score,setScore]=useState(0);
const [result,setResult]=useState(false);
const [selectoption,setSelectoption]=useState(null);
const [currentquestion,setCurrentquestion]=useState(0);

function handleSubmit(){
if (selectoption===questions[currentquestion].answer) {
  setScore(score+1);
} else {

  
}if (currentquestion<questions.length-1) {
setCurrentquestion(currentquestion+1);
setSelectoption(null);

}else{
  setResult(true);
}
}

function reset(){
setScore(0);
setResult(false);
setSelectoption(null);
setCurrentquestion(0);

}

const questions=[
  {
    question:"What is JavaScript?",
    options:[
      "A programming language",
      "A markup language",
      "A styling language",
      "A database"
  ],
  answer:"A programming language"
},
{
  question:"What is the correct syntax for a for loop in JavaScript?",
  options:[
    "for (i=0; i<5; i++)",
    "for i=0; i<5; i++",
    "for (i=0; i<5)",
    "for i=0; i<5; i++"
  ],
  answer:"for (i=0; i<5; i++)"
},
{
  question:"What is the correct syntax for a function in JavaScript?",
  options:[
    "function myFunction()",
    "function:myFunction()",
    "function = myFunction()",
    "function myFunction"
  ],
  answer:"function myFunction()"
},
{
  question:"What is the correct syntax for an if statement in JavaScript?",
  options:[
    "if (i==5)",
    "if i=5",
    "if i==5 then",
    "if i=5 then"
  ],
  answer:"if (i==5)"
},
{
question:"What is the correct syntax for a while loop in JavaScript?",
options:[
  "while (i<5)",
  "while i<5",
  "while (i<5) do",
  "while i<5 do"
],
answer:"while (i<5)"
},
{
question:"promise syntax in JavaScript?",
options:[
"new Promise(() => { // code to be executed })",
"new Promise { (resolve, reject) => { // code to be executed } }",
"new Promise((resolve) => { // code to be executed })",
"new Promise((resolve, reject) => { // code to be executed })"
],
answer:"new Promise((resolve, reject) => { // code to be executed })"
},
{
question:"arrow function syntax in JavaScript?",
options:[
  "function:myFunction()",
  "myFunction = () => {}",
  "function myFunction()",
  "myFunction = function()"
],
answer:"myFunction = () => {}"
},
{
  question:"What is DOM in JavaScript?",
options:[
  "Document Object Model",
  "Data Object Model",
  "Document Oriented Model",
  "Data Oriented Model"
],
answer:"Document Object Model"
}

]

return(
  
  <div className='container'>
  
  <h1>Quiz App</h1>
  <h2>Test Your Knowledge in Programming</h2>

<div className='question'>
<h3>{questions[currentquestion].question}</h3>
{result===true && <h3>your Result is {score} out of {questions.length}</h3>}

</div>
{result===false &&
<div className='options'>

{questions[currentquestion].options.map((option,index)=>
<button key={index} style={{ backgroundColor: selectoption === option ? 'rgb(86, 59, 185)' : '' }} onClick={()=>setSelectoption(option)}>{option}</button>
)}

</div>}
{result === false && <div className='submit'>
  <center>
  <button onClick={handleSubmit}>Submit</button>
  
</center>  
  </div>}
  {result === true && <div className='submit'>
  <center>
  <button onClick={reset}>Reset</button>
</center>  
  </div>}
  </div>  
  
)

}

export default App;
