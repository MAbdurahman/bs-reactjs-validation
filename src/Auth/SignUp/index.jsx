import {useState} from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

export default function SignUp() {
   const [formData, setFormData] = useState({
      username: '',
      fullname: '',
      email: '',
      password: '',
   });

   return (
      <section className='sign_up'>
         <h2 className='sign_up__title'>Sign Up</h2>
      </section>

   );
}