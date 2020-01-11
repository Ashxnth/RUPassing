//Add field
const buttons = document.querySelector('#addRow');
let field = 5;
buttons.addEventListener('click', function(e){ //Add an event listener to the addRow Button
  e.preventDefault(); //Prevent Default Behaviour
  //Create required HTML
  const table = document.querySelector('tbody');
  const row = document.createElement('tr')
  const entry = document.createElement('th');
  const grade = document.createElement('th');
  const weight = document.createElement('th');
  const input = document.createElement('INPUT');
  const input2 = document.createElement('INPUT');
  //Create Dynamic Entry Number
  field = field + 1;
  entry.innerHTML = "#" + (field);

  input.type = 'text'; //Set the type of the input field to text

  grade.appendChild(input); //Append input to <th>
  weight.appendChild(input2); //Append input to <th>

  row.appendChild(entry); //Append <th> to <tr>
  row.appendChild(grade); //Append <th> to <tr>
  row.appendChild(weight); //Append <th> to <tr>
  
  table.appendChild(row); //Append <tr> to <tbody>
});

//Display final GPA in course
const submitButton = document.querySelector('#submit');
var finalGrade = 0;
submitButton.addEventListener('click', function(e) {
  e.preventDefault();
  var grades = document.querySelectorAll("#table th:nth-child(2) input:nth-child(n)");
  var weight = document.querySelectorAll("#table th:nth-child(3) input:nth-child(n)");
  
  var prevGrade = 0;
  var finalGrade = 0;
  for (var i = 0; i < grades.length; i++) {
    finalGrade = ((weight[i].value)/100)*(grades[i].value);
    finalGrade = finalGrade + prevGrade;
    prevGrade = finalGrade;
  }
  var mark = cgpaFinder(finalGrade);
  var GPA = document.querySelector('h3');
  var input = validInput(finalGrade);
  if (input == true) {
  GPA.innerText = "Your Final Grade is: " + finalGrade + "% or " + mark + "GPA"; 
  } else {
    alert("You have entered an invalid input! Please make sure you entered a number that outputs an average between 0 and 100.");
  }
});

//Function that determines letterGrade according to Ryerson University
function cgpaFinder(finalGrade) {
  if (finalGrade >= 90)
    letterGrade = 4.330;
  else if (finalGrade < 89 && finalGrade >= 85)
    letterGrade = 4.000;
  else if (finalGrade < 85 && finalGrade >= 80)
    letterGrade = 3.670;
  else if (finalGrade < 80 && finalGrade >= 77)
    letterGrade = 3.330;
  else if (finalGrade < 77 && finalGrade >= 73)
    letterGrade = 3.000;
  else if (finalGrade < 73 && finalGrade >= 70)
    letterGrade = 2.670;
  else if (finalGrade < 70 && finalGrade >= 67)
    letterGrade = 2.330;
  else if (finalGrade < 67 && finalGrade >= 63)
    letterGrade = 2.000;
  else if (finalGrade < 63 && finalGrade >= 60)
    letterGrade = 1.670;
  else if (finalGrade < 60 && finalGrade >= 57)
    letterGrade = 1.330;
  else if (finalGrade < 57 && finalGrade >= 53)
    letterGrade = 1.000;
  else if (finalGrade < 53 && finalGrade >= 50)
    letterGrade = 0.670;
  else {
    letterGrade = 0.000;
  }
  return letterGrade;
}

//Function that determines 
function validInput(finalGrade) {
  if (isNaN(finalGrade) == false && finalGrade <= 100 && finalGrade >= 0) {
    return true;
  } else {
    return false;
  } 
}
