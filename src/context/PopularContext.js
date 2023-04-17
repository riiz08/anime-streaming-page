import {getPopularAnime} from '../store'
import CardPopular from '../components/CardPopular'
import { useState, useEffect } from 'react'



const PopularContext = () => {
  const [animePopular, setAnimePopular] = useState([])
  
  useEffect(() => {
    getPopularAnime().then((res) => {
      setAnimePopular(res)
    })
  }, [])
  
    return (
      animePopular.map((popanim, i) => (
        <div key={i}>
        <CardPopular title={popanim.animeTitle || popanim.animeId}
        img={popanim.animeImg}
        release={popanim.releasedDate} />
        </div>
        ))
      )
  }

export default PopularContext