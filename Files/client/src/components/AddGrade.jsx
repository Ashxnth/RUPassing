import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Button } from '@material-ui/core'; 

const AddGrade = () => {
    const [name, setName] = useState('');
    const [grade, setGrade] = useState(0);
    const [weight, setWeight] = useState(0);

    const { addGrade } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newGrade = {
            id: Math.floor(Math.random() * 1000),
            text: name,
            grade: +grade,
            weight: +weight
        }
        addGrade(newGrade);
    }

    return (
        <div className="AddGrade">
            <h2>Add New Grade</h2>
            <form onSubmit={onSubmit}>
                <h5>Evaluation Name</h5>
                <input onChange={(e) => setName(e.target.value)} placeholder="Enter Evaluation Name..."></input>
                <h5>Grade (%)</h5>
                <input onChange={(e) => setGrade(e.target.value)} placeholder="Enter Grade..."></input>
                <h5>Weight (%)</h5>
                <input onChange={(e) => setWeight(e.target.value)} placeholder="Enter Weight..."></input>
                <br></br>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default AddGrade;