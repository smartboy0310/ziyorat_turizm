import React, { useEffect, useState } from 'react'
import {useWindowScroll} from 'react-use'

import './GoTop.css'

import goUp from '../..//Assets/Images/goUp.svg'
function GoTop() {

  const {y: pageYOffset} = useWindowScroll()
  const [visible, setVisible] = useState(false)

  useEffect(()=>{
    if(pageYOffset>500) {
      setVisible(true)
    } else{
      setVisible(false)
    }

  }, [pageYOffset])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth'})

  if(!visible){
    return false
  }
  return (
    <>
      <div className="scroll__go-top" onClick={scrollToTop}>
        <img className='icons' src={goUp} alt='goto Up-icon'/>
      </div>
    </>
  )
}

export default GoTop
