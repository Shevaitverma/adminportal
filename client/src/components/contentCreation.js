import React, { useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
const ContentCreation = () =>{
    const [expName, setexpName] = useState('');
    const [description, setDescription] = useState('');
    const [level, setLevel] = useState('');
    const [subject, setSubject] = useState('');
    const [matName,setmatName] = useState('');
    const [matQty,setmatQty] = useState('');
    const [safetyPercautions,setsafetyPercautions] = useState('');
    const [instructions,setinstructions] = useState('');



    const subjects = [
        {label:'Physics'},
        {label:'Chemistry'},
        {label:'Biology'},
        {label:'Computer science'},
        {label:'English'},
    ];


    const handleContentCreation = async (event) =>{
        event.preventDefault();
    const response = await fetch("http://localhost:5000/admin/add",{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
            expName,
            description,
            level,
            subject,
            // image
            //---------
            // material
            matName,matQty,
            safetyPercautions,
            instructions,
            // createdAt,
        }),
    });
    const data = await response.json()
    console.log(data);
    }

    return(
        <div>
            <form className="shadow-none p-3 mb-5 bg-light rounded">
                <label>Experiment Name</label>
                <br />
                <input 
                type="text" 
                placeholder="Enter name"
                value={expName}
                onChange={event => setexpName(event.target.value)}
                />
                <br />

                <label>One line description</label>
                <br />
                <input 
                type="text" 
                placeholder="one line description"
                value={description}
                onChange={event => setDescription(event.target.value)}
                />
                <br />
                

                <label>Difficulty level (1-5)</label>
                <br />
                <input 
                type="text" 
                placeholder="Enter number"
                value={level}
                onChange={event => setLevel(event.target.value)}
                />
                <br />

                <label>subjects</label>
                <br />
                <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={subjects}
                value={subject}
                onChange={event => setSubject(event.target.value)}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="subject" />}
                />

                <label>main image</label>
                <br />

                <label>material list</label>
                <br />
                <label>Name: 
                    <input 
                    type="text"
                    value={matName}
                    onChange={event => setmatName(event.target.value)}
                    />
                </label>
                <label>Quantity: 
                    <input 
                    type="text"
                    value={matQty}
                    onChange={event => setmatQty(event.target.value)}
                    />
                </label>
                <br/>

                <label>safety percautions</label>
                <br />
                <input 
                type="text" 
                placeholder="Enter precautions"
                value={safetyPercautions}
                onChange={event => setsafetyPercautions(event.target.value)}
                />
                <br />

                <label>step-by-step instructions</label>
                <br />
                <input 
                type="text" 
                placeholder="Enter number"
                value={instructions || ""}
                onChange={event => setinstructions(event.target.value)}
                />
                <br />
                
                <button className="btn btn-success" onClick={handleContentCreation} >save</button>

            </form>
        </div>
    )
}

export default ContentCreation;