import './styles/App.css'

import Home from './pages/Home'
import Jobs from './pages/Jobs';
import Profile from './pages/Profile'
import Error from './pages/Error';
import Login from './pages/Login'


import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route 
        path='/'
        element={<Home />}
      >
        <Route 
          index
          element={<Login/>}
          errorElement={<Error/>}
        />

        <Route 
          path='jobs'
          element={<Jobs/>}
          errorElement={<Error/>}
        />
        <Route 
          path='profile'
          element={<Profile/>}
          errorElement={<Error/>}
          />
        <Route 
          path='*'
          element={<Error/>}
        />

      </Route>
    </>
  )
)

function App() {
  return RouterProvider({router})
}

export default App
