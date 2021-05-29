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
        <p>Working!!</p>
      </Modal>
    </>
  )
}