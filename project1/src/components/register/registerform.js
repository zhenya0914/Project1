'use client'
import Link from "next/link"
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; 

  const RegisterForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [agree, setAgree] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { phoneNumber };
    console.log(userData);
    if (!agree) {
      alert('Вы должны согласиться с правилами использования.');
      return;
  }
  window.location.href = '/';
  };

  return (
    <div className='register_reg_form'>
    <form onSubmit={handleSubmit} className='register_form_container'>
      <div className="register_form_group">
          <label className="register_header_label">Введите номер телефона</label>
          <div className="form_description">
          На введенный номер телефона будет отправлен код. 
          Если код не придет в течение минуты, проверьте правильность набора номера телефона. 
          </div>
          <PhoneInput
           country={'kz'}
           value={phoneNumber}
           onChange={setPhoneNumber}
           inputProps={{
             name: 'phone',
             required: true,
             autoFocus: true
           }}
          inputClass="phoneInput" 
            buttonClass="phoneButton"
          />
      </div>

      <div className="register_form_group">
         <label className="register_rule_text">
            <input type="checkbox"
            id="agreeCheckbox"
            checked={agree}
            onChange={() => setAgree(!agree)} />  Я согласен с правилами использования
          </label>                     
        </div>

           
      <button type="submit" for="agreeCheckbox" disabled={!agree} className='register_reg_button'>Зарегистрироваться</button>
            
    </form>
    </div>
  );
};

export default RegisterForm;