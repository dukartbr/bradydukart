import React from 'react';
import { Box, CustomColors } from './design';
import { Formik } from 'formik';
import BlockContent from '@sanity/block-content-to-react';

const ContactForm = ({ contactFormIntro }) => {
  return (
    <Box
      bg={CustomColors.orange}
      padding='2rem 1rem'
      color={CustomColors.white}
      fontWeight='bold'
    >
      <BlockContent blocks={contactFormIntro} />

      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validateOnChange={false}
        // validationSchema={FormSchema}
        onSubmit={(submitValues) => {
          console.log('submitValues', submitValues);
        }}
      >
        {({ handleSubmit, values, isSubmitting, handleChange }) => (
          <form className='py-4' onSubmit={handleSubmit} data-netlify='true'>
            <div className='form-group row'>
              <label htmlFor='inputName' className='col-sm-2 col-form-label'>
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
              <div className='col-sm-10'>
                <input
                  type='text'
                  className='form-control'
                  id='inputName'
                  name='name'
                  onChange={handleChange}
                  value={values.name}
                  placeholder='Nice To Meet Ya!'
                />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='inputEmail' className='col-sm-2 col-form-label'>
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
              <div className='col-sm-10'>
                <input
                  type='email'
                  className='form-control'
                  id='inputEmail'
                  name='email'
                  onChange={handleChange}
                  value={values.email}
                  placeholder='How Can I Reach Ya?'
                />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='inputMessage' className='col-sm-2 col-form-label'>
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
              <div className='col-sm-10'>
                <div className='form-group'>
                  <textarea
                    className='form-control'
                    id='inputMessage'
                    name='message'
                    placeholder='Web Site, Animated Logo, Lawn Mowed, Whatever You Need!'
                    onChange={handleChange}
                    value={values.message}
                  ></textarea>
                </div>
              </div>
            </div>
            <div
              className='d-flex justify-content-center'
              style={{
                marginTop: '1rem',
              }}
            >
              <button
                className='btn'
                style={{
                  backgroundColor: CustomColors.blue,
                  color: CustomColors.white,
                  textTransform: 'uppercase',
                }}
                disabled={isSubmitting}
                type='submit'
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default ContactForm;
