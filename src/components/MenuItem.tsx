


//definimons el type para este componente que se usa en los props, lo que se pase por prop debe estarf definido en esta firma para que no genere conflicto
type MenuItemProps = {
    item: MenuItem
    addItem: (item: MenuItem) => void
}
export default function MenuItem({item, addItem} : MenuItemProps) {
    

  return (
    <button 
    onClick={() => addItem(item)}
    className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200">
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  )
}
