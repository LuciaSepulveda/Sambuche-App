import React from "react"
import ReactDOM from "react-dom"
import {ChakraProvider} from "@chakra-ui/react"
import {BrowserRouter as Router} from "react-router-dom"

import {Provider as UserProvider} from "./context/context"
import App from "./App"
import "./theme.css"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <UserProvider>
        <Router>
          <App />
        </Router>
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)
