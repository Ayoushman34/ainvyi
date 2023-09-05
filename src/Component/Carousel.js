import React from 'react';
import Slider from 'react-slick';
import StudentCard from './StudentCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/Carousel.css'; // Import your carousel CSS file

import CustomPrevArrow from "./assets/CustomPrevArrow"
import CustomNextArrow from './assets/CustomNextArrow';


function Carousel({ students, onCardClick }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    centerMode: true, // Center the active slide
    centerPadding: 0, // Replace with your custom PrevArrow component
  };

  return (
    <Slider {...settings}>
      {students.map((student) => (
        <div key={student.id}>
          <StudentCard student={student} onClick={() => onCardClick(student)} />
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
