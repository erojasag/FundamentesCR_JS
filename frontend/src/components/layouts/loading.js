import React, { useState,useEffect } from 'react';
import PulseLoader from "react-spinners/PulseLoader";


export default function Loading() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      {loading? 
    <PulseLoader
    color={'#D0023E'}
    loading={loading}
    size={10}
    
    />:<div></div>
    }
    </div>
  );
}
