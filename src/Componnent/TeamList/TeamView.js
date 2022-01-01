import React from 'react';
import TeamCard from './TeamCard';

function TeamView() {
    return (
        <div className="container-fluid py-5 bg-warning text-center ">
            <div className="container">
                <div className="row ">
                    <div className="col-md-6 animate__animated animate__rubberBand"><TeamCard 
                    title="Mern Stack Chat Appliction"
                    about="Created By @Sameer Shekh"
                    btn_text= "Join Now"
                    
                    
                    /></div>
                    <div className="col-md-6 animate__animated animate__wobble " style={{padding:"80px"}}>
                        <p>This is Owsem wapsite to make the Chat with your Frainds</p>
                    </div>
                </div>

               
            </div>
            
        </div>
    )
}

export default TeamView;
