import React from 'react'
import './WorkItem.css'

const WorkItem = ({ item }) => {
  return (
    <div className='app__workitem__container' >
      <div className='app__workitem__header'>
        <div>
          <p className='headertext__neuton' >{item.title}</p>
          <p className='subheadertext__neuton' >{item.sub_title}</p>
        </div>
        <p className='app__workitem__hire_dates'>{item.hire_dates}</p>
        <div className='app__workitem__header__company-info'>
          <p className='subheadertext__neuton' >{item.company}</p>
          <p>{item.address1}</p>
          <p>{item.city}, {item.state} {item.postal}</p>
        </div>
      </div>
      <div className='divider' />
      <div className='app__workitem__info'>
        {item.experience.map((exp) => (
          <p className='p__opensans-non-cap p__spacing' >- {exp}</p>
        ))}
      </div>
    </div>
  )
}

export default WorkItem