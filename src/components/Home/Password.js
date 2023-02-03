import React, { useState } from 'react';

const Password = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div>
      <input
        type={isPasswordVisible ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={togglePasswordVisibility}>
        {isPasswordVisible ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};

export default Password;