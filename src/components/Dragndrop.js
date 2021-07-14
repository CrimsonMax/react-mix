import { useState } from 'react'
import './Dragndrop.css'

export const Dragndrop = () => {

  const [cardList, setCardList] = useState([
    { id: 1, order: 3, text: 'CARD 3', color: 'red' },
    { id: 2, order: 1, text: 'CARD 1', color: 'blue' },
    { id: 3, order: 2, text: 'CARD 2', color: 'green' },
    { id: 4, order: 4, text: 'CARD 4', color: 'yellow' },
  ])
  const [currentCard, setCurrentCard] = useState(null)

  function dragStartHandler(e, card) {
    setCurrentCard(card)
  }

  function dragEndHandler(e) {
    e.target.style.border = '3px solid white'
    setTimeout(() => {
      e.target.style.border = '5px solid black'
    }, 300)
  }

  function dragLeaveHandler(e) {
    e.target.style.opacity = '1'
  }

  function dragOverHandler(e) {
    e.preventDefault()
    e.target.style.opacity = '.5'
  }

  function dropHandler(e, card) {
    e.preventDefault()
    setCardList(cardList.map(elem => {
      if (elem.id === card.id) {
        return { ...elem, order: currentCard.order }
      }
      if (elem.id === currentCard.id) {
        return { ...elem, order: card.order }
      }
      return elem
    }))
    e.target.style.opacity = '1'
  }

  const sortCards = (x, y) => {
    if (x.order > y.order) {
      return 1
    } else {
      return -1
    }
  }

  return (
    <div className='drag'>
      {cardList.sort(sortCards).map(elem => (
        <div
          key={elem.id}
          className={'card'}
          style={{ background: elem.color }}
          draggable={true}
          onDragStart={e => dragStartHandler(e, elem)}
          onDragLeave={e => dragLeaveHandler(e)}
          onDragEnd={e => dragEndHandler(e)}
          onDragOver={e => dragOverHandler(e)}
          onDrop={e => dropHandler(e, elem)}
        >
          {elem.text}
        </div>
      ))}
    </div>
  )
}