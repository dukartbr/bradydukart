import React from 'react';
import { Box, Container, List, ListItem, Logo, Row } from './design';

const Navbar = () => {
  return (
    <Container height='32px' padding='0'>
      <Row>
        <Box colWidth='12' colSmWidth='12' colMdWidth='6'>
          <Logo />
        </Box>
        <Box colWidth='12' colSmWidth='12' colMdWidth='6' hideOnMobile={true}>
          <List>
            <ListItem link='#about'>About</ListItem>
            <ListItem link='#code'>Code</ListItem>
            <ListItem link='#design'>Design</ListItem>
            <ListItem link='#contact'>Contact</ListItem>
          </List>
        </Box>
      </Row>
    </Container>
  );
};

export default Navbar;
