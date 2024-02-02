import React from 'react';
import Button from '@mui/material/Button';

const Filter = (props) => {
  let filterData =  props.filterData;
  let setCategory = props.setCategory;
  function filterHandler(title){
    setCategory(title);
  }
  return (
    <div className='filter'>
        {filterData.map( (data) => {
            return( 
              <Button  style={{backgroundColor:'black', color:'white',border:'2px solid white', }} key={data.id} onClick={() => filterHandler(data.title)}>
                {data.title}
              </Button>
            );
        })}
    </div>
  );
}

export default Filter;
