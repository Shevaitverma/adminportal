import React, { useState, useEffect } from "react";



const Blog = () =>{

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
        <div className="shadow-lg p-3 mb-5 bg-white rounded .bg-gradient-light">
        <hr/>
        <h1>experiments list</h1>
        {
            data.map((item)=><div>
                <hr/>
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
                </div>)
        }
        </div>
    )
}

export default Blog;