
import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import useOrder from "./hooks/useOrder"




export default function App() {
  // console.log(menuItems);
  const { addItem, order, removeItem } = useOrder()

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-10 grid md:grid-cols-2 gap-2">

        <div>
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItem key={item.id} addItem={addItem} item={item} />
            ))}

          </div>

        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10 ">
         
            <OrderContents order={order} removeItem={removeItem} />          

        </div>

      </main>

    </>
  )
}


