import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Chat from "./pages/Chat"

const DashRoutes = () => {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="chat" element={<Chat />} />
    </Routes>
  )
}

export default DashRoutes