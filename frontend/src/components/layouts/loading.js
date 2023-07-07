import React, { useState, useEffect } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

export default function Loading() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 20000);
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {loading ? (
        <PulseLoader color={'#114FF5'} loading={loading} size={10} />
      ) : (
        <div></div>
      )}
    </div>
  );
}
