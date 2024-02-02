import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import { apiUrl, filterData } from './data';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
import { toast } from "react-toastify";

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
    async function fetchData(){
      setLoading(true);
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
      }
      catch(error){
        toast.error("Something went wrong");
      }
      setLoading(false);
    }
    useEffect( () => {
      fetchData();
    },[])
  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
      <div className="wrapper">
        <div>
        <Filter filterData = {filterData} category={category} setCategory={setCategory} />
        </div>
        <div className="cards">
        {loading ? <Spinner/> : <Cards courses={courses} category={category}/>}
        </div>
      </div>
      
    </div>
  );
}

export default App;
