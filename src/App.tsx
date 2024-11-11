import MenuItem from "./components/MenuItem"
import { menuItems } from "./data/db"
import { useOrder } from "./hooks/useOrder"

function App() {

  const { addItem } = useOrder()

  return (
    <>
      <header className="bg-neutral-900 py-5 ">
        <h1 className="text-white text-center text-4xl">Kitty Cafe</h1>
      </header>

      <main className="max-w-7xl mx-auto my-32 grid gap-4 md:grid-cols-2">
        <div>
          <h2 className="font-black text-4xl text-center">Menu</h2>
          <div className="space-y-2 mt-5">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div>
          <h2>Order</h2>

        </div>

      </main>

    </>
  )
}

export default App