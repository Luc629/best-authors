import './App.css'
import Header from './assets/components/header/Header'
import Navbar from './assets/components/navbar/Navbar'

import { bestAuthors } from './assets/data/bestAuthors'
import { useState } from 'react';
import type { bestAuthor } from './types';
import BestAuthorsList from './assets/components/authors/BestAuthorsList';

function App () {

  const [bestAuthorsState, setBestAuthorsState] = useState(bestAuthors);
  const addBestAuthor = () => { 
    const newBestAuthor: bestAuthor = {
      id: `${Date.now()}`,
      name: "",
      description: "",
      imageURL: "",
      favorite: true

    }

    setBestAuthorsState((prevBestAuthors) => [newBestAuthor, ...prevBestAuthors]);

    }
 
 
   
  const deleteBestAuthor = (bestAuthorsId: string) => {
    setBestAuthorsState((prevBestAuthors) => {
      return prevBestAuthors.filter((bestAuthor) => bestAuthor.id ! == bestAuthorsId);
    });
  // const updatedBestAuthors = bestAuthorsState.filter((bestAuthor) => 
  //   bestAuthor.id !==bestAuthorsId);
  //   setBestAuthorsState(updatedBestAuthors);
 };

 const toggleFavorite = (bestAuthorId: string) => {
    setBestAuthorsState ((prevBestAuthors) => {

      return prevBestAuthors.map((bestAuthor) => {
        if (bestAuthor.id === bestAuthorId) {
          return {
            ...bestAuthor,
            favorite: !bestAuthor.favorite,

          }
        }
        return bestAuthor;
      });
    });
  };
  return (
    <div className= "page-container">
      <Navbar addBestAuthor={addBestAuthor} />
      <Header />
      <BestAuthorsList 
        bestAuthors={bestAuthorsState}
        onDeleteBestAuthor={deleteBestAuthor}
        onToggleFavorite={toggleFavorite}/>
      
      <div> { bestAuthors.map(bestAuthors => (
      <div>
        { bestAuthors.name}
      </div>
     )) }

    </div>
    
    </div>
    
  )
};

 

  

export default App
