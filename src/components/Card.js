import React from 'react';
import Fab from '@mui/material/Fab';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {toast} from 'react-toastify';

const Card = (props) => {
    let course =props.course;
    let likedCourse =props.likedCourse;
    let setLikedCourse =props.setLikedCourse;

    const clickHandler = () => {
        if (likedCourse.includes(course.id)) {
            setLikedCourse((prev) => prev.filter((id) => id !== course.id));
            toast.warning("Liked Removed");
        }
        else {
            setLikedCourse((prev) => [...prev,course.id]);
            toast.success("Liked Successfully");
        }
    }
  return (
    <div className='container'>
        <div className='image'>
            <img className='img' src={course.image.url} alt={course.image.alt}></img>
            <div className='like'>
                <Fab onClick={clickHandler}>
                    {likedCourse.includes(course.id) ? <FavoriteIcon style={{ color:'red'}}/> : <FavoriteBorderIcon/> }
                </Fab>
            </div>
        </div>
        <div>
            <p className='name'>{course.title}</p>
            <p className='description'>
                {
                    course.description.length >100 ?
                    (course.description.substr(0,100)) + "...":
                    (course.description)
                }
            </p>
        </div>
    </div>
  );
}

export default Card;