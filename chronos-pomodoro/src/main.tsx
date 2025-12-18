import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Teste from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Teste/>
      <div>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
      </div>
  </StrictMode>,
)
