import React from 'react';
import sanityClient from './client';
import BlockContent from '@sanity/block-content-to-react';
import {
  Box,
  Container,
  ColorBar,
  CustomColors,
  List,
  ListItem,
  Row,
  Image,
} from './design';
import ContactForm from './ContactForm';

import Navbar from './Navbar';

function App() {
  const [landingPageItems, setLandingPageItems] = React.useState(null);

  React.useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "landingpageitems"]{
        header,
        slug,
        body,
      }`
      )
      .then((data) => setLandingPageItems(data))
      .catch(console.error);
  }, []);

  return (
    <div
      className='App'
      style={{
        scrollSnapType: 'y proximity',
      }}
    >
      <Container bg={`${CustomColors.blue}`} padding='0'>
        <Navbar />
        <Row height='300px'>
          <Box colWidth='12' colMdWidth='6' colSmWidth='12'>
            <h1
              style={{
                fontSize: '5rem',
                textTransform: 'uppercase',
                color: CustomColors.yellow,
                fontWeight: 'bold',
                marginTop: '18rem',
              }}
            >
              Oh Hey There!
            </h1>
            <Box padding='2rem 0'>
              <h3
                style={{
                  color: CustomColors.white,
                  marginTop: '4rem',
                }}
              >
                My name is Brady and I'm a ...
              </h3>
              <div className=''></div>
              <h4
                style={{
                  color: CustomColors.yellow,
                  fontSize: '3rem',
                  textTransform: 'uppercase',
                }}
              >
                <Image src='./images/skills.gif' alt='Skills' width='100%' />
              </h4>
            </Box>
          </Box>
        </Row>
      </Container>
      <Container bg={`${CustomColors.yellow}`} id='about' height='600px'>
        <Row padding='60px 0px'>
          <Box colWidth='12' centered={true} colMdWidth='6' colSmWidth='12'>
            <Image
              src='./images/brady_selfie.JPG'
              alt='Brady Dukart'
              width='50%'
            />
          </Box>
          <Box colWidth='12' colMdWidth='6' colSmWidth='12'>
            <h1
              style={{
                color: CustomColors.blue,
                textTransform: 'uppercase',
                fontWeight: 'bold',
              }}
            >
              {landingPageItems
                ? landingPageItems?.find((i) => i.slug === 'personal_intro')
                    .header
                : 'How Can I Help Ya?'}
            </h1>
            <ColorBar width='500' height='10' fill={CustomColors.orange} />
            <Box padding='2rem 0' fontWeight='bold' color={CustomColors.blue}>
              {landingPageItems && false ? (
                <BlockContent
                  blocks={
                    landingPageItems
                      ? landingPageItems?.find(
                          (i) => i.slug === 'personal_intro'
                        ).body
                      : ''
                  }
                  projectId={sanityClient.projectId}
                  dataset={sanityClient.dataset}
                />
              ) : (
                <>
                  <p>
                    Whether you need a jaw-droppingly beautiful website with an
                    intuative user interface or an engaging animated logo I'm
                    your guy! With over 5 years of industry experience in web
                    engineering, graphic design, and motion graphics, I will
                    provide you or your business with creative solutions to your
                    digital needs!
                  </p>
                  <p>
                    Having been born and raised in chilly Fargo, North Dakota
                    (oh yeah you betchya!), I was brought up with the typical
                    midwestern work ethic that I proudly pair with bleeding edge
                    web engineering technologies to provide the optimal
                    solutions for the needs of hard workers like you!
                  </p>
                </>
              )}
            </Box>
          </Box>
        </Row>
      </Container>
      <Container bg={`${CustomColors.orange}`} id='code'>
        <Row>
          <div className='d-flex justify-content-center'>
            <Box
              style={{
                margin: 'auto',
                width: '50%',
              }}
            >
              <h2
                style={{
                  color: CustomColors.blue,
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                }}
              >
                {landingPageItems
                  ? landingPageItems.find((i) => i.slug === 'code').header
                  : "Let's Talk Code"}
              </h2>
              <ColorBar width='330' height='10' fill={CustomColors.yellow} />
            </Box>
          </div>
        </Row>
        <Row>
          <Box colWidth='12' colMdWidth='6' colSmWidth='12'>
            <Image src='./images/code.gif' alt='Code' width='75%' />
          </Box>
          <Box colWidth='12' colMdWidth='6' colSmWidth='12'>
            <Box padding='2rem 0' fontWeight='bold' color={CustomColors.blue}>
              {landingPageItems && false ? (
                <BlockContent
                  blocks={
                    landingPageItems
                      ? landingPageItems?.find((i) => i.slug === 'code').body
                      : ''
                  }
                  projectId={sanityClient.projectId}
                  dataset={sanityClient.dataset}
                />
              ) : (
                <>
                  <p>
                    I live in the React ecosystem. The possibilities provided by
                    this wonderful library are endless. With a strong knowledge
                    of the most recent API can weild the power of React to build
                    your website you're invisioning!
                  </p>
                  <p>
                    Utilizing front-end UI libraries like{' '}
                    <a
                      href='https://getbootstrap.com/'
                      target='_blank'
                      rel='noreferrer'
                      style={{
                        color: CustomColors.blue,
                      }}
                    >
                      Bootstrap
                    </a>
                    ,{' '}
                    <a
                      href='https://material-ui.com/'
                      target='_blank'
                      rel='noreferrer'
                      style={{
                        color: CustomColors.blue,
                      }}
                    >
                      Material
                    </a>
                    , or{' '}
                    <a
                      href='https://chakra-ui.com/'
                      target='_blank'
                      rel='noreferrer'
                      style={{
                        color: CustomColors.blue,
                      }}
                    >
                      Chakra
                    </a>{' '}
                    and modern hosting services like{' '}
                    <a
                      href='https://www.netlify.com/'
                      target='_blank'
                      rel='noreferrer'
                      style={{
                        color: CustomColors.blue,
                      }}
                    >
                      Netlify
                    </a>
                    , paired with a custom CMS built on{' '}
                    <a
                      href='https://www.sanity.io/'
                      target='_blank'
                      rel='noreferrer'
                      style={{
                        color: CustomColors.blue,
                      }}
                    >
                      Sanity
                    </a>
                    , we can work together to build the perfect website and
                    back-end content structure to suit your needs.
                  </p>
                </>
              )}
            </Box>
          </Box>
        </Row>
      </Container>
      <Container bg={`${CustomColors.yellow}`} id='design'>
        <Row>
          <div className='d-flex justify-content-center'>
            <Box
              style={{
                margin: 'auto',
                width: '50%',
              }}
            >
              <h2
                style={{
                  color: CustomColors.blue,
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                }}
              >
                {landingPageItems
                  ? landingPageItems.find((i) => i.slug === 'design').header
                  : ''}
              </h2>
              <ColorBar width='520' height='10' fill={CustomColors.orange} />
            </Box>
          </div>
        </Row>
        <Row>
          <Box colWidth='12' colMdWidth='6' colSmWidth='12'>
            <Box padding='2rem 0' fontWeight='bold' color={CustomColors.blue}>
              {landingPageItems ? (
                <BlockContent
                  blocks={
                    landingPageItems
                      ? landingPageItems?.find((i) => i.slug === 'design').body
                      : ''
                  }
                  projectId={sanityClient.projectId}
                  dataset={sanityClient.dataset}
                />
              ) : (
                ''
              )}
            </Box>
          </Box>
          <Box colWidth='12' colMdWidth='6' colSmWidth='12'>
            <Image src='./images/ux.gif' alt='ux' width='100%' />
          </Box>
        </Row>
      </Container>
      <Container bg={`${CustomColors.blue}`} id='contact'>
        <Row>
          <Box centered={true}>
            <Box
              style={{
                margin: 'auto',
                width: '50%',
              }}
            >
              <h2
                style={{
                  color: CustomColors.yellow,
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                }}
              >
                Let's Work
              </h2>
              <ColorBar width='240' height='10' fill={CustomColors.orange} />
            </Box>
          </Box>
        </Row>
        <Row>
          {landingPageItems && (
            <ContactForm
              contactFormIntro={
                landingPageItems?.find((i) => i.slug === 'contact_form').body
              }
            />
          )}
        </Row>
      </Container>
      <Container bg={`${CustomColors.yellow}`} height='60px' padding='5px'>
        <Row>
          <Box colWidth='7' colSmWidth='10'>
            <p
              style={{
                color: CustomColors.blue,
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}
            >
              Brady Dukart | 2020
            </p>
          </Box>
          <Box colWidth='5' colSmWidth='2'>
            <List>
              <ListItem link='https://github.com/dukartbr' emptyTarget={true}>
                <i
                  className='fab fa-github'
                  style={{
                    fontSize: '1.5rem',
                    color: CustomColors.blue,
                  }}
                ></i>
              </ListItem>
              <ListItem
                link='https://www.instagram.com/dogdadbrad/'
                emptyTarget={true}
              >
                <i
                  className='fab fa-instagram'
                  style={{
                    fontSize: '1.5rem',
                    color: CustomColors.blue,
                  }}
                ></i>
              </ListItem>
            </List>
          </Box>
        </Row>
      </Container>
    </div>
  );
}

export default App;
