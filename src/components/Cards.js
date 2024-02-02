import React, { useState } from 'react';
import Card from './Card';

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    const [likedCourse, setLikedCourse] = useState([]);

    function getCourses(){
        if (category === 'All'){
            let allCourses = [];
            Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
        })
        return allCourses;
        }
        else{
            return courses[category];
        }
        
    }
  return (
    <div className='card'>
    {
        getCourses().map( (course) => {
            return(<Card key={course.id} course={course} likedCourse={likedCourse} setLikedCourse={setLikedCourse}/>)
        } )
    }
    </div>
  )
}

export default Cards;