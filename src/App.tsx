import './App.css'
import Header from './assets/components/header/Header'
import BestAuthorsList from './assets/components/authors/bestAuthorsList'
import { bestAuthors } from './assets/data/bestAuthors'
import { useState } from 'react';

function App () {
  const [bestAuthorsState, setBestAuthorsState] = useState(bestAuthors);
  return (
    <div className= "page-container">
      <Header />
      <BestAuthorsList bestAuthors={bestAuthorsState} />
    
    
    </div>
  )
 

}
  

export default App
