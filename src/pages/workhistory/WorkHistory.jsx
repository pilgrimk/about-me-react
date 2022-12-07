import React from 'react'
import { Header, WorkItem } from '../../components'
import './WorkHistory.css'
import data from '../../constants/data'

const WorkHistory = () => {
  return (
    <div className='app__workhistory app__bg flex__center section__padding' id='workhistory'>
      <Header title='Work History' />
      <div className='app__wrapper_info'>
        {data.work_history.map((item) => (
          <WorkItem item={item} />
        ))}
      </div>
    </div>
  )
}

export default WorkHistory