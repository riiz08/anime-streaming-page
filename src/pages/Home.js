import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Title from '../components/Title'
import Theme from '../components/Theme'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import CardWrap from '../components/CardWrap'
import React, {useState, useEffect} from 'react'
import NewReleaseContext from '../context/NewReleaseContext'
import PopularContext from '../context/PopularContext'



const Home = () => {
  
  const [loading, setLoading] = useState(true)
  
  
  
  useEffect(() => {
    setLoading(false)
  }, [])
  
  if(loading) {
    return (
      <div loading className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
	<div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
	<h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
	<p className="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.</p>
</div>
      )
  }
  
  
  
  
  
  
  return (
    <div>
    <Theme>
     <Navbar/>
     <Hero/>
     <Title title="Ongoing" />
     <CardWrap>
     <NewReleaseContext/>
     </CardWrap>
     <Title title="Most popular" />
     <CardWrap>
     <PopularContext/>
     </CardWrap>
     <Title title="Top Airing"/>
     <Carousel/>
     <Footer/>
     </Theme>
    </div>
    )
}

export default Home