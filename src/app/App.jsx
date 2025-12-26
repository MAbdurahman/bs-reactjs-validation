import React, {Fragment} from 'react';
import {Routes, Route} from 'react-router-dom';
import SignUp from '../Auth/SignUp/index.jsx';
import SignIn from '../Auth/SignIn/index.jsx';
import SignUp2 from '../Auth/SignUp2/index.jsx';
import SignIn2 from '../Auth/SignIn2/index.jsx';
import {Slide, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

   return (
      <Fragment>
         <Routes>
            <Route path='/' element={<SignIn/>}/>
            <Route path='/sign-in' element={<SignIn/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path='/sign-in-2' element={<SignIn2/>}/>
            <Route path='/sign-up-2' element={<SignUp2/>}/>
         </Routes>
         <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Slide}
         />
      </Fragment>

   );
}