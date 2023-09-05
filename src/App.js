import React, { useState } from 'react';
import './App.css';
import Carousel from './Component/Carousel';
import StudentProfile from './Component/StudentProfile';
import studentsData from './students.json';



function App() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const handleCardClick = (student) => {
    setSelectedStudent(student);
    setIsProfileVisible(true);
  };

  const handleCloseProfile = () => {
    setIsProfileVisible(false);
  };

  const handleShowCarousel = () => {
    setIsProfileVisible(false);
    setSelectedStudent(null);
  };

  return (
    <div className="App">
      <h1>Student Carousel</h1>
      {isProfileVisible ? (
        <div className="profile-container">
          <h2>Student Profile</h2>
          {selectedStudent ? (
            <StudentProfile student={selectedStudent} onClose={handleCloseProfile} />
          ) : (
            <p>Select a student to view their profile.</p>
          )}
          <button onClick={handleShowCarousel}>Back to Carousel</button>
        </div>
      ) : (
        <Carousel students={studentsData} onCardClick={handleCardClick} />
      )}
    </div>
  );
}

export default App;
