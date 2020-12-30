import React from 'react';
import { Box, CustomColors } from './design';
import { Formik } from 'formik';

const ContactForm = () => {
  return (
    <Box bg={CustomColors.orange} padding='8rem'>
      <p
        style={{
          color: CustomColors.white,
          fontWeight: 'bold',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        vestibulum luctus finibus. In erat quam, fringilla in ipsum ut, cursus
        gravida nibh. Donec in accumsan ex, eget lobortis ipsum. Nunc ac aliquam
        eros. Nam tempor neque faucibus, consectetur lorem a, aliquam mauris.
      </p>
      <form className='py-4'>
        <div class='form-group row'>
          <label for='staticEmail' class='col-sm-2 col-form-label'>
            <p
              style={{
                color: CustomColors.white,
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}
            >
              Name
            </p>
          </label>
          <div class='col-sm-10'>
            <input
              type='text'
              class='form-control'
              id='inputName'
              placeholder='Nice to meet ya!'
            />
          </div>
        </div>
        <div class='form-group row'>
          <label for='inputPassword' class='col-sm-2 col-form-label'>
            <p
              style={{
                color: CustomColors.white,
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}
            >
              Email
            </p>
          </label>
          <div class='col-sm-10'>
            <input
              type='text'
              class='form-control'
              id='inputEmail'
              placeholder='How Can I Reach Ya?'
            />
          </div>
        </div>
        <div class='form-group row'>
          <label for='inputPassword' class='col-sm-2 col-form-label'>
            <p
              style={{
                color: CustomColors.white,
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}
            >
              How Can I Help?
            </p>
          </label>
          <div class='col-sm-10'>
            <div class='form-group'>
              <textarea
                class='form-control'
                id='exampleFormControlTextarea1'
                rows='3'
                placeholder='Web Site, Animated Logo, Lawn Mowed, whatever you need!'
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </Box>
  );
};

export default ContactForm;
