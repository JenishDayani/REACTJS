import * as React from 'react';
import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EmailIcon from '@mui/icons-material/Email';
import SvgFiles from './svgFiles';

const AiOtp = () => {
  return (
    <Grid container sx={{ height: '100vh', overflow: 'hidden' }}>
      {/* Left Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: '#8f06f1',
          color: 'white',
          padding: '2rem',
        }}
      >
        {/* <img
          src='/path-to-image.png'
          alt='Mother and Child'
          style={{ width: '70%', maxWidth: '500px', marginBottom: '1.5rem' }}
        /> */}
        <SvgFiles />

        <Typography
          variant='body1'
          sx={{ textAlign: 'center', maxWidth: '500px', lineHeight: 1.5 }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Typography>
      </Grid>

      {/* Right Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: '#8f06f1', // Change the background color of the right side
        }}
      >
        {/* Form Container with white background */}
        <Box
          sx={{
            maxWidth: '100%', // Control the max width for responsiveness
            bgcolor: 'white', // Set form background color to white
            padding: '2rem',
            borderRadius: '8px', // Optional: Add rounded corners
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Optional: Add shadow for depth
          }}
        >
          <IconButton
            href='/login'
            sx={{ marginBottom: '1rem', color: '#8f06f1' }}
          >
            <ArrowBackIcon /> Back to login
          </IconButton>

          <Typography
            variant='h4'
            sx={{ color: '#8f06f1', marginBottom: '1rem' }}
          >
            Forget Password?
          </Typography>

          <Typography
            variant='body2'
            sx={{ color: '#666', marginBottom: '1.5rem' }}
          >
            Enter your email to send the OTP code
          </Typography>

          {/* Email Field */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1.5rem',
            }}
          >
            <EmailIcon sx={{ color: '#8f06f1', marginRight: '0.5rem' }} />
            <TextField
              fullWidth
              id='email'
              type='email'
              placeholder='Eg. johnsmith@gmail.com'
              variant='outlined'
              required
            />
          </Box>

          {/* Submit Button */}
          <Button
            type='submit'
            variant='contained'
            sx={{ bgcolor: '#8f06f1', '&:hover': { bgcolor: '#7b05cc' } }}
          >
            Submit
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
export default AiOtp;
