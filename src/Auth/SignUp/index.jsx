import {useState} from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

export default function SignUp() {
   const [isShowing, setIsShowing] = useState(false);
   const [formData, setFormData] = useState({
      username: '',
      fullname: '',
      email: '',
      password: '',
   });

   const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData({...formData, [name]: value});
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
   };


   return (
      <section className='sign_up'>
         <h3 className='sign_up__title'>Sign Up</h3>
         <form action='' className='sign_up__form' onSubmit={handleSubmit}>
            <div className='sign__up__form--group'>
               <label htmlFor='username'>Username</label>
               <input type='text' id='username' name='username' onChange={handleChange}/>
            </div>
            <div className='sign__up__form--group'>
               <label htmlFor='fullname'>Full name</label>
               <input type='text' id='fullname' name='fullname' onChange={handleChange}/>
            </div>
            <div className='sign__up__form--group'>
               <label htmlFor='email' id='email'>Email</label>
               <input type='email' id='email' name='email' onChange={handleChange}/>
            </div>
            <div className='sign__up__form--group'>
               <label htmlFor='password' id='password'>Password</label>
               <input type='password' id='password' name='password' onChange={handleChange}/>
            </div>
            <button type='submit' className='sign__up__form--button'>Sign Up</button>
            <p className='sign__up__form--text'>Already have an account? <Link to='/sign-in'>Sign In</Link></p>
         </form>
      </section>

   );
}