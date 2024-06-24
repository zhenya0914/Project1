'use client'
import React, { useState } from 'react';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { username, password, email };
    console.log(userData);

  };

  return (
    <div className='register_form'>
    <form onSubmit={handleSubmit} className='form_container'>
      <div>
        <label>Имя пользователя</label>
        <input className='form_group'
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Пароль</label>
        <input className='form_group'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input className='form_group'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit" className='register_button'>Зарегистрироваться</button>
    </form>
    </div>
  );
};

export default RegisterForm;