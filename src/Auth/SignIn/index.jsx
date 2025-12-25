import {useState} from 'react';
import {Link} from 'react-router-dom';
import './styles.css';


export default function SignIn() {
   const [formData, setFormData] = useState({
      email: '',
      password: '',
   });

   return (
      <section className='sign_in'>
         <h2 className='sign_in__title'>Sign In</h2>
      </section>

   );
}