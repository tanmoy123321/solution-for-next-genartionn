import React from 'react';
import {Link} from 'react-router-dom';
// import Footerlogo from "../images/footerl.jpg";
import MrIndianCoder from "../images/mr.indiancoder.jpg";

import introlinkpartner from "../images/introlink.jpg";

function Footer() {
    return(
        
    
     <div className="section footer bg-dark text-white">
         <br></br>
         <br/>
        
    <div className="album py-3">
        
        <div className="container">

            <div className="row">
            <div className="col-md-4">
              
                 <h6>Solution For Next Generation</h6>
                   <hr/>
                     <ul className="list-unstyled">
                    
          
            <li className="mb-2"  ><small>Bamanpukur, Minakhan, North 24 PGS,  </small></li>
          
         
            <li className="mb-2" ><small> Pin- 743425, ( NEAR SCIENCE CITY ), WB | India</small></li>
         
           
          
           
            <li style={{color: "white"}} className="mb-2"><small><a href="tel: +91 7384707032" className="btn btn-light">  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-forward" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"/>
</svg>   +91 7384707032</a> </small></li>
           
          </ul>
          </div>
        
        
                 <div className="col-md-2">
                     <h6>Home Inerior Office</h6>
                     <hr/>
                     <ul class="list-unstyled">
                   
                     <li className="mb-2" ><small>Our Home interior Office ( Introlink )</small></li>
                     <img src={introlinkpartner}  height="40" width="120" alt="introlink"/>
                      
                       <li className="mb-2" ><small>Wow Apartment, Salua, Rajarhat</small></li>
                       <li className="mb-2"><small>Swaraj Park, Kolkata - 741101, WB, India</small></li>

                     </ul>
                 </div>
                 <div className="col-md-2">
                 <h6> Contact Us</h6>
                   <hr/>
                     <ul className="list-unstyled">
                      <Link to="/contact">
                            <li className="mb-2"><small>Contact</small></li></Link>
                            <Link to="/aboutus">
                            <li className="mb-2"><small>About</small></li></Link>
              
            
          </ul>
          </div>
          <div className="col-md-2">
                 <h6>Others Business</h6>
                   <hr/>
                     <ul className="list-unstyled">
                     <Link to="/otherbusiness">
               <li className="mb-2"><small>Home Interior</small></li></Link>
       
               
           
          </ul>
          
          </div>
          
          <div className="col-md-2">
                 <h6>SOCIAL LINKS</h6>
                   <hr/>
                     <ul className="list-unstyled">
                      
            <li className="mb-2"> <a href="#">
                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg> <small> Facebook</small></a> </li>
           
          
          
           

{/* <li className="mb-2"> <a href="http"> <svg xmlns="http://www.w3.org/2000" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg><small> Instagram </small> </a> </li> */}

           <br/>
           
          </ul>
          
          </div>

        
          
                 </div>
                 </div>
                 </div>
               
               
                 <br></br><br/>
                 <center> 
          <div align='center'> <h4> Visitor :</h4> <a href="https://www.solutionfornextgeneration.com" target="_blank">
<img src="https://hitwebcounter.com/counter/counter.php?page=9112576&style=0006&nbdigits=9&type=page&initCount=6520" title="sgsolution" Alt="sgsolution"   border="0" /></a>  </div>

             </center>
    <div className="album py-3">
        
        <div className="container">

            <div className="row">
            <div className="col-md-4">
      
              <h4 style={{color:"white"}} ><b>W</b>e Are Marketing Partner : Maruti Suzuki, Hyundai, Kia, Tata, Mahindra</h4> 
              <a href="tel: +91 7384707032"  className="btn btn- btn-outline-light mb-2">    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-forward" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"/>
</svg> +91 7384707032*</a>
                 </div>
                 <div className="col-md-4">
                 <p> Copyright © 2022, Solution For Next Generation </p>
                
                 </div>
                 <div className="col-md-4">
                <small> Development & Design By  <a href="https://www.mrindiancoder.com/" target="_blank" rel="noopener noreferrer">www.mrindiancoder.com <a href="https://www.mrindiancoder.com/" target="_blank" rel="noopener noreferrer"> <img src={MrIndianCoder} class="img-fluid" width="85" height="30" alt="Mr. Indian Coder"/> </a>
                </a></small>
                 </div>
                 
                 </div>
                 </div>
                 </div>
                <br></br>

             </div>
             
            
         
         
     
    );
}
export default Footer;