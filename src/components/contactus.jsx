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
        alert("Form submission failed");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred, please try again later");
    }
  };

  return (
    <Container id="contact-us" sx={{ pt: 27, pb: 10 }}>
      <Typography variant="h2" mb={2} textAlign="center">
        Contact Us
      </Typography>
      <form noValidate autoComplete="off" name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
        <TextField fullWidth margin="normal" label="Name" variant="outlined" name="name" />
        <TextField fullWidth margin="normal" label="Email" variant="outlined" name="email" />
        <TextField fullWidth margin="normal" label="Phone Number" variant="outlined" name="phone" />
        <TextField fullWidth margin="normal" label="Message" variant="outlined" multiline rows={4} name="message" />
        <Button variant="contained" sx={{ mt: 7, backgroundColor: 'black', color: 'white' }} type="submit">
          Submit
        </Button>
      </form>

      <Container sx={{ display: 'flex', justifyContent: 'center', mt: 14 }}>
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
