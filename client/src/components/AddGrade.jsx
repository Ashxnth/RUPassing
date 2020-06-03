import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Button, Input, Spacer } from '@zeit-ui/react';

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
            <Input onChange={(e) => setName(e.target.value)} placeholder="Enter Evaluation Name..." status="secondary">
                Evaluation Name
            </Input>
            <br></br>
            <Input onChange={(e) => setGrade(e.target.value)} placeholder="Enter Grade..." status="secondary">
                Grade (%)
            </Input>
            <br></br>
            <Input onChange={(e) => setWeight(e.target.value)} placeholder="Enter Weight..." status="secondary">
                Weight (%)
            </Input>
            <Spacer />
            <Button onClick={onSubmit} shadow type="secondary">Submit</Button>
        </div>
    );
}

export default AddGrade;