import React from 'react';

const Box = ({
  children,
  colWidth,
  colMdWidth,
  colSmWidth,
  border,
  padding,
  bg,
  centered = false,
  color,
  fontWeight,
  hideOnMobile,
}) => {
  return (
    <div
      className={`col-${colWidth} ${
        centered ? 'd-flex justify-content-center' : ''
      } col-md-${colMdWidth} col-sm-${colSmWidth} ${
        hideOnMobile ? 'd-none d-sm-block' : ''
      }`}
      style={{
        border,
        padding,
        backgroundColor: `${bg}`,
        color,
        fontWeight,
        overflow: 'scroll',
      }}
    >
      {children}
    </div>
  );
};

const Container = ({ children, bg, padding = '3rem 0', id }) => {
  return (
    <div
      style={{
        backgroundColor: `${bg}`,
        padding,
        minHeight: `100%`,
      }}
      className="container-fluid'"
      id={id}
    >
      <div
        className='container container-fluid'
        style={{
          backgroundSize: 'contain',
        }}
      >
        {children}
      </div>
    </div>
  );
};

const List = ({ children }) => {
  return <ul className='nav d-flex'>{children}</ul>;
};

const ListItem = ({ children, link = null, emptyTarget = false }) => {
  return (
    <li
      // TO-DO Find a better way to have underline behavior for the nav items
      className='nav-item hover-underline'
      style={{
        color: `${CustomColors.white}`,
        padding: '0px 30px',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        paddingTop: '5px',
        float: 'left',
      }}
    >
      <a
        href={`${link}`}
        style={{
          color: `${CustomColors.white}`,
          textTransform: 'uppercase',
          fontWeight: 'bold',
          textDecoration: 'none',
        }}
        target={emptyTarget ? '_empty' : ''}
      >
        {children}
      </a>
    </li>
  );
};

const Row = ({ children, padding = '10px 0px', height }) => {
  return (
    <div
      className='row'
      style={{
        padding,
      }}
    >
      {children}
    </div>
  );
};

const Logo = () => {
  return (
    <div
      style={{
        padding: '5px 8px',
        border: `3px solid ${CustomColors.white}`,
        width: '150px',
        height: '50px',
      }}
    >
      <p
        style={{
          color: `${CustomColors.white}`,
          fontSize: '22px',
        }}
      >
        Brady Dukart
      </p>
    </div>
  );
};

const ColorBar = ({ width, height, fill }) => {
  return (
    <svg width={width} height={height}>
      <rect
        width={width * 0.8}
        height={height * 0.8}
        style={{
          fill,
        }}
      />
    </svg>
  );
};

const CustomColors = {
  blue: '#095D6A',
  yellow: '#FBBC58',
  white: '#FCF6F1',
  orange: '#F57B51',
};

const Image = ({ src, alt, width = '100%' }) => (
  <img
    src={src}
    alt={alt}
    width={width}
    style={{
      objectFit: 'contain',
    }}
  />
);

export {
  Box,
  ColorBar,
  Container,
  CustomColors,
  Image,
  List,
  ListItem,
  Logo,
  Row,
};
