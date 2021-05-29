import { useState } from 'react'
import { Modal } from './modal/Modal'
import './Popup.css'

export const Popup = () => {

  const [modalActive, setModalActive] = useState(false)

  return (
    <div className="popup">
      <main>
        <button className="open-btn" onClick={() => setModalActive(true)} >Открыть модальное окно</button>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto iure eum, autem deleniti quaerat ipsa at minus, distinctio officiis qui sequi iste. Dolorum dolorem, velit soluta neque deserunt nostrum eius minus beatae ab praesentium accusantium odit maiores ducimus voluptate quas exercitationem rem culpa perspiciatis molestias. Libero repudiandae ex repellat eum!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto iure eum, autem deleniti quaerat ipsa at minus, distinctio officiis qui sequi iste. Dolorum dolorem, velit soluta neque deserunt nostrum eius minus beatae ab praesentium accusantium odit maiores ducimus voluptate quas exercitationem rem culpa perspiciatis molestias. Libero repudiandae ex repellat eum!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto iure eum, autem deleniti quaerat ipsa at minus, distinctio officiis qui sequi iste. Dolorum dolorem, velit soluta neque deserunt nostrum eius minus beatae ab praesentium accusantium odit maiores ducimus voluptate quas exercitationem rem culpa perspiciatis molestias. Libero repudiandae ex repellat eum!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto iure eum, autem deleniti quaerat ipsa at minus, distinctio officiis qui sequi iste. Dolorum dolorem, velit soluta neque deserunt nostrum eius minus beatae ab praesentium accusantium odit maiores ducimus voluptate quas exercitationem rem culpa perspiciatis molestias. Libero repudiandae ex repellat eum!</p>
      </main>
      <Modal active={modalActive} setActive={setModalActive}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto iure eum, autem deleniti quaerat ipsa at minus, distinctio officiis qui sequi iste. Dolorum dolorem, velit soluta neque deserunt nostrum eius minus beatae ab praesentium accusantium odit maiores ducimus voluptate quas exercitationem rem culpa perspiciatis molestias. Libero repudiandae ex repellat eum!</p>
      </Modal>
    </div>
  )
}