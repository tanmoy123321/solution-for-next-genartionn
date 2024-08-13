

import React from "react";
import Navbar from "../inc/Navbar";
import {Link} from "react-router-dom";
import Slider from "../inc/Slider";
import Sgsolution from "../images/autometicspump.pdf";
import { Typewriter } from 'react-simple-typewriter'

import { DefaultPlayer as Video } from 'react-html5video';

import 'react-html5video/dist/styles.css';

import Aautometicpumps from "../images/sgautometicpump.mp4";

import Otherbpage from "../pages/Otherbpage";

import sgProducts from "../images/product.jpg"
import solutionfornextgeneration from "../images/product02.jpg"
import "./Home.css";


function Home (){
    return(
            <>
            <Navbar/>

            <br/>
            <br/>
            <br/>
            <br/>
            <div className="album py-0">
        
        <div className="container">

            <div className="row">
                <h5>Solution For Next Generation</h5>
                </div>
                </div>
            </div>
           
            <Slider/>

            <div style={{color: "Green"}} class="fixed-bottom">       <a href="tel: +91 7384707032"  className="btn btn- btn-outline-success mb-2">    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-forward" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"/>
</svg> +91 7384707032*</a></div>
            <div className="album py-2">
        
        <div className="container">

            <div className="row">
                <center><h2  style={{color:"Darkblue"}}  className="mb-1">Solution For Next Generation</h2></center>
                <center><p  style={{color:"Darkblue"}} >Autometic Pump Controller</p></center>
            </div>
            </div>
            </div>
            <div className="p-1 mb-0 bg-dark text-white">

<div className="album py-0">
        
        <div className="container">

            <div className="row">
            <div className="col-md-7">
              
                    <div className="card-body">
            
                    <h1 className="card-text mb-2" style={{paddingTop: "1rem", margin: "auto 0", color: "Gray"}}> <b> SAVE <span style={{color: "white", fontWeight: "bold", marginleft: '7px'}}>
    <Typewriter 
    loop
    cursor
    cursorStyle="_"
    typeSpeed={90}
    deleteSpeed={50}
    delaySpeed={1000}
    words={[ " WATER ", " LIFE", "ELECTRICITY", "MONEY"]}
    />
</span>
</b></h1>
                           
                            <p className="card-text mb-3">Solution For Next Generation was founded/established in 2017</p>
                    
                    </div>

                  
                </div>
                </div>
                </div>
                </div>
      
                </div>
                <br/>
                   <div className="album py-0">

<div className="container">
<div className="row">
<center><h1 style={{color:"Darkblue"}} ><b>Products</b></h1></center>
</div>
</div>
</div>

            <div className="backgroundcolor">
            <br/>

            <div className="album py-1">
        
        <div className="container">

            <div className="row">
       
            <div className="col-md-6 mt-8" >
                        <div className="card mb-4 border-White box shadow">
                            <Link to="/ac">
                        <img src={sgProducts} className="card-img-top"   alt="solutionfornextgeneration" />
                        </Link>
                            <div className="card-body">
                            <h2  style={{color: "Darkblue"}} className="card-text mb-2"> <center> Ultra</center></h2>
                                <h5  style={{color: "Secondary"}} className="card-text mb-2"> <center> Pump Controller</center></h5>
                                <h6 className="card-text mb-2"><center> Save Water Save Life</center></h6>
                                <p className="card-text"><small> <center>প্রতিদিন নিয়ম করে জলের পাম্প চালু ও বন্ধ করার সমস্যা থেকে সম্পূর্ণ মুক্তি</center></small></p>
                                <hr/>
                                <center>
                               <a  href={Sgsolution} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Catalogue Download <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-cloud-download" viewBox="0 0 16 16">
  <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
  <path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
</svg></a>
                               </center>
                               <div className="d-flex justify-content-between align-items-center">
                               
                              
                            </div>
                            </div>
                            </div>
                               
                            </div>
                            <div className="col-md-6 mt-6" >
                        <div className="card mb-4 border- box shadow">
                           <Link to="washer">
                        <img src={solutionfornextgeneration } className="card-img-top"   alt="solutionfornextgeneration " />
                        </Link>
                            <div className="card-body">
                            <h2  style={{color: "Darkblue"}} className="card-text mb-2"> <center> Ultra - X</center></h2>
                                <h5 className="card-text mb-2"><center> Autometic Pump Controller</center></h5>
                                <h6 className="card-text mb-2"><center> Save Water Save Life</center></h6>
                                <p className="card-text"> <small> <center>প্রতিদিন নিয়ম করে জলের পাম্প চালু ও বন্ধ করার সমস্যা থেকে সম্পূর্ণ মুক্তি</center></small></p>
                                
                           
                                <hr/>
                                <center>
                               <a  href={Sgsolution} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Catalogue Download <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-cloud-download" viewBox="0 0 16 16">
  <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
  <path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
</svg></a>
                               </center>

<div className="d-flex justify-content-between align-items-center">
                                
                                        
                            </div>
                            </div>
                            </div>
                               
                            </div>
                            </div>
                            </div>
                            </div>

            </div>
          
            <div className="album py-2">

<div className="container">
<div className="row">



<Video  loop  onCanPlayThrough={()=>{
    console.log('video play')
}}>
<source src={Aautometicpumps} height="50px" type="video/webm"/>
<h5>Solution For Next Generation</h5>
</Video>
               
               </div>

               </div>
               </div>
            
               <Otherbpage/>
               
            
            </>
    );
}

export default Home;