import {useState} from 'react';
import {Link} from 'react-router-dom';
import {EyeInvisibleOutlined, EyeOutlined} from '@ant-design/icons';
import './styles.css';
import {validateEmailAndPassword} from '../../assets/utils/functionsUtils';
import {toast} from 'react-toastify';


export default function SignIn() {
   const [isShowing, setIsShowing] = useState(false);
   const [formData, setFormData] = useState({
      email: '',
      password: ''
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
      const {isValid, error} = validateEmailAndPassword(formData.email, formData.password);

      try {
         if (!isValid) {
            toast.error(error);
            return;
         }
         toast.success('User successfully signed in!');

      } catch(err) {
         toast.error(err.message);

      }
   };

   return (
      <section className='sign__in'>
         <h3 className='sign__in__title'>Sign In</h3>
         <form action='' onSubmit={handleSubmit} className='sign__in__form'>
            <div className='sign__in__form--group'>
               <label htmlFor='email'>Email</label>
               <input type='text' id='email' name='email'
                      placeholder='email@example.com' onChange={handleChange}/>
            </div>
            <div className='sign__in__form--group'>
               <label htmlFor='password'>Password</label>
               <div className='sign__in__form--passwordGroup'>
                  <input type={isShowing ? 'text' : 'password'} id='password'
                         name='password' placeholder='Enter password'
                         onChange={handleChange}/>
                  {
                     isShowing ? (
                        <EyeOutlined className='sign__in__form--passwordGroup--icon'
                                     onClick={togglePasswordIsShowing}/>
                     ) : (
                        <EyeInvisibleOutlined
                           className='sign__in__form--passwordGroup--icon'
                           onClick={togglePasswordIsShowing}/>
                     )
                  }
               </div>
            </div>
            <button type='submit' className='sign__in__form--button'>Sign In</button>
            <p className='sign__in__form--text'>Do not have an account? <span
               className='sign__in__form--text--link'><Link
               to='/sign-up-2'>Sign Up</Link></span></p>
         </form>
      </section>
   );
}