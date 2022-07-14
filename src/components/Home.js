import { useState } from 'react'
import './Home.css'
import { Modal } from './modal/Modal'

export const Home = () => {

  const [modalActive, setModalActive] = useState(false)

  return (
    <>
      <div className="container">
        <h1>Home</h1>
        <button onClick={() => setModalActive(true)} >Окно</button>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <iframe width="100%" height="420" src="https://www.youtube.com/embed/US8ePkxYI3E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Modal>
    </>
  )
}