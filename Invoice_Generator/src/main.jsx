import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {NextUIProvider} from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/accordion";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>

    <App />
    
    </NextUIProvider>
  </StrictMode>,
)
