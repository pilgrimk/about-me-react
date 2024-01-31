import React from 'react'
import { Header, ProjectCard } from '../../components'
import data from '../../constants/data'
import shortid from 'shortid'

const Projects = () => {
  return (
    <div id='projects'
      className='pb-4'>
      <div className='flex flex-col items-center'>
        <Header title='Projects' />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        gap-4 mx-8'>
          {data.projects.map((item) => (
            <ProjectCard project={item} key={shortid.generate()} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
