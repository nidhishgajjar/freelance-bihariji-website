import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import statImage from '../assets/stat.jpg';  // Adjust this to your file structure

const Statistics = () => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" /> 
      <Box 
        id="statistics" 
        sx={{ 
          py: 30, 
          minHeight: '100vh', 
          background: `url(${statImage}) no-repeat center center`, 
          backgroundSize: 'cover', 
          fontFamily: 'Poppins, sans-serif', 
          color: '#333333',  // Changed to a dark color, adjust as needed
        }}
      >
        <Container>
          <Typography variant="h2" mb={2} textAlign="right">  {/* Aligned text to the left */}
            Statistics
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>  {/* Aligned text to the left */}
            {statisticsData.map((stat, index) => (
              <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', mb: 2 }}>  {/* Aligned text to the left */}
                <Typography variant="h6">{stat.label}</Typography>
                <VisibilitySensor delayedCall partialVisibility>
                  {({isVisible}) => (
                    <Typography variant="h4">
                      <CountUp end={stat.value} suffix={stat.suffix} separator="," start={isVisible ? 0 : null} duration={1} />
                    </Typography>
                  )}
                </VisibilitySensor>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

const statisticsData = [
  { label: 'Annual Turnover', value: 100000, suffix: '+' },
  { label: 'Client Network', value: 1200, suffix: '+' },
  { label: 'Distribution Channels', value: 9, suffix: '+' },
  { label: 'Ready Stock', value: 9000, suffix: '+' },
];

export default Statistics;
