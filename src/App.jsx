import { Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
      <div className='App'>

        <Navbar/>

        <Routes>
          <Route path="/" element={<p>this will be the HOMEPAGE</p>}/>
          <Route path="/projects" element={<p>this will be the PROJECTS PAGE</p>}/>
          
        </Routes>
      </div>
    </>
  )
}

export default App