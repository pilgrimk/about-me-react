import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { Header, CarouselStepper } from '../../components'
import data from '../../constants/data'
import images from '../../constants/images'
import shortid from 'shortid'
import './About.css'

const About = () => {
  return (
    <div className='app__about app__bg flex__center section__padding' id='about'>
      <Header title='About Me' />
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{ mt: '1rem' }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ m: '10px 10px' }}
        >
          <CarouselStepper images={images.gallery_pics} />
        </Box>
        <Grid
          item
          xs={12} md={6}
          sx={{
            m: '10px 10px',
            backgroundColor: 'hsl(47, 47%, 95%)'
          }}
        >
          {data.about_me_info.map((info) => (
            <Typography
              variant='body1'
              key={shortid.generate()}
              sx={{ m: '20px' }}
            >
              {info}
              <br />
            </Typography>
          ))}
        </Grid>
      </Grid>
    </div>
  )
}

export default About