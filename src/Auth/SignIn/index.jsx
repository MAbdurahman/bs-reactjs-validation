import {useState} from 'react';
import {Link} from 'react-router-dom';
import './styles.css';


export default function SignIn() {
   const [isShowing, setIsShowing] = useState(false);
   const [formData, setFormData] = useState({
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
      <section className='sign__in'>
         <h3 className='sign__in__title'>Sign In</h3>
         <form action='' onSubmit={handleSubmit} className='sign__in__form'>
            <div className='sign__in__form--group'>
               <label htmlFor='email'>Email</label>
               <input type='text' id='email' name='email' onChange={handleChange} />
            </div>
            <div className='sign__in__form--group'>
               <label htmlFor='password'>Password</label>
               <input type='password' id='password' name='password' onChange={handleChange}/>
            </div>
            <button type='submit' className='sign__in__form--button'>Sign In</button>
            <p className='sign__in__form--text'>Do not have an account? <Link to='/sign-up'>Sign Up</Link></p>
         </form>
      </section>

   );
}