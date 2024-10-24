import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  FormControl,
  Grid,
  CardMedia,
  Link,
  InputLabel,
  Select,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'; // Import your custom icon

export default function Demo() {
  return (
    <Grid
      container
      sx={{
        minHeight: '100vh',
        bgcolor: '#6530D0',
        display: 'flex',
      }}
    >
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
            maxWidth: { xs: 4000, sm: 400, md: 450, lg: 500 },
            width: '95%',
            height: 'auto',
            border: '1px solid #999999',
            borderRadius: '10px',
            position: 'relative',
            overflow: 'visible',
            zIndex: 2,
            mt: { xs: 0, sm: 4, md: 6, lg: 8, xl: 10 },
          }}
        >
          <CardMedia
            component='img'
            image='/static/monkeyface.png'
            alt='Monkey Image'
            sx={{
              width: { xs: 80, sm: 110, md: 140, lg: 140 },
              height: 'auto',
              position: 'absolute',
              top: { xs: '-30px', sm: '-43px', md: '-55px', lg: '-55px' },
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1,
            }}
          />
          <CardContent
            sx={{
              borderRadius: '8px 8px 8px 8px',
              backgroundColor: '#FFFFFF14',
              border: '1px solid #999999',
            }}
          >
            <FormControl component='fieldset' fullWidth>
              <Box mt={2}>
                <Typography
                  color='#6530D0'
                  gutterBottom
                  fontFamily='outfit'
                  fontSize={{ xs: '20px', sm: '25px', md: '30px' }}
                >
                  Add Child Profile
                </Typography>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    variant='body1'
                    textAlign='center'
                    gutterBottom
                    sx={{
                      fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
                      color: '#121212',
                      fontFamily: 'Outfit',
                    }}
                  >
                    Profile
                  </Typography>
                  <Box
                    component='img'
                    src='/static/user.png'
                    alt=''
                    sx={{
                      width: {
                        xs: '50px',
                        sm: '70px',
                        md: '80px',
                        lg: '100px',
                        xl: '100px',
                      },
                      height: 'auto',
                    }}
                  />

                  <Link
                    variant='body1'
                    gutterBottom
                    textAlign='center'
                    sx={{
                      color: '#6530D0',
                      fontFamily: 'Outfit',
                    }}
                  >
                    Add photo
                  </Link>
                </Grid>
              </Box>

              <Grid container direction='column' spacing={2}>
                <Grid item>
                  <Typography sx={{ fontFamily: 'Outfit' }}>Name</Typography>
                  <TextField
                    fullWidth
                    id='Name'
                    placeholder='Eg. Liam Hebrew'
                    size='small'
                    sx={{
                      backgroundColor: '#FF96FF14',
                      fontFamily: 'Outfit',
                      mt: 1,
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography color='black' sx={{ fontFamily: 'Outfit' }}>
                    Gender
                  </Typography>
                  <FormControl
                    // error={Boolean(touched.password && errors.password)}
                    fullWidth
                    size='small'
                  >
                    <InputLabel id='userType'></InputLabel>
                    <Select
                      name='userType'
                      labelId='userType'
                      id='userType'
                      // value={values.userType}
                      label={''}
                      // onChange={handleChange}
                      MenuProps={{
                        style: {
                          maxHeight: 400,
                        },
                      }}
                      sx={{
                        textTransform: 'capitalize',
                        backgroundColor: '#FF96FF14',
                        fontFamily: 'Outfit',

                        mt: 1,
                        // "& .MuiSelect-select": {
                        //   color:
                        //     // values.userType === "boy" ? "#999999" : "inherit",
                        // },
                      }}
                      IconComponent={KeyboardArrowDownRoundedIcon}
                    >
                      {/* {UserGenderType?.map((type) => (
                      <MenuItem
                        key={type.name}
                        value={type.value}
                        sx={{
                          textTransform: 'capitalize',
                        }}
                      >
                        {type.value}
                      </MenuItem>
                      ))} */}
                    </Select>
                    {/* {Boolean(touched.userType && errors.userType) && ( */}
                    {/* <FormHelperText>{errors.userType}</FormHelperText> */}
                    {/* )} */}
                  </FormControl>
                </Grid>
                <Grid item>
                  <Typography color='black' sx={{ fontFamily: 'Outfit' }}>
                    Age
                  </Typography>
                  <FormControl
                    // error={Boolean(touched.age && errors.age)}
                    fullWidth
                    size='small'
                  >
                    <Select
                      name='age'
                      id='age'
                      // value={values.age}
                      // onChange={handleChange}
                      MenuProps={{
                        style: {
                          maxHeight: 400,
                        },
                      }}
                      sx={{
                        textTransform: 'capitalize',
                        backgroundColor: '#FF96FF14',
                        fontFamily: 'Outfit',

                        mt: 1,
                        '& .MuiSelect-select': {
                          // color: values.age === "3" ? "#999999" : "inherit",
                        },
                      }}
                      IconComponent={KeyboardArrowDownRoundedIcon}
                    >
                      {/* {UserAgeType.map((age) => (
                        <MenuItem
                          key={age.value}
                          value={age.value}
                          sx={{
                            textTransform: 'capitalize',
                          }}
                        >
                          {age.name}
                        </MenuItem>
                      ))} */}
                    </Select>
                    {/* {Boolean(touched.age && errors.age) && (
                        <FormHelperText>{errors.age}</FormHelperText>
                      )} */}
                  </FormControl>
                </Grid>
              </Grid>
            </FormControl>
            <LoadingButton
              fullWidth
              type='submit'
              variant='contained'
              // loading={isSubmitting}
              sx={{
                mt: 5,
                mb: 1,
                backgroundColor: '#6530D0',
                color: 'white',
                fontFamily: 'Outfit',
                '&:hover': {
                  backgroundColor: '#6530D0',
                },
              }}
            >
              Add Child
            </LoadingButton>
          </CardContent>
        </Card>
        {/* mother & son */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: {
              xs: '290px',
              sm: '320px',
              md: '295px',
              lg: '380px',
              xl: '540px',
            },
          }}
        >
          <img
            src='/static/Group 16.png'
            alt=''
            style={{
              width: '100%',
              height: 'auto',
              zIndex: 1,
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
