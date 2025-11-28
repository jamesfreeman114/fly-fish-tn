import { Route, Routes } from "react-router-dom"



export const App = () => {

  return (

  
  <Routes>
    <Route path="/login" element={<h2>Here is a Login Page</h2>} />
    <Route path="/register" element={<h2>Here is a Register Page</h2>} />
    <Route path="*" element={
      <h2>Hello World</h2>
    } />
  </Routes>
  )
}
