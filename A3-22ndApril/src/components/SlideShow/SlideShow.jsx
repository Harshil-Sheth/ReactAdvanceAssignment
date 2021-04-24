import React from 'react'
import useSlideshow from '../../custom-hooks/useSlideShow' 
import PlayArrowSharpIcon from '@material-ui/icons/PlayArrowSharp';
import PauseSharpIcon from '@material-ui/icons/PauseSharp';
import SkipPreviousSharpIcon from '@material-ui/icons/SkipPreviousSharp';
import SkipNextSharpIcon from '@material-ui/icons/SkipNextSharp';
import './SlideShow.css'
const SlideShow = () => {
    const slides = [
        'https://images.unsplash.com/photo-1551272744-dc08dd02f2c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1949&q=80',
        'https://images.unsplash.com/photo-1551244072-5d12893278ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80',
        'https://images.unsplash.com/photo-1551267881-f198ba4aba07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1551098955-f124915c1ff3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        'https://images.unsplash.com/photo-1551058624-e9390c71d17d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80'
    ]
    const {currIndex,isPlaying,setIsPlaying,updateSlide} = useSlideshow(slides)
    
    return (
        <div>
            {slides.map((slide,index)=>
            currIndex===index&&
            <div className='courosel'>
                <img src={slide} style={{height:'100vh', width:'100%'}} alt='Images' />
                <div className='icons'>
                <SkipPreviousSharpIcon className='icon'  onClick={()=>updateSlide()}/>
                {isPlaying?
                    <PauseSharpIcon className='icon' fontSize='large' onClick={()=>setIsPlaying(false)}/>
                    :
                    <PlayArrowSharpIcon className='icon' fontSize='large' onClick={()=>setIsPlaying(true)}/>
                    }
                
                <SkipNextSharpIcon className='icon' fontSize='large' onClick={()=>updateSlide('next')}/>
                </div>
                </div>
               
            
            )}
        </div>
    )
}

export default SlideShow
