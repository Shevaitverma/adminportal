import React, { useState, useEffect } from "react";



const List = () =>{

    const[data,setData] = useState([]);
    
    //fetching data...
    const fetchData = async ()=>{
        try {
            const response = await fetch("http://localhost:5000/admin/review",{
            method: 'GET',
            });
            const fetchItem =await response.json();
            setData(fetchItem);
            console.log(fetchItem);
            
        } catch (err) {
            console.error(err.message);
        }
    }
    useEffect(()=>{
        if (!data.length){
            fetchData();
        }     
    }, [data]);
    

    return(
        <>
        <hr/>
        <h1 className="shadow-none p-3 mb-5 bg-light rounded border border-primary">experiments list</h1>
        {
            data.map((item)=><ul className="shadow p-3 mb-5 bg-white rounded">
                experiment Name = {item.expName}
                <br/>
                description = {item.description} 
                <br/>
                level = {item.level}
                <br/>
                subject = {item.subject}
                <br/>
                material Name = {item.matName}
                <br/>
                material Qty = {item.matQty}
                <br/>
                safety Percautions = {item.safetyPercautions}
                <br/>
                instructions = {item.instructions}
                </ul>)
        }
        </>
    )
}

export default List;