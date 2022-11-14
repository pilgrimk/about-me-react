import React from 'react'
import { Box, Grid, IconButton, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import './Footer.css'
import data from '../../constants/data'

const Footer = () => {
  const getLinkedIcon = (title) => {
    switch (title) {
      case 'Instagram':
        return <InstagramIcon />;
      case 'Twitter':
        return <TwitterIcon />;
      case 'LinkedIn':
        return <LinkedInIcon />;
      default:
        return <FacebookIcon />;
    }
  };

  return (
    <div className='app__footer flex__center section__padding' id='footer'>
      <Grid container
        spacing={2}
        sx={{ 
          justifyContent: 'space-between', 
          maxWidth: '750px'
         }}
      >
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: {xs: '20px 0px', md: '0px 0px'}
          }}
        >
          <Typography
            variant='body1'
            sx={{ fontStyle: 'italic' }}
          >
            Mailing Information:
          </Typography>
          <Typography variant='body2'>PO Box 3573</Typography>
          <Typography variant='body2'>Scottsdale, AZ 85271</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: {xs: '20px 0px', md: '0px 0px'}
          }}
        >
          <Typography
            variant='body1'
            sx={{ fontStyle: 'italic' }}
          >
            Phone Number:
          </Typography>
          <Typography variant='body2'>M: 801-759-9947</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: {xs: '20px 0px', md: '0px 0px'}
          }}
        >
          <Typography
            variant='body1'
            sx={{ fontStyle: 'italic' }}
          >
            Social Media:
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            {data.social_media.map((media) => (
              <IconButton aria-label={media.title} href={media.link}>
                {getLinkedIcon(media.title)}
              </IconButton>
            ))}
          </Box>
        </Grid>
      </Grid>
      <div className='divider' />
      <Typography variant='body1'>
        2022. All rights reserved.
      </Typography>
    </div>
  )
}

export default Footer