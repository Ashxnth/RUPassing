import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Header = () => {
  const { grades } = useContext(GlobalContext);
  const mark = grades.map(grades => grades.grade*(grades.weight/100));
  const finalGrade = mark.reduce((sum, mark) => (sum += mark), 0);
  
  const cgpaFinder = (finalGrade) => {
    var letterGrade=0;
    if (finalGrade >= 90)
      return letterGrade = 4.330;
    else if (finalGrade < 89 && finalGrade >= 85)
      return letterGrade = 4.000;
    else if (finalGrade < 85 && finalGrade >= 80)
      return letterGrade = 3.670;
    else if (finalGrade < 80 && finalGrade >= 77)
      return letterGrade = 3.330;
    else if (finalGrade < 77 && finalGrade >= 73)
      return letterGrade = 3.000;
    else if (finalGrade < 73 && finalGrade >= 70)
      return letterGrade = 2.670;
    else if (finalGrade < 70 && finalGrade >= 67)
      return letterGrade = 2.330;
    else if (finalGrade < 67 && finalGrade >= 63)
      return letterGrade = 2.000;
    else if (finalGrade < 63 && finalGrade >= 60)
      return letterGrade = 1.670;
    else if (finalGrade < 60 && finalGrade >= 57)
      return letterGrade = 1.330;
    else if (finalGrade < 57 && finalGrade >= 53)
      return letterGrade = 1.000;
    else if (finalGrade < 53 && finalGrade >= 50)
      return letterGrade = 0.670;
    else 
      return letterGrade = 0.000;
  }
  
  var average = finalGrade.toFixed(2);
  var gpa = cgpaFinder(average).toFixed(2);

  return (
    <div className="Header">
      <h1>RUPassing? (Unofficial GPA Calculator)</h1>
      <div className="header-container">
        <h3 className="final-box">Final GPA: {gpa}</h3>
        <h3 className="final-box">Average: {average}</h3>
      </div>
    </div>
  );
}

export default Header;