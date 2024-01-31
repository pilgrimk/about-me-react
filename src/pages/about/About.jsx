import React from 'react'
import { Header, Carousel } from '../../components'
import data from '../../constants/data'
import images from '../../constants/images'
import shortid from 'shortid'

const About = () => {
  return (
    <div id='about'
      className='bg-office-space bg-cover bg-fixed pb-4'>
      <div className='flex flex-col items-center gap-2'>
        <Header title='About Me' />
        <div className='flex flex-col md:flex-row items-center
        md:space-x-8 max-w-5xl bg-slate-50 rounded-2xl mt-4 mx-4 p-4'>
          <div id='about-me-gallery' className='md:w-1/2'>
            <Carousel images={images.gallery_pics} />
          </div>
          <div id='about-me-info'
            className='w-full md:w-1/2 flex flex-col items-center'>
            {data.about_me_info.map((info) => (
              <p className='mt-2'
                key={shortid.generate()}
              >
                {info}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
