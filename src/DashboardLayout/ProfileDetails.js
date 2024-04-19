import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProfileDetails = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfileDetails = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProfileDetails();
  }, [id]);

  return (
    <div>
      <h2>Product Detail</h2>
      {profile ? (
        <div>
          <p>Product ID: {profile.id}</p>
          <p>Title: {profile.title}</p>
          <p>Body: {profile.body}</p>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProfileDetails;
