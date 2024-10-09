import React from 'react';
import { Grid, Box } from '@mui/material';

const Demo = () => {
  return (
    <Grid container spacing={2} sx={{ height: '100vh' }}>
      {/* Div 1 */}
      <Grid
        item
        xs={12}
        sm={6}
        sx={(theme) => ({
          // On small screens, Div 1 goes to the bottom
          order: { xs: 2, sm: 1 },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        })}
      >
        <Box
          sx={{
            width: '100%',
            height: '200px',
            backgroundColor: 'lightblue',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Div 1
        </Box>
      </Grid>

      {/* Div 2 */}
      <Grid
        item
        xs={12}
        sm={6}
        sx={(theme) => ({
          // On small screens, Div 2 goes to the top
          order: { xs: 1, sm: 2 },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        })}
      >
        <Box
          sx={{
            width: '100%',
            height: '200px',
            backgroundColor: 'lightgreen',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Div 2
        </Box>
      </Grid>
    </Grid>
  );
};

export default Demo;
