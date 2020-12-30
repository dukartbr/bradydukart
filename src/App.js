import React from 'react';
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
  return (
    <div className='App'>
      <Container bg={`${CustomColors.blue}`} padding='0'>
        <Navbar />
        <Row height='300px'>
          <Box colWidth='6'>
            <h1
              style={{
                fontSize: '5rem',
                textTransform: 'uppercase',
                color: CustomColors.yellow,
                fontWeight: 'bold',
                marginTop: '8rem',
              }}
            >
              Oh Hey There!
            </h1>
            <Box padding='2rem 0'>
              <h3
                style={{
                  color: CustomColors.white,
                  marginTop: '12rem',
                }}
              >
                My name is Brady and I'm a ...
              </h3>
              <h4
                style={{
                  color: CustomColors.orange,
                  fontSize: '3rem',
                }}
              >
                Web Engineer
              </h4>
            </Box>
          </Box>
        </Row>
      </Container>
      <Container bg={`${CustomColors.yellow}`} id='about' height='600px'>
        <Row padding='60px 0px'>
          <Box colWidth='6' centered={true}>
            <Image
              src='./images/brady_selfie.JPG'
              alt='Brady Dukart'
              width='50%'
            />
          </Box>
          <Box colWidth='6'>
            <h1
              style={{
                color: CustomColors.blue,
                textTransform: 'uppercase',
                fontWeight: 'bold',
              }}
            >
              How Can I Help Ya?
            </h1>
            <ColorBar width='500' height='10' fill={CustomColors.orange} />
            <Box padding='2rem 0'>
              <p
                style={{
                  color: CustomColors.blue,
                  fontWeight: 'bold',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vestibulum luctus finibus. In erat quam, fringilla in ipsum ut,
                cursus gravida nibh. Donec in accumsan ex, eget lobortis ipsum.
                Nunc ac aliquam eros. Nam tempor neque faucibus, consectetur
                lorem a, aliquam mauris.
              </p>
              <p
                style={{
                  color: CustomColors.blue,
                  fontWeight: 'bold',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vestibulum luctus finibus. In erat quam, fringilla in ipsum ut,
                cursus gravida nibh. Donec in accumsan ex, eget lobortis ipsum.
                Nunc ac aliquam eros. Nam tempor neque faucibus, consectetur
                lorem a, aliquam mauris.
              </p>
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
                Let's Talk Code
              </h2>
              <ColorBar width='330' height='10' fill={CustomColors.yellow} />
            </Box>
          </div>
        </Row>
        <Row>
          <Box colWidth='6'></Box>
          <Box colWidth='6'>
            <Box padding='2rem 0'>
              <p
                style={{
                  color: CustomColors.white,
                  fontWeight: 'bold',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vestibulum luctus finibus. In erat quam, fringilla in ipsum ut,
                cursus gravida nibh. Donec in accumsan ex, eget lobortis ipsum.
                Nunc ac aliquam eros. Nam tempor neque faucibus, consectetur
                lorem a, aliquam mauris.
              </p>
              <p
                style={{
                  color: CustomColors.white,
                  fontWeight: 'bold',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vestibulum luctus finibus. In erat quam, fringilla in ipsum ut,
                cursus gravida nibh. Donec in accumsan ex, eget lobortis ipsum.
                Nunc ac aliquam eros. Nam tempor neque faucibus, consectetur
                lorem a, aliquam mauris.
              </p>
              <p
                style={{
                  color: CustomColors.white,
                  fontWeight: 'bold',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vestibulum luctus finibus. In erat quam, fringilla in ipsum ut,
                cursus gravida nibh. Donec in accumsan ex, eget lobortis ipsum.
                Nunc ac aliquam eros. Nam tempor neque faucibus, consectetur
                lorem a, aliquam mauris.
              </p>
              <p
                style={{
                  color: CustomColors.white,
                  fontWeight: 'bold',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vestibulum luctus finibus. In erat quam, fringilla in ipsum ut,
                cursus gravida nibh. Donec in accumsan ex, eget lobortis ipsum.
                Nunc ac aliquam eros. Nam tempor neque faucibus, consectetur
                lorem a, aliquam mauris.
              </p>
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
                But What About Design?
              </h2>
              <ColorBar width='520' height='10' fill={CustomColors.orange} />
            </Box>
          </div>
        </Row>
        <Row>
          <Box colWidth='6'>
            <Box padding='2rem 0'>
              <p
                style={{
                  color: CustomColors.blue,
                  fontWeight: 'bold',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vestibulum luctus finibus. In erat quam, fringilla in ipsum ut,
                cursus gravida nibh. Donec in accumsan ex, eget lobortis ipsum.
                Nunc ac aliquam eros. Nam tempor neque faucibus, consectetur
                lorem a, aliquam mauris.
              </p>
              <p
                style={{
                  color: CustomColors.blue,
                  fontWeight: 'bold',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vestibulum luctus finibus. In erat quam, fringilla in ipsum ut,
                cursus gravida nibh. Donec in accumsan ex, eget lobortis ipsum.
                Nunc ac aliquam eros. Nam tempor neque faucibus, consectetur
                lorem a, aliquam mauris.
              </p>
              <p
                style={{
                  color: CustomColors.blue,
                  fontWeight: 'bold',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vestibulum luctus finibus. In erat quam, fringilla in ipsum ut,
                cursus gravida nibh. Donec in accumsan ex, eget lobortis ipsum.
                Nunc ac aliquam eros. Nam tempor neque faucibus, consectetur
                lorem a, aliquam mauris.
              </p>
              <p
                style={{
                  color: CustomColors.blue,
                  fontWeight: 'bold',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vestibulum luctus finibus. In erat quam, fringilla in ipsum ut,
                cursus gravida nibh. Donec in accumsan ex, eget lobortis ipsum.
                Nunc ac aliquam eros. Nam tempor neque faucibus, consectetur
                lorem a, aliquam mauris.
              </p>
            </Box>
          </Box>
          <Box colWidth='6'></Box>
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
          <ContactForm />
        </Row>
      </Container>
      <Container bg={`${CustomColors.yellow}`} height='60px' padding='5px'>
        <Row>
          <Box colWidth='10'>
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
          <Box colWidth='2'>
            <List>
              <ListItem link='https://github.com/dukartbr' emptyTarget={true}>
                <i
                  class='fab fa-github'
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
                  class='fab fa-instagram'
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
