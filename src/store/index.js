
import axios from  'axios'

export const getRecentAnime = async () => {
  const anime = await axios.get('https://gogoanime.consumet.stream/recent-release')
  return anime.data
}

export const getPopularAnime = async () => {
  const anime = await axios.get('https://gogoanime.consumet.stream/popular')
  return anime.data
}

export const getAiring = async () => {
  const anime = await axios.get('https://gogoanime.consumet.stream/top-airing')
  return anime.data
}