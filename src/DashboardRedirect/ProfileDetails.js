import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ProfileDetails= () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [invalidId, setInvalidId] = useState(false);

  useEffect(() => {
    const fetchProfileDetails = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setInvalidId(true);
      }
    };

    fetchProfileDetails();
  }, [id]);

  if (invalidId) {
    
    return (
      <div>
        <h2>Profile not found</h2>
        <p>
          <Link to="/profiles">Back to Product List</Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2>Profile Details</h2>
      {profile ? (
        <div>
          <p>Profile ID: {profile.id}</p>
          <p>Title: {profile.title}</p>
          <p>Body: {profile.body}</p>
        </div>
      ) : (
        <p>Loading profile details...</p>
      )}
    </div>
  );
};

export default ProfileDetails;
