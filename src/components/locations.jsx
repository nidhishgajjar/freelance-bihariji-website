import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PhoneIcon from '@mui/icons-material/Phone';
import Box from '@mui/material/Box';

const LocationInfo = ({ address, contacts }) => {
  const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  // Extract city from address
  const city = address.split(',').slice(-2, -1)[0].trim();

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <iframe
          title="Google Maps"
          width="100%"
          height="300"
          frameborder="0"
          src={googleMapsUrl}
          allowfullscreen
        />
        <Typography variant="body1" sx={{ textAlign: 'centre', color: 'black' , my: 4}}>
          {city} <LocationCityIcon color="action" />
        </Typography>
        {contacts.map((contact, index) => (
          <Box key={index} display="flex" justifyContent="space-between" alignItems="center" sx={{ my: 2 }}>
            <Typography variant="body2" sx={{ textAlign: 'left', color: 'black' }}>
              {contact.name}
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'left', color: '#3f51b5' }}>
              <a href={`tel:${contact.number}`} style={{ color: '#3f51b5' }}>{contact.number}</a> <PhoneIcon color="action" /> 
            </Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default LocationInfo;