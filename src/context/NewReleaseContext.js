import React, {useState, useEffect} from 'react'
import { getRecentAnime } from '../store'
import CardOngoing from '../components/CardOngoing'


const NewReleaseContext = () => {
  const [animeTerbaru, setAnimeTerbaru] = useState([])
  
  useEffect(() => {
    getRecentAnime().then((result) => {
      setAnimeTerbaru(result)
    })
  }, [])
  
  
    return (
      animeTerbaru.map((anim, i) => (
        <div key={i}>
        <CardOngoing title={anim.animeTitle} eps={anim.episodeNum} img={anim.animeImg} />
        </div>
      ))
      )
  }
  
  export default NewReleaseContext