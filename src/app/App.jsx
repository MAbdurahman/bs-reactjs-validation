import React, {Fragment} from 'react';
import {Routes, Route} from 'react-router-dom';
import SignUp from '../Auth/SignUp/index.jsx';
import SignIn from '../Auth/SignIn/index.jsx';

export default function App() {

   return (
      <Fragment>
         <Routes>
            <Route path='/' element={<SignIn/>}/>
            <Route path='/sign-in' element={<SignIn/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>
         </Routes>
      </Fragment>

   );
}