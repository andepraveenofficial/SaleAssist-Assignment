import BagIcons from "./Components/BagIcons"
import BagImages from "./Components/BagImages"
import Header from "./Layouts/Header"

const App = () => {
  return (
    <div className="bg-[#000] h-min-screen">
      <Header />
      <BagIcons />
      <BagImages />
    </div>
  )
}

export default App