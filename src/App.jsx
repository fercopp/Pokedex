import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Home from './Pages/Home/Home'
import SharedLayout from './Layout/SharedLayout/SharedLayout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout><Outlet /></SharedLayout>}>
          <Route index element={<Home />} /> 
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
