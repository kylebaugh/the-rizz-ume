import {useState} from 'react'
import Resume from '../components/Resume'
import PostingModal from '../components/PostingModal'
import TheRizz from '../components/TheRizz'

const Jobs = () => {

  

  return (
    <div id='jobPage'>
      <Resume />
      {/* <PostingModal/> */}
      <TheRizz/>
    </div>
  )
}

export default Jobs
