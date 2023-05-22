import Navbar from "./components/Navbar";
import Automation from "./pages/Automation";
import Cloud from "./pages/Cloud";
import DevOps from "./pages/DevOps";
import Enterprise from "./pages/Enterprise";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/devops" element={<DevOps />} />
          <Route path="/cloud" element={<Cloud />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
