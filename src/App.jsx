import BagIcons from "./Components/BagIcons"
import BagImages from "./Components/BagImages"
import Header from "./Layouts/Header"
import SortProducts from "./Layouts/SortProducts"

const App = () => {
  return (
    <div className="bg-[#000] h-min-screen">
      <Header />
      <BagIcons />
      <SortProducts />
      <BagImages />
    </div>
  )
}

export default App