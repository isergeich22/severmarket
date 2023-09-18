import React from 'react'
import Header from './components/Header';
import SearchForm from './components/subcomponents/Search';
import Commend from './components/Commend';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <SearchForm/>
      <Commend/>
    </React.Fragment>
  )
}

export default App;
