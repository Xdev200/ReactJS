import React from 'react'
import Header from './components/Header'
import Bg from './components/Bg'
import About from './components/About'
import Work from './components/Work'
import Skills from './components/Skills'
import Books from './components/Books'

class App extends React.Component{
  render(){
    return(
      <div>
        <div id = 'wrapper'>
          <Header/>
          <div id='main'>
            <About/>
            <Work/>
            <Skills/>
            <Books/>
          </div>
        </div>
        <Bg/>
      </div>
    )
  }
}

export default App