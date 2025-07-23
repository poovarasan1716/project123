// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'
// import { AppProvider } from './context/AppContext.jsx'
// import { AppProvider1 } from './context/AppContext1.jsx'

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//    <AppProvider>
//     <App/>
//    </AppProvider>
//   </BrowserRouter>,
// )


// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'
// import { AppProvider } from './context/AppContext.jsx'
// import { AppProvider1 } from './context/AppContext1.jsx'


// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <AppProvider>
//    <AppProvider1>
//     <App/>
//    </AppProvider1>
//     </AppProvider>
//   </BrowserRouter>
// )


import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

// Context Providers
import { AppProvider } from './context/AppContext.jsx'
import { AppProvider1 } from './context/AppContext1.jsx'
import { AppProvider2 } from './context/AppContext2.jsx'
import { AppProvider3 } from './context/AppContext3.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppProvider>
      <AppProvider1>
        <AppProvider2>
          <AppProvider3>
            <App />
          </AppProvider3>
        </AppProvider2>
      </AppProvider1>
    </AppProvider>
  </BrowserRouter>
)
