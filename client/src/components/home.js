import React from "react";
import ContentCreation from "./contentCreation";
import List from "./list";
import Blog from "./blog";

const Home = ({isLogin})=>{
    console.log(isLogin);
    return(
        isLogin.userType==='admin'?<>
        <div>
            <ContentCreation />
            <List/>
        </div>
        </>:<Blog/>
    )
}

export default Home;