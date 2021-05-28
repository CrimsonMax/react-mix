import './Menu.css'

export const Menu = ({
  header, items, active, setActive
}) => {
  return (
    <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
      <div className="blur" />
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <div className="menu__header">{header}</div>
        <ul>
          {
            items.map(elem =>
              <li key={elem.id}>
                <a href={elem.href}>{elem.value}</a>
              </li>
            )
          }
        </ul>
      </div>
    </div>
  )
}