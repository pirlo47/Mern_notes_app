import React, { useEffect } from 'react'
import { useState } from "react"
import Navbar from "../components/Navbar.jsx"
import RateLimitedUI from '../components/RateLimitedUI.jsx';
import axios from "axios"


const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/notes");
        console.log(res.data); 
      } catch (error) {
        console.log("Error fetching notes");
      }
    }; 
    fetchNotes(); 
  }, []
); 


  return <div className="min-h-screen">
    <Navbar />

    {isRateLimited && <RateLimitedUI />}
  </div>
};

export default HomePage
