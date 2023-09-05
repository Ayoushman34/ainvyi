import React from 'react';

function StudentCard({ student, onClick }) {
  return (
    <div className="student-card" onClick={onClick}>
      <h2>{student.firstName} {student.lastName}</h2>
      <p><strong>Class:</strong> {student.class}</p>
      <p><strong>Date of Birth:</strong> {student.dateOfBirth}</p>
      <p><strong>Gender:</strong> {student.gender}</p>
      {/* Add more student information here */}
    </div>
  );
}

export default StudentCard;


