import React from 'react'
import { Header, WorkItem } from '../../components'
import data from '../../constants/data'
import shortid from 'shortid'

const WorkHistory = () => {
  return (
    <div id='work-history'
      className='bg-office-space bg-cover bg-fixed pb-4'>
      <div className='flex flex-col items-center'>
        <Header title='Work History' />
        <div className='grid grid-cols-1 gap-2'>
          {data.work_history.map((item) => (
            <WorkItem item={item} key={shortid.generate()} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkHistory
