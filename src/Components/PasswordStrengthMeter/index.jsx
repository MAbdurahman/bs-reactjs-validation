import React from 'react';
import styles from './PasswordStrengthMeter.module.css';
import { Check, X } from "lucide-react";


const PasswordCriteria = ({ password }) => {
   const criteria = [

      { label: "At least 8 characters", met: password.length >= 8 },
      { label: "Contains uppercase letter", met: /[A-Z]/.test(password) },
      { label: "Contains lowercase letter", met: /[a-z]/.test(password) },
      { label: "Contains a number", met: /\d/.test(password) },
      { label: "Contains special character", met: /[^A-Za-z0-9]/.test(password) },
   ];

   return (
      <div className={styles.criteria__section}>
         {criteria.map((item) => (
            <div key={item.label} className={styles.flex__alignItems__center__xs}>
               {item.met ? (
                  <Check className={styles.criteria__label} />
               ) : (
                  <X className={styles.criteria__label} />
               )}
               <span className={item.met ? `className={styles.text__grey__700}` : `className={styles.text__neutral__500}`}>{item.label}</span>
            </div>
         ))}
      </div>
   );
};

export default function PasswordStrengthMeter({password}) {
   const lowercase_pattern = /^(?=.*[a-z])/g;
   const uppercase_pattern = /^(?=.*[A-Z])/g;
   const digit_pattern = /^(?=.*\d{1,})/g;
   const special_pattern = /(?=.*[-+_!@#$%^&*?])/g;

   const getStrength = (pass) => {
      let strength = 0;
      if (pass.length >= 8) strength++;
      if (pass.match(lowercase_pattern) && pass.match(uppercase_pattern)) strength++;
      if (pass.match(digit_pattern)) strength++;
      if (pass.match(special_pattern)) strength++;
      return strength;
   };
   const strength = getStrength(password);

   const getColor = (strength) => {
      if (strength === 0) return "bg-semantic-a-200";
      if (strength === 1) return "bg-semantic-a-400";
      if (strength === 2) return "bg-semantic-w-400";
      if (strength === 3) return "bg-semantic-s-100";
      return "bg-semantic-s-400";
   };

   const getStrengthText = (strength) => {
      if (strength === 0) return "Very Weak";
      if (strength === 1) return "Weak";
      if (strength === 2) return "Fair";
      if (strength === 3) return "Good";
      return "Strong";
   };

   return (
      <div className={styles.margin__top__2}>
         <div className={styles.flex__marginBottom__1}>
            <span className={styles.text__grey__900}>Password Strength</span>
            <span
               className={styles.text__grey__800}>{getStrengthText(strength)}</span>
         </div>

         <div className={styles.flex__spaceX__1}>
            {[...Array(4)].map((_, index) => (
               <div
                  key={index}
                  className={`${styles.height__width__4}
                ${index < strength ? getColor(strength) : `${styles.bg__grey__600}`}
              `}
               />
            ))}
         </div>
         <PasswordCriteria password={password}/>
      </div>
   );
}