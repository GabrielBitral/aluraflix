import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import PaginaBase from "./Pages/PaginaBase"
import NovoVideo from "./Pages/NovoVideo"
import { VideosProvider } from "./Contexts/VideoContext"

function App() {
  return (
    <BrowserRouter>
      <VideosProvider>
        <Routes>
          <Route path="/" element={<PaginaBase />}>
            <Route index element={<Home />} />
            <Route path="novo-video" element={<NovoVideo />} />
          </Route>
        </Routes>
      </VideosProvider>
    </BrowserRouter>
  )
}

export default App
