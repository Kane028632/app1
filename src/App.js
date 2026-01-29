import "./App.css";
import {userContext} from './context'
import Header2 from './context-header2'
import Content2 from './context-content2'
import React from "react";
function App() {
  let [user, setUser] = React.useState()
  return (
    <userContext.Provider value = {[user,setUser]}>
      <Header2/>  
      <Content2/>
    </userContext.Provider>
  )
}

export default App;
