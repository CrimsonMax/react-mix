import axios from 'axios'
import { useEffect, useState } from 'react'
import './Pagination.css'

export const Pagination = () => {

  /* -----STATES----- */

  const [photos, setPhotos] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [fetching, setFetching] = useState(true)
  const [totalCount, setTotalCount] = useState(0)

  /* -----HANDLERS----- */

  const scrollHandler = (e) => {

    let scrollHeight = e.target.documentElement.scrollHeight
    let scrollTop = e.target.documentElement.scrollTop
    let innerHeight = window.innerHeight

    if (scrollHeight - (scrollTop + innerHeight) < 100 && photos.length < totalCount) {
      setFetching(true)
    }

  }

  /* -----EFFECTS----- */

  useEffect(() => {
    if (fetching) {
      axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPage}`)
        .then(
          response => {
            setPhotos([...photos, ...response.data])
            setCurrentPage(prevState => prevState + 1)
            setTotalCount(response.headers['x-total-count'])
          }
        )
        .finally(
          () => setFetching(false)
        )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return function () {
      document.removeEventListener('scroll', scrollHandler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching])

  /* -----CONTENT----- */

  return (
    <div>
      {photos.map(elem => (
        <div className="photo-pic" key={elem.id}>
          <div className="title-pic">{elem.id}. {elem.title} :{elem.id}</div>
          <img src={elem.thumbnailUrl} alt="" />
        </div>
      ))}
    </div>
  )

}