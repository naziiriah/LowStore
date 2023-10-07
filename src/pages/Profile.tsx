import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GetUser } from '../Redux/Handlers/User/AsyncThunks';
const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const id = 11;
    dispatch(GetUser({ id }));
  }, []);
  return <></>;
};

export default Profile;
