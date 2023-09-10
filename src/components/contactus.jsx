import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationInfo from './locations';
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/material';

const ContactUs = () => {

  const locations = [
    {
      address: 'Plot No.22, Sanket Industrial Estate, B/H Sanket Weigh Bridge, Sarkhej-Bavla Road, Changodar, Ahmedabad, Gujarat - 382213',
      contacts: [
        { name: 'Mr. Bhupender Purohit', number: '+91-9904343848' },
        { name: 'Mr. Vinit Nohal', number: '+91-8799078849' },
      ],
    },
    {
      address: 'Survey No 346, Saijpur Gopalpur, Pirana Road, Near Raj Weigh Bridge Piplaj, Ahmedabad, Gujarat - 382405',
      contacts: [
        { name: 'Mr. Narayan Nohal', number: '+91-9898068775' },
        { name: 'Mr. Sushil Purohit', number: '+91-9879262175' },
      ],
    },
    {
      address: '57, Prakash Industrial Estate, Shahibabad, U.P. border, Ghaziabad, U.P - 201005',
      contacts: [
        { name: 'Mr. Suresh Purohit', number: '+91-9810268775' },
        { name: 'Mr. Mahavir Prasad', number: '+91-9312231469' },
      ],
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
  
    try {
      let response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      if (response.ok) {
        alert("Form submitted successfully");
      } else {
        throw new Error('Network response was not ok ' + response.statusText);
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred, please try again later");
    }
  };

  return (
      <Container id="contact-us" sx={{ pt: 8, pb: 6, maxWidth: '1200px', margin: '0 auto' }}>
        <Typography variant="h2" mt={10} textAlign="centre" sx={{ color: 'black', paddingBottom: '100px', px: 5 }}> {/* Change the header text color for a better contrast with the dark background */}
          Contact
        </Typography>

        <Grid container spacing={5} sx={{ px: 5 }}>
          {locations.map((location, index) => (
            <Grid item xs={12} md={4} key={index}>
              <LocationInfo {...location} />
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ mt: 10, mb: 10 }} />
        <Typography variant="h4" mt={10} textAlign="left" sx={{ color: 'black', paddingBottom: '50px' }}>
          Inquiry Form
        </Typography>
        <form noValidate name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <TextField fullWidth margin="normal" label="Name" variant="outlined" name="name" />
          <TextField fullWidth margin="normal" label="Email" variant="outlined" name="email" />
          <TextField fullWidth margin="normal" label="Phone Number" variant="outlined" name="phone" />
          <TextField fullWidth margin="normal" label="Message" variant="outlined" multiline rows={4} name="message" />
          <Button variant="contained" sx={{ mt: 7, backgroundColor: 'black', color: 'white' }} type="submit">
            Submit
          </Button>
        </form>


        <Container sx={{ display: 'flex', justifyContent: 'center', mt: 14 }}>
          <a href="https://www.linkedin.com/company/71651528/" target="_blank" rel="noopener noreferrer">
            <IconButton sx={{ color: 'darkgrey' }}>
              <LinkedInIcon />
            </IconButton>
          </a>
          <a href="https://www.instagram.com/bihariji_steel_tubes/" target="_blank" rel="noopener noreferrer">
            <IconButton sx={{ color: 'darkgrey' }}>
              <InstagramIcon />
            </IconButton>
          </a>
          <a href="https://api.whatsapp.com/send?phone=+919904343848" target="_blank" rel="noopener noreferrer">
            <IconButton sx={{ color: 'darkgrey' }}>
              <WhatsAppIcon />
            </IconButton>
          </a>
        </Container>
      </Container>

  );
};

export default ContactUs;
