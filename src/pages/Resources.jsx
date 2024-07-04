
// GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCG3x5_67j-YGsZ88dWDSbhA&key=[YOUR_API_KEY] HTTP/1.1

import { useEffect, useState } from "react"
import CardProject from "../components/CardProject"

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json


export default function Resources() {

  const [videos, setVideos] = useState([])

  const getData = async () => {
    try {
      const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&order=date&maxResults=20&channelId=UCG3x5_67j-YGsZ88dWDSbhA&key=AIzaSyBX_A85ou2Nu499D3LlGawM-Fk6ic_8xFE`)
      const data = await response.json()
      const arregloVideos = data.items.map((item) => {
        return {
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          image: item.snippet.thumbnails.high.url,
          link: `https://www.youtube.com/watch?v=${item.id.videoId}`
        }
      })
      setVideos(arregloVideos)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <section className='p-8 2xl:p-12 min-h-[100vh]'>
      <div className="text-left">
        <h2 className='text-white text-5xl font-pixel_digivolve '>Recursos</h2>
        <h1 className="mt-4 text-3xl text-white">Aprende las tecnologias mas demandadas en la industria con nuestro contenido <strong className="text-gray">gratuito.</strong></h1>
      </div>


      <section className=' mt-16 flex flex-wrap justify-between gap-y-4'>
        {
          videos.length > 0 ?
            videos.map(v => <CardProject key={v.id} {...v} />)
            :
            null
        }
      </section>
    </section>
  )
}
