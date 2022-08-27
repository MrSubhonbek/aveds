import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Contacts } from '../Components/Contacts/Contacts';
import { Home } from '../Components/Home/Home';
import { SingIn } from '../Components/SingIn/SingIn';
import { RoutsApp } from '../shared/constant';

export const RoutesApp = () => {
  const [isSingIn, setIsSingIn] = useState(localStorage.getItem('isLoggedIn') === 'true')
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={RoutsApp.Home} element={
          isSingIn
            ? (<Navigate to={RoutsApp.Contacts} />)
            : (<Navigate to={RoutsApp.SignIn} />)
        }/> */}
        <Route path={RoutsApp.Home} element = {<Home/>}/>
        <Route path={RoutsApp.SignIn} element={isSingIn ? <Navigate to={RoutsApp.Contacts} /> : <SingIn setIsSingIn={setIsSingIn}/>}/>
        <Route path={RoutsApp.Contacts} element={isSingIn ? <Contacts /> : <Navigate to={RoutsApp.SignIn} />}/>
      </Routes>
      </BrowserRouter>
  );
};