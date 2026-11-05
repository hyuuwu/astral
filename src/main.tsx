import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, type Theme } from 'theme-ui'
import theme from '@hackclub/theme'
import '@hackclub/theme/fonts/reg-bold.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme as Theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
