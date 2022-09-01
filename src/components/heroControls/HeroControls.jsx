import React from 'react'
import {BsPlusCircle, BsPlayFill} from 'react-icons/bs'
import {AiOutlineExclamationCircle} from 'react-icons/ai' 
import './HeroControlsStyle.css'
const HeroControls = () => {
return(
<div className= 'hero-controls'>
<span><BsPlusCircle/><p>My list</p></span>
<button className='white-fill'><BsPlayFill/>Play</button>
<span><AiOutlineExclamationCircle/>Info</span>
</div>
)
}
export default HeroControls