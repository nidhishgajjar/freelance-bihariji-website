import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import jsw from '../assets/jsw.png';
import apollo from '../assets/apollo.png';
import sg from '../assets/sg.png';
import asian from '../assets/asian.png';
import surya from '../assets/surya.png';
import amns from '../assets/amns.png';

const Distributors = () => {
  const distributorImages = [
    jsw,
    sg,
    apollo,
    amns,
    surya,
    asian,
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
            Authorized Distributors
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
