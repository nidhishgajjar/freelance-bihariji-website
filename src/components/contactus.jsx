import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ContactUs = () => {
  return (
    <Container id="contact-us" sx={{ py: 30 }}>
      <Typography variant="h2" mb={2} textAlign="center">
        Contact Us
      </Typography>
      <form noValidate autoComplete="off">
        <TextField fullWidth margin="normal" label="Name" variant="outlined" />
        <TextField fullWidth margin="normal" label="Email" variant="outlined" />
        <TextField fullWidth margin="normal" label="Phone Number" variant="outlined" />
        <TextField fullWidth margin="normal" label="Message" variant="outlined" multiline rows={4} />
        <Button variant="contained" sx={{ mt: 10, backgroundColor: 'black', color: 'white' }}>
          Submit
        </Button>
      </form>

      <Container sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <IconButton sx={{ color: 'darkgrey' }}>
            <FacebookIcon />
          </IconButton>
        </a>
        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
          <IconButton sx={{ color: 'darkgrey' }}>
            <TwitterIcon />
          </IconButton>
        </a>
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
        <a href="https://api.whatsapp.com/send?phone=+91-9904343848" target="_blank" rel="noopener noreferrer">
          <IconButton sx={{ color: 'darkgrey' }}>
            <WhatsAppIcon />
          </IconButton>
        </a>
      </Container>
    </Container>
  );
};

export default ContactUs;
