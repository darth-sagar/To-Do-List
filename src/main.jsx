import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Todolist from './Components/Todolist/Todolist.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todolist />
  </StrictMode>,
)
