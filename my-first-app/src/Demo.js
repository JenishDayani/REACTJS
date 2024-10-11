// import React, { useState } from "react";
// import Page from '../../components/Page';
import {
  Box,
  Card,
  Typography,
  Avatar,
  // IconButton,
  Grid,
  Button,
  IconButton,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
// import Scrollbar from "../../components/Scrollbar";

// type Child = {
//   name: string;
//   avatar: string;
// };
export default function Demo() {
  // const [children, setChildren] = useState([
  //   { name: "Liam Hebrew", avatar: "/static/fi_4322991.png" },
  // ]);

  // const handleAddChild = () => {
  //   const newChild: Child = {
  //     name: `Child ${children.length + 1}`,
  //     avatar: "",
  //   };
  //   setChildren([...children, newChild]);
  //   console.log("New child added:", newChild);
  // };

  return (
    // <Page title='select-child'>

    <Grid
      container
      sx={{
        minHeight: '100vh',
        bgcolor: '#6530D0',
        display: 'flex',
      }}
    >
      {/* logo grid */}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{
          display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'flex' },
          justifyContent: 'center',
          height: '150px',
        }}
        // padding={5}
      >
        <img width='190px' alt='' src='/static/logo_light.svg' />
      </Grid>

      {/* card grid */}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{ display: 'flex', height: '82.5vh' }}
        justifyContent='center'
        alignItems='center'
      >
        <Card
          sx={{
            width: '600px',
            padding: '20px',
            borderRadius: '10px',
            mb: 34,
            border: '1px solid #999999',
          }}
        >
          <Typography
            variant='h4'
            color='#6530D0'
            // fontWeight="bold"
            gutterBottom
            sx={{ fontFamily: 'Outfit' }}
          >
            Select Child
          </Typography>
          <Typography sx={{ color: '#999999', fontFamily: 'Outfit' }}>
            If You Wants to Add New Child
          </Typography>

          {/* Display all children */}

          <Grid
            container
            spacing={2}
            justifyContent='center' // Centers items horizontally
            alignItems='center' // Centers items vertically
            sx={{ padding: '25px' }}
          >
            {/* Card for existing child */}
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4} // Set equal size for all screen sizes
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px',
                  border: '1px solid #ccc',
                  borderRadius: '10px',
                  width: '200px', // Uniform width
                  height: '250px', // Uniform height
                }}
              >
                <Avatar
                  src='/static/fi_4322991.png'
                  sx={{
                    borderRadius: '50%',
                    width: 56,
                    height: 56,
                    marginBottom: 1,
                  }}
                />
                <Typography variant='body1' sx={{ fontFamily: 'Outfit' }}>
                  Liam Hebrew
                </Typography>
                <IconButton
                  sx={{ position: 'absolute', top: 8, right: 8 }}
                  size='small'
                >
                  <MoreVertIcon sx={{ color: '#6530D0' }} />
                </IconButton>
              </Card>
            </Grid>

            {/* Add New Child Button */}
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4} // Set equal size for all screen sizes
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px',
                  border: '1px solid #ccc',
                  borderRadius: '10px',
                  width: '200px', // Uniform width
                  height: '250px', // Uniform height
                }}
              >
                <Button
                  variant='outlined'
                  color='primary'
                  sx={{
                    borderRadius: '50%',
                    width: 56,
                    height: 56,
                    marginBottom: 1,
                    border: '1px solid #999999',
                    backgroundColor: ' #99999926',
                  }}
                >
                  <AddIcon />
                </Button>
                <Typography
                  variant='body1'
                  sx={{ fontFamily: 'Outfit', textAlign: 'center' }}
                >
                  Add New Child
                </Typography>
              </Card>
            </Grid>
          </Grid>

          {/* Add New Child Button */}
          {/* <Grid
            item
            xs={12}
            lg={7}
            sm={6}
            justifyContent='center'
            display='flex'
            alignItems='center'
          >
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '10px',
                width: '200px', // Set uniform width
                height: '250px', // Set uniform height
              }}
            >
              <Button
                variant='outlined'
                color='primary'
                sx={{
                  borderRadius: '50%',
                  width: 56,
                  height: 56,
                  marginBottom: 1,
                  border: '1px solid #999999',
                  backgroundColor: ' #99999926',
                }}
              >
                <AddIcon />
              </Button>
              <Typography
                variant='body1'
                sx={{ fontFamily: 'Outfit', textAlign: 'center' }}
              >
                Add New Child
              </Typography>
            </Card>
          </Grid> */}
        </Card>
        {/* mother & son */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: {
              xs: '300px',
              sm: '370px',
              md: '435px',
              lg: '470px',
              xl: '570px',
            },
          }}
        >
          <img
            src='/static/Group 16.png'
            alt=''
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
