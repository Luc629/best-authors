import './App.css'
import Header from './assets/components/header/Header'
import Navbar from './assets/components/navbar/Navbar'

import { bestAuthors } from './assets/data/bestAuthors'
import { useState } from 'react';
import type { bestAuthor } from './types';
import BestAuthorsList from './assets/components/authors/BestAuthorsList';


// function App() {
//   return (
//     <div className="page-container">
//       <Navbar />
//       <Header />
//       <BestAuthorsList bestAuthors={bestAuthors} />
      
//     </div>
//   );
// }

function App () {

  const [bestAuthorsState, setBestAuthorsState] = useState(bestAuthors);
  const addBestAuthor = () => { 
    const newBestAuthor: bestAuthor = {
      id: `${Date.now()}`,
      name: string,
      description: string,
      imageURL: string,
      favorite: boolean
    }

    setBestAuthorsState((prevBestAuthors) => [newBestAuthor, ...prevBestAuthors]);

    }
 
 
   
  const deleteBestAuthor = (bestAuthorsId: string) => {
    setBestAuthorsState((prevBestAuthors) => {
      return prevBestAuthors.filter((bestAuthor) => bestAuthor.id ! == bestAuthorId);
    });
  
 };

 const toggleFavorite = (bestAuthorId: string) => {
    setBestAuthorsState ((prevBestAuthors) => {

      return prevBestAuthors.map((bestAuthor) => {
        if (bestAuthor.id === bestAuthorId) {
          return {
            ...bestAuthor,
            favorite: !bestAuthor.favorite,
            updatedAt: new Date().toISOString(),
          };
        }
        return bestAuthor;
      });
    });
  };
  return (
    <div className= "page-container">
      <div className="d-flex flex-wrap gap-3"> 
      
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
    </div>
    
  )
};

 

  

export default App
