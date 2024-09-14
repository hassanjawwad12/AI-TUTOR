import { Route, Routes } from "react-router-dom"
import Login from './Login'
import Parent from './Parent'
import Student from './Student'

const AuthRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Login />}
      />
      <Route path='parent-signup' element={<Parent />} />
      <Route path='student-signup' element={<Student />} />
    </Routes>
  )
}

export default AuthRoutes