import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Contacts } from '../Components/Contacts/Contacts';
import { Home } from '../Components/Home/Home';
import { RoutsApp } from '../shared/constant';

export const RoutesApp = () => {
  const [isSingIn, setIsSingIn] = useState(localStorage.getItem('isLoggedIn') === 'true')
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutsApp.Home} element = {<Home setIsSingIn={setIsSingIn}/>}/>
        <Route path={RoutsApp.Contacts} element={isSingIn ? <Contacts /> : <Navigate to={RoutsApp.Home} />}/>
        <Route path={RoutsApp.Any} element = {<Navigate to={RoutsApp.Home} />}/>
      </Routes>
      </BrowserRouter>
  );
};