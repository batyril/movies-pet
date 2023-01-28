import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/header/header';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export { Layout };
