import React from 'react'
import { ProjectCard } from '../../components'
import './Projects.css'
import data from '../../constants/data'

const Projects = () => {
  return (
    <div className='app__projects flex__center section__padding' id='projects'>
      <div className='headtext__neuton'>
        <p>Projects</p>
      </div>
      <div className='app__projects_project-item'>
        {data.projects.map((project) =>
          <ProjectCard project={project} key={project.title} />
        )}
      </div>
    </div>
  )
}

export default Projects