import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = () => {
  return (
    <div className='spinner'>
        <CircularProgress style={{color:'#22223b'}} />
        <p className='loading'>Loading...</p>
    </div>
  );
}

export default Spinner;