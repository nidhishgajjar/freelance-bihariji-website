import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const AboutUs = () => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" /> 
      <Box 
        id="about-us" 
        sx={{ 
          py: 4, 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center', 
          px: '20px', 
          backgroundColor: '#F1F5F9',
          color: '#333',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        <Container>
          <Typography variant="h2" mb={2} textAlign="left">
            About Us
          </Typography>
          <Typography variant="body2" textAlign="left" sx={{ letterSpacing: '0.13em' }}>
            Bihariji Steel Tubes is in business since 1993. Bihariji Steel Tubes was incorporated in Ahmedabad and Delhi under the vision of Mr. NARAYAN NOHAL, Mr. SURESH PUROHIT, and Mr. SUSHIL PUROHIT. Today we have expanded to different locations with different firms operating all together. BIHARIJI STEEL TUBES, SHREE BIHARIJI STEEL TUBES, SHREE GANESH STEEL TUBES. Currently, we are operating in Ahmedabad, Mehsana, Rajkot, Surat, New Delhi, Kanpur, and Varanasi. 
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default AboutUs;
