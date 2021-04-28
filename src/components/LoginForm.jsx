import React, { useState } from 'react';

const LoginForm = (props) => {
  const [email, setEmail] = useState('default');

  const submitHandler = (e) => {
    e.preventDefault();

    console.log('Email', email);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className='form-group'>
          <label for='exampleInputEmail1'>Email address</label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            onChange={emailChangeHandler}
            value={email}
          />
          <small id='emailHelp' className='form-text text-muted'>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className='form-group'>
          <label for='exampleInputPassword1'>Password</label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
          />
        </div>
        <div className='form-group form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            id='exampleCheck1'
          />
          <label className='form-check-label' for='exampleCheck1'>
            Check me out
          </label>
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginForm;
