import './App.css'
import Header from './assets/components/header/Header'
import Navbar from './assets/components/navbar/Navbar'

import { bestAuthors } from './assets/data/bestAuthors'
import { useState } from 'react';
import type { bestAuthor } from './types';
import BestAuthorsList from './assets/components/authors/BestAuthorsList';

function App () {
  const [bestAuthorsState, setBestAuthorsState] = useState(bestAuthors);
  const addBestAuthors = () => { 
 // look into this <---
    setBestAuthorsState([bestAuthors, ...bestAuthorsState]);

    }
  
   
  const deleteBestAuthor = (bestAuthorsId: string) => {
  const updatedBestAuthors = bestAuthorsState.filter((bestAuthor) => 
    bestAuthor.id !==bestAuthorsId);
    setBestAuthorsState(updatedBestAuthors);
  }

  return (
    <div className= "page-container">
      <Navbar addBestAuthor={addBestAuthors} />
      <Header />
      <BestAuthorsList bestAuthors={bestAuthorsState} deleteBestAuthor={deleteBestAuthor}/>
    
    
    </div>
  )
};



  

export default App
