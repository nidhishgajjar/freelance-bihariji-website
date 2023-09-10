import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import DialogBox from './dialogbox';

const AboutUs = () => {
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };

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
          <div style={{ textAlign: 'right' }}>
            <button 
              onClick={openDialog} 
              className="mt-12 bg-gray-800 text-white py-2 px-4 rounded-xl hover:bg-gray-800 transition-colors duration-300"
              style={{ textAlign: 'left' }}
            >
              More about the product
            </button>
          </div>

          <DialogBox open={open} setOpen={setOpen} title="Premier Supplier in the Industry">
            <br />
            <p>
              Bihariji Steel Pipes is known for its comprehensive range of HFIW/ERW mild steel pipes, galvanized steel pipes, seamless tubes, and structural rectangular and square hollow sections.
            </p>
            <br />
            <p>
              We cater to a wide array of sectors, including agriculture, oil, public health, housing, irrigation, and engineering, both domestically and internationally. Our extensive distributorship comprises GI pipes ranging from a 15mm NB to a 150mm NB, and MS Black pipes stretching from a 15mm NB diameter all the way to a 500mm NB diameter. Our inventory offers options with thickness from 1.60mm to 8.20mm and lengths up to 12 meters, all conforming to ISI, API, and BIS specifications, and thereby adhering to international standards.
            </p>
            <br />
            <p>
              We’re known as the go-to distributor for Hollow, Steel & Square sections; Structural, Rectangular, and Round Hollow sections; Mild Steel Black ERW square tubes, and rectangular tubes & round hollow section tubes. We provide tailor-made hot rolled steel sections to meet specific customer requirements. To ensure the safe delivery to our valued customers, all our sections come with an anti-rust oil coating. Bihariji Steel Pipes - where quality meets precision, and customer satisfaction is our priority. Trust us, we’ve got you covered…and coated.
            </p>
            <br />
          </DialogBox>
        </Container>
      </Box>
    </>
  );
};

export default AboutUs;