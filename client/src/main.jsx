import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider} from "@react-oauth/google"



createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <GoogleOAuthProvider clientId="870741796498-hfepjcr3nevbrefv1isqs7fb8244g414.apps.googleusercontent.com"> 
    <App/> 
    </GoogleOAuthProvider>
  </StrictMode>,
)
