import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {EyeInvisibleOutlined, EyeOutlined} from '@ant-design/icons';
import {validateUserInfo, getFirstName} from '../../assets/utils/functionsUtils';
import PasswordStrengthMeter from '../../Components/PasswordStrengthMeter/index.jsx';
import useNotification from '../../assets/hooks/useNotification.jsx';
import styles from './SignUp2.module.css';

export default function SignUp2() {
   const [isShowing, setIsShowing] = useState(false);
   const {updateNotification} = useNotification();
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

      const {isValid, error} = validateUserInfo(formData.username, formData.fullname, formData.email, formData.password);
      try {
         if(!isValid) {
            return updateNotification("error", error);
         }
         const firstName = getFirstName(formData.fullname);
         updateNotification('success', `${firstName} successfully signed up!`);

      } catch(err) {
         return updateNotification("error", err.message);
      }
   };
   return (
      <section className={styles.sign__up}>
         <h3 className={styles.sign__up__title}>Sign Up</h3>
         <form action='' className={styles.sign__up__form} onSubmit={handleSubmit}>
            <div className={styles.sign__up__form__group}>
               <label className={styles.hide__label} htmlFor='username'>Username</label>
               <input type='text' id='username' name='username' placeholder='Enter username' onChange={handleChange}/>
            </div>
            <div className={styles.sign__up__form__group}>
               <label className={styles.hide__label} htmlFor='fullname'>Full name</label>
               <input type='text' id='fullname' name='fullname' placeholder='Enter first and last name' onChange={handleChange}/>
            </div>
            <div className={styles.sign__up__form__group}>
               <label className={styles.hide__label} htmlFor='email' id='email'>Email</label>
               <input type='text' id='email' name='email' placeholder='email@example.com' onChange={handleChange}/>
            </div>
            <div className={styles.sign__up__form__group}>
               <label className={styles.hide__label} htmlFor='password' id='password'>Password</label>
               <div className={styles.sign__up__form__passwordGroup}>
                  <input type={isShowing ? 'text' : 'password'} id='password'
                         name='password' placeholder='Enter password'
                         onChange={handleChange}/>
                  {
                     isShowing ? (
                        <EyeOutlined className={styles.sign__up__form__passwordGroup__icon}
                                     onClick={togglePasswordIsShowing}/>
                     ) : (
                        <EyeInvisibleOutlined
                           className={styles.sign__up__form__passwordGroup__icon}
                           onClick={togglePasswordIsShowing}/>
                     )
                  }
               </div>
            </div>
            <PasswordStrengthMeter password={formData.password}/>
            <button type='submit' className={styles.sign__up__form__button}>Sign Up</button>
            <p className={styles.sign__up__form__text}>Already have an account? <span
               className={styles.sign__up__form__text__link}><Link to='/sign-in-2'>Sign In</Link></span></p>
         </form>
      </section>

   );
}