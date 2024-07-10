import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css'; // Fichier CSS externe pour les styles spécifiques aux composants

function Profile({ user }) { // Supposons que le token soit passé en prop
 
  
  
 



  if (!user) {
    return <div className="profile-no-user" style={{ paddingTop: 150, height: '100vh' }}>No user information available.</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-details">
        <h2>Profile</h2>
        <p>
          <strong>Name:</strong> {user.fullName}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </div>
  );
}

export default Profile;
