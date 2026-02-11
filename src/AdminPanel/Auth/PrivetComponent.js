import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {


  const localData = window.localStorage.getItem("__ah")
  const ah = localData ? JSON.parse(localData) : null
  const isAuthenticated = ah ? true : false
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
