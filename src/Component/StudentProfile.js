import React from 'react';
import "./css/StudentProfile.css"


function StudentProfile({ student, onClose }) {
  return (
    <div className={`student-profile ${onClose ? 'closable' : ''}`}>
      {onClose && (
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      )}
      <h2>{student.firstName} {student.lastName}'s Profile</h2>
      <div className="profile-details">
        <p><strong>Student ID:</strong> {student.id}</p>
        <p><strong>Date of Birth:</strong> {student.dateOfBirth}</p>
        <p><strong>Gender:</strong> {student.gender}</p>
        <p><strong>Class:</strong> {student.class}</p>
        {/* Add more student details here */}
      </div>
    </div>
  );
}

export default StudentProfile;

