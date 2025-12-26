import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {EyeInvisibleOutlined, EyeOutlined} from '@ant-design/icons';
import {validateEmailAndPassword} from '../../assets/utils/functionsUtils';
import styles from './SignIn2.module.css';

export default function SignIn2() {
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
            return console.error(error);
         }
         console.log(formData, 'User successfully signed in!');

      } catch(err) {
         console.error(err.message);

      }
   };

   return (
      <section className={styles.sign__in}>
         <h3 className={styles.sign__in__title}>Sign In</h3>
         <form action='' onSubmit={handleSubmit} className={styles.sign__in__form}>
            <div className={styles.sign__in__form__group}>
               <label className={styles.hide__label} htmlFor='email'>Email</label>
               <input type='text' id='email' name='email'
                      placeholder='email@example.com' onChange={handleChange}/>
            </div>
            <div className={styles.sign__in__form__group}>
               <label className={styles.hide__label} htmlFor='password'>Password</label>
               <div className={styles.sign__in__form__passwordGroup}>
                  <input type={isShowing ? 'text' : 'password'} id='password'
                         name='password' placeholder='Enter password'
                         onChange={handleChange}/>
                  {
                     isShowing ? (
                        <EyeOutlined className={styles.sign__in__form__passwordGroup__icon}
                                     onClick={togglePasswordIsShowing}/>
                     ) : (
                        <EyeInvisibleOutlined
                           className={styles.sign__in__form__passwordGroup__icon}
                           onClick={togglePasswordIsShowing}/>
                     )
                  }
               </div>
            </div>
            <button type='submit' className={styles.sign__in__form__button}>Sign In</button>
            <p className={styles.sign__in__form__text}>Do not have an account? <span
               className={styles.sign__in__form__text__link}><Link
               to='/sign-up-2'>Sign Up</Link></span></p>
         </form>
      </section>
   );
}