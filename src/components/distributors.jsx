import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import jyoti from '../assets/jyoti.png';
import apollo from '../assets/apollo.png';
import goodluck from '../assets/goodluck.png';
import asian from '../assets/asian.png';
import ratnakar from '../assets/ratnakar.png';
import amns from '../assets/amns.png';

const Distributors = () => {
  const distributorImages = [
    jyoti,
    apollo,
    goodluck,
    asian,
    ratnakar,
    amns,
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" /> 
      <Box 
        id="distributors" 
        sx={{ 
          py: 20, 
          minHeight: '100vh', 
          px: '20px', 
          backgroundColor: '#F1F5F9', 
          color: '#333', 
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        <Container>
          <Typography variant="h2" mb={2} textAlign="left" sx={{ pb: 15 }}>
            Distributors
          </Typography>
          <Grid container spacing={2}>
            {distributorImages.map((image, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <img src={image} alt={`Distributor ${index + 1}`} style={{ width: '100%', maxHeight: '150px', objectFit: 'contain' }} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Distributors;
