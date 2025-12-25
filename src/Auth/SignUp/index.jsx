import {useState} from 'react';
import {Link} from 'react-router-dom';
import {EyeInvisibleOutlined, EyeOutlined} from '@ant-design/icons';
import './styles.css';

export default function SignUp() {
   const [isShowing, setIsShowing] = useState(false);
   const [formData, setFormData] = useState({
      username: '',
      fullname: '',
      email: '',
      password: '',
   });

   const togglePasswordIsShowing = () => {
      setIsShowing(!isShowing);
   };

   const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData({...formData, [name]: value});
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
   };


   return (
      <section className='sign__up'>
         <h3 className='sign__up__title'>Sign Up</h3>
         <form action='' className='sign__up__form' onSubmit={handleSubmit}>
            <div className='sign__up__form--group'>
               <label htmlFor='username'>Username</label>
               <input type='text' id='username' name='username' placeholder='Enter username' onChange={handleChange}/>
            </div>
            <div className='sign__up__form--group'>
               <label htmlFor='fullname'>Full name</label>
               <input type='text' id='fullname' name='fullname' placeholder='Enter first and last name' onChange={handleChange}/>
            </div>
            <div className='sign__up__form--group'>
               <label htmlFor='email' id='email'>Email</label>
               <input type='text' id='email' name='email' placeholder='email@example.com' onChange={handleChange}/>
            </div>
            <div className='sign__up__form--group'>
               <label htmlFor='password' id='password'>Password</label>
               <div className='sign__up__form--passwordGroup'>
                  <input type={isShowing ? 'text' : 'password'} id='password'
                         name='password' placeholder='Enter password'
                         onChange={handleChange}/>
                  {
                     isShowing ? (
                        <EyeOutlined className='sign__up__form--passwordGroup--icon'
                                     onClick={togglePasswordIsShowing}/>
                     ) : (
                        <EyeInvisibleOutlined
                           className='sign__in__form--passwordGroup--icon'
                           onClick={togglePasswordIsShowing}/>
                     )
                  }
               </div>
            </div>
            <button type='submit' className='sign__up__form--button'>Sign Up</button>
            <p className='sign__up__form--text'>Already have an account? <span
               className='sign__up__form--text--link'><Link to='/sign-in'>Sign In</Link></span></p>
         </form>
      </section>

   );
}