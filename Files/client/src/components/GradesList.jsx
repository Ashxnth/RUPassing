import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

const GradesList = () => {
  const { grades, deleteGrade, getGrades } = useContext(GlobalContext);
  
  useEffect(() => {
    getGrades();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="GradesList">
      {grades.map(grades => (<li><b>{grades.name}</b> Grade: {grades.grade}% Weight: {grades.weight}% <button onClick={() => deleteGrade(grades._id)}>X</button></li>))}   
    </div>
  );
}

export default GradesList;