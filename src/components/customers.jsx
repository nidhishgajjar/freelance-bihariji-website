import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const IndustriesWeServe = () => {
  return (
    <Container id="industries-we-serve" sx={{ py: 20, minHeight: '125vh', background: 'url("/path/to/dummy/image4.jpg") no-repeat center center', backgroundSize: 'cover' }}>
      <Typography variant="h2" mb={2} textAlign="left" color="black">
        Industries We Serve
      </Typography>
      <Typography variant="body1" color="white">
        (Write a brief description here about the industries you serve)
      </Typography>
    </Container>
  );
};

export default IndustriesWeServe;
