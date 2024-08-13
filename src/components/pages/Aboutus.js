import React from 'react'
import Navbar from "../inc/Navbar";
import Director from "../images/directorimg.jpg";
import ScrollToTop from "react-scroll-to-top";
import Calling from "../images/calling.jpg";
import Employeeman from "../images/employee.jpg";
import Employeemans from "../images/smrita.jpg";

function Aboutus() {
  return (
    <div>
      <Navbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <ScrollToTop smooth top="100" color="blue" />
      <div className="album py-4">
        
        <div className="container">
        
            <div className="row">
            
            <div className="col-md-6 mt-8" >

                       
                           
                                <div className='font'>
                                <h1 className="card-text"> <b>DIRECTOR</b></h1>
                                </div>
                                <h2 className="card-text"> Sarojit Gaunia
</h2>
                                <div className="d-flex justify-content-between align-items-center">
                               
                        
                            </div>
                               
                            </div>
                            <br/>
                            <div className="col-md-6 mt-8" >
                        
                        <img src={Director} className="card-img-top"    alt="Director" />
                           
                                
                                <div className="d-flex justify-content-between align-items-center">
                              
                                
                           
                            </div>
                               
                            </div>
                      
                            
                           
                           
                            
                               
                            </div>
                         
                     
                            </div>
                 
                            </div>
                         <hr/> 
                         <br/>
                         <center><h2 style={{color:"Darkblue"}}><b>Our Company Team</b></h2></center>

                         <div className="album py-4">
        
        <div className="container">
        
            <div className="row">
            
            <div className="col-md-6 mt-8" >
            <img src={Employeemans} className="card-img-top"    alt="sgsolution" />
                     
      
                           
                               
                                <div className="d-flex justify-content-between align-items-center">
                               
                        
                            </div>
                               
                            </div>
                            <br/>
                            <div className="col-md-6 mt-8" >
                           
                            <div className='font'>
                                <h1 className="card-text"> <b>Reletionship Manager</b></h1>
                                </div>
                                <h2 className="card-text"> Smriti Das
</h2>
                                
                                <div className="d-flex justify-content-between align-items-center">
                              
                                
                           
                            </div>
                               
                            </div>
                      
                            
                           
                           
                            
                               
                            </div>
                         
                     
                            </div>
                 
                            </div>
                            <hr/>
                         <div className="album py-4">
        
        <div className="container">
        
            <div className="row">
            
            <div className="col-md-6 mt-8" >

            <img src={Calling} className="card-img-top"    alt="solutionfornwxtgeneration" />
                           
                               
                                <div className="d-flex justify-content-between align-items-center">
                               
                        
                            </div>
                               
                            </div>
                            <br/>
                            <div className="col-md-6 mt-8" >
                        
                     
                            <div className='font'>
                                <h1 className="card-text"> <b>Senior Sales Executive</b></h1>
                                </div>
                                <h2 className="card-text"> SRABONI DAS
</h2>
                                
                                <div className="d-flex justify-content-between align-items-center">
                              
                                
                           
                            </div>
                               
                            </div>
                      
                            
                           
                           
                            
                               
                            </div>
                         
                     
                            </div>
                 
                            </div>
                         <hr/>

                         <div className="album py-4">
        
        <div className="container">
        
            <div className="row">
            
            <div className="col-md-6 mt-8" >
            <img src={Employeeman} className="card-img-top"    alt="sgsolution" />
                     
      
                           
                               
                                <div className="d-flex justify-content-between align-items-center">
                               
                        
                            </div>
                               
                            </div>
                            <br/>
                            <div className="col-md-6 mt-8" >
                           
                            <div className='font'>
                                <h1 className="card-text"> <b>Services Head</b></h1>
                                </div>
                                <h2 className="card-text"> Abhishek Das
</h2>
                                
                                <div className="d-flex justify-content-between align-items-center">
                              
                                
                           
                            </div>
                               
                            </div>
                      
                            
                           
                           
                            
                               
                            </div>
                         
                     
                            </div>
                 
                            </div>
                  

                         




    </div>
  )
}

export default Aboutus
