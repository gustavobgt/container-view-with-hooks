import { useState, useEffect } from 'react';
import axios from 'axios';

import { User } from '../@types';

export const useUserData = () => {
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://randomuser.me/api/');
      const user = result.data.results[0];
      setUserData({
        gender: user.gender,
        email: user.email,
        location: `${user.location.city}, ${user.location.country}`,
        title: `${user.name.title}. ${user.name.first} ${user.name.last}`,
        image: user.picture.thumbnail,
      });
    };

    fetchData();
  }, []);

  return {
    gender: userData?.gender || 'N/A',
    email: userData?.email || 'N/A',
    location: userData?.location || 'N/A',
    title: userData?.title || 'N/A',
    image: userData?.image || '',
  };
};
