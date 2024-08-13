import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import { collection, getDocs, } from "firebase/firestore";

import {db} from '../../firebase'
import Navbar from '../inc/Navbar';
import ScrollToTop from "react-scroll-to-top";
import { Typewriter } from 'react-simple-typewriter' 

import Interiordesign from "../images/interior.pdf";


function Otherb () {
    const [ setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
      const [showPerPage, setShowPerPage] = useState(9);
      const [pagination, setPagination] =useState({
          start: 0,
          end: showPerPage,
      });
  
      const onPaginationChange = (start,  end) =>{
          setPagination({start: start, end: end});
      };
      const [searchTerm, setsearchTerm] = useState("");
      const [otherbusiness, setOtherbusiness] = useState([])
      const navigate = useNavigate()
  
      const otherbusinessCollectionRef = collection(db, "otherbusiness");
      useEffect(() => {
  
          const getOtherbusiness = async () => {
              const data = await getDocs(otherbusinessCollectionRef);
              setOtherbusiness(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
          }
  
          getOtherbusiness()
      }, [])
    return (
      
<>
<Navbar/>

<br/>
<br/>
<br/>
<br/>
<br/>

<ScrollToTop smooth top="100" color="Darkblue"/>


<br/>

<div className="album py-2">
        
            <div className="container">

                <div className="row">
               
                <div className="col-md-6">
                        
                        <div className="card-body">
                        <input type="text" className="form-control" placeholder="Search...." name="location" 
                        onChange ={(e) => {
                          setsearchTerm(e.target.value);
                        }}
                        />
                                <div className="d-flex justify-content-between align-items-center">
                                   
                                    
                            

                            </div>
                          
                    
                        </div>

                      
                    </div>
             
                    </div>
                  
                    </div>
                    </div>
<div className="album py-4">
        
        <div className="container">

            <div className="row">
            {otherbusiness.filter((val)=>{
      if (setsearchTerm === ""){
        return val;
      } else if (
        val.img.toLowerCase().includes(searchTerm.toLowerCase()) 
       
      
       
  
      ){
        return val;
      }
    }).slice(pagination.start, pagination.end).map((sgsolution) => { return (
       
            <div className="col-md-4 mt-8" >
                        <div className="card mb-4 border-White box shadow">
                        <img  className="card-img-top" src={sgsolution.img}   alt="sg-solutionfornext-generation" />
                            <div className="card-body">
                              
                            <center>
                               <a  href={Interiordesign} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Catalogue Download <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-cloud-download" viewBox="0 0 16 16">
  <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
  <path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
</svg></a>
                               </center>
                                <div className="d-flex justify-content-between align-items-center">
                              
                               
                              
                            </div>
                            </div>
                            </div>
                               
                            </div>
                                )})} 
                            </div>
                            {/* <PaginationOld showPerPage={showPerPage} 
                onPaginationChange={onPaginationChange}
                total={otherbusiness.length}
                /> */}
                            </div>
                            </div>

</>
        
        );
    }
    
    export default Otherb;