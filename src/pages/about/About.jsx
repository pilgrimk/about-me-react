import React, { useState, useEffect } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { Header } from '../../components'
import './About.css'
import data from '../../constants/data'
import images from '../../constants/images'

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const About = () => {
  const MIN = 0;
  const MAX = 6;
  const TIMER_MS = 5000;

  const [randomInt, setRandomInt] = useState(getRandomNumber(MIN, MAX));

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomInt(getRandomNumber(MIN, MAX));
    }, TIMER_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [])

  return (
    <div className='app__about app__bg flex__center section__padding' id='about'>
      <Header title='About Me'/>
      <Grid container spacing={2}
        sx={{ mt: '1rem', alignItems: 'center' }}
      >
        <Grid item xs={12} md={6}
          container
          alignItems='center'
          justifyContent='center'
        >
          <Box
            sx={{
              width: { xs: 350, sm: 400, md: 450 },
              height: { xs: 400, sm: 450, md: 500 },
              overflow: 'hidden',
            }}
          >
            <Box
              component="img"
              sx={{
                width: { xs: 300, sm: 350, md: 400 },
              }}
              alt="photo gallery"
              src={images.gallery_pics[randomInt]}
            />
          </Box>
        </Grid>
        <Grid
          item xs={12} md={6}
          sx={{
            // padding: '1.5rem',
            backgroundColor: 'hsl(47, 47%, 95%)',
          }}>
          {data.about_me_info.map((info) => (
            <Typography variant='body1'>
              <p>{info}</p>
              <br />
            </Typography>
          ))}
        </Grid>
      </Grid>
    </div>
  )
}

export default About