import { useState } from 'react'
import './DragndropAdvance.css'

export const DragndropAdvance = () => {

  const [boards, setBoards] = useState([
    {
      id: 1, title: "Сделать", items: [
        { id: 1, title: "Пойти в магазин" },
        { id: 2, title: "Выкинуть мусор" },
        { id: 3, title: "Поесть" }
      ]
    },
    {
      id: 2, title: "Проверить", items: [
        { id: 4, title: "Код ревью" },
        { id: 5, title: "Задачи на факториал" },
        { id: 6, title: "Задачи на фибоначчи" }
      ]
    },
    {
      id: 3, title: "Сделано", items: [
        { id: 7, title: "Снять видео" },
        { id: 8, title: "Смонтировать" },
        { id: 9, title: "Отрендерить" }
      ]
    },
  ])
  const [currentBoard, setCurrentBoard] = useState(null)
  const [currentItem, setCurrentItem] = useState(null)

  function dragOverHandler(e) {
    e.preventDefault()
    if (e.target.className === 'item') {
      e.target.style.boxShadow = '0 4px 3px gray'
    }
  }

  function dragLeaveHandler(e) {
    e.target.style.boxShadow = 'none'
  }

  function dragStartHandler(e, elem, item) {
    setCurrentBoard(elem)
    setCurrentItem(item)
  }

  function dragEndHandler(e) {
    e.target.style.boxShadow = 'none'
  }

  function dropHandler(e, elem, item) {
    e.preventDefault()

    const currentIndex = currentBoard.items.indexOf(currentItem)
    currentBoard.items.splice(currentIndex, 1)
    const dropIndex = elem.items.indexOf(item)
    elem.items.splice(dropIndex + 1, 0, currentItem)

    setBoards(boards.map(x => {
      if (x.id === elem.id) {
        return elem
      }

      if (x.id === currentBoard.id) {
        return currentBoard
      }

      return x
    }))

    e.target.style.boxShadow = 'none'
  }

  function dropCardHandler(e, elem) {

    if (e.target.className !== "item") {

      elem.items.push(currentItem)
      const currentIndex = currentBoard.items.indexOf(currentItem)
      currentBoard.items.splice(currentIndex, 1)

      setBoards(boards.map(x => {
        if (x.id === elem.id) {
          return elem
        }

        if (x.id === currentBoard.id) {
          return currentBoard
        }

        return x

      }))
    }
  }

  return (
    <div className='drag-ad'>
      {
        boards.map(elem => (
          <div
            key={elem.id}
            className="board"
            onDragOver={e => dragOverHandler(e)}
            onDrop={e => dropCardHandler(e, elem)}
          >
            <div className="board__title">
              {elem.title}
            </div>
            {
              elem.items.map(item => (
                <div
                  key={item.id}
                  className="item"
                  draggable={true}
                  onDragOver={e => dragOverHandler(e)}
                  onDragLeave={e => dragLeaveHandler(e)}
                  onDragStart={e => dragStartHandler(e, elem, item)}
                  onDragEnd={e => dragEndHandler(e)}
                  onDrop={e => dropHandler(e, elem, item)}
                >
                  {item.title}
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}