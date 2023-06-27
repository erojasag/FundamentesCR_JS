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
    <div>
      {loading? 
    <PulseLoader
    color={'#D002E'}
    loading={loading}
    cssOverride={loading}
    size={100}
    aria-label="Loading Spinner"
    data-testid="loader"
  />:null
    }
    </div>
    
  );
}
