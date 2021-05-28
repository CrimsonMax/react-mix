import { useState } from 'react'
import './Burger.css'
import { Menu } from './menu/Menu'

export const Burger = () => {

  const [activeMenu, setActiveMenu] = useState(false)

  const items = [
    { id: 1, value: 'Главная', href: '/main' },
    { id: 2, value: 'Услуги', href: '/service' },
    { id: 3, value: 'Магазин', href: '/shop' },
    { id: 4, value: 'О нас', href: '/about' },
  ]

  return (
    <>
      <nav>
        <div className="burger-btn" onClick={() => setActiveMenu(!activeMenu)}>
          <span />
        </div>
      </nav>
      <main>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto iure eum, autem deleniti quaerat ipsa at minus, distinctio officiis qui sequi iste. Dolorum dolorem, velit soluta neque deserunt nostrum eius minus beatae ab praesentium accusantium odit maiores ducimus voluptate quas exercitationem rem culpa perspiciatis molestias. Libero repudiandae ex repellat eum!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto iure eum, autem deleniti quaerat ipsa at minus, distinctio officiis qui sequi iste. Dolorum dolorem, velit soluta neque deserunt nostrum eius minus beatae ab praesentium accusantium odit maiores ducimus voluptate quas exercitationem rem culpa perspiciatis molestias. Libero repudiandae ex repellat eum!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto iure eum, autem deleniti quaerat ipsa at minus, distinctio officiis qui sequi iste. Dolorum dolorem, velit soluta neque deserunt nostrum eius minus beatae ab praesentium accusantium odit maiores ducimus voluptate quas exercitationem rem culpa perspiciatis molestias. Libero repudiandae ex repellat eum!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto iure eum, autem deleniti quaerat ipsa at minus, distinctio officiis qui sequi iste. Dolorum dolorem, velit soluta neque deserunt nostrum eius minus beatae ab praesentium accusantium odit maiores ducimus voluptate quas exercitationem rem culpa perspiciatis molestias. Libero repudiandae ex repellat eum!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto iure eum, autem deleniti quaerat ipsa at minus, distinctio officiis qui sequi iste. Dolorum dolorem, velit soluta neque deserunt nostrum eius minus beatae ab praesentium accusantium odit maiores ducimus voluptate quas exercitationem rem culpa perspiciatis molestias. Libero repudiandae ex repellat eum!</p>
      </main>

      <Menu
        header={'Бургер меню'}
        items={items}
        active={activeMenu}
        setActive={setActiveMenu}
      />
    </>
  )
}