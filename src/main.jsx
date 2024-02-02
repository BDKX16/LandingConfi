import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  BrowserRouter,
  Routes
} from "react-router-dom";
import MenuCompra from './pages/MenuCompra.jsx'
import MenuCompraV1 from './pages/MenuCompraV1.jsx'
import ContactUs from './pages/ContactUs.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="order" element={<MenuCompra />} />
      {/* ... etc. */}
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/order" element={<MenuCompra />} />
        <Route path="/orderv1" element={<MenuCompraV1 />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
   </BrowserRouter>
  </React.StrictMode>,
)
