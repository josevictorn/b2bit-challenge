import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AuthProvider } from './hooks/auth.tsx'
import { Routes } from './routes/index.tsx'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster position='top-right' expand={false} richColors />
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>,
)
