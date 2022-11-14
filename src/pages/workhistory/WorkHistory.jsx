import React from 'react'
import { WorkItem } from '../../components'
import './WorkHistory.css'
import data from '../../constants/data'

const WorkHistory = () => {
  return (
    <div className='app__workhistory app__bg flex__center section__padding' id='workhistory'>
      <div className='headtext__neuton'>
        <p>Work History</p>
      </div>
      <div className='app__wrapper_info'>
        {data.work_history.map((item) => (
          <WorkItem item={item} />
        ))}
      </div>
    </div>
  )
}

export default WorkHistory