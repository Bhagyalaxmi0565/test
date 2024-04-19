import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setProfiles(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            <Link to={`/profile/${profile.id}`}>{profile.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
