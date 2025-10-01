import './App.css'
import Header from './assets/components/header/Header'
import Navbar from './assets/components/navbar/Navbar'

import { bestAuthors } from './assets/data/bestAuthors'
import { useState } from 'react';
import type { bestAuthor, NewBestAuthor } from './types';
import BestAuthorsList from './assets/components/authors/BestAuthorsList';
import NewBestAuthorModal from './assets/components/modals/NewBestAuthorModal';
import EditBestAuthorModal from './assets/components/modals/EditBestAuthorModal';
import DeleteModal from './assets/components/modals/DeleteModal';


function App () {
  const API_URL = 'http://localhost:3002/bestAuthors'; 

  const [bestAuthorsState, setBestAuthorsState] = useState(bestAuthors) ;
  
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [bestAuthorToDelete, setBestAuthorToDelete] = useState<bestAuthor | null>(null);
  const [bestAuthorToEdit, setBestAuthorToEdit] = useState<bestAuthor | null>(null);

  console.log('Loading best authors list...');
  async function fetchBestAuthors() {
    try {
      const response = await fetch (API_URL);
      const bestAuthors = await response.json ();
      return bestAuthors;
    } catch (error) {
      console.error('Error fetching bestAuthors:', error);
        return [];

    }
  }

  async function render() {
    $ ("#bestAuthorsList").empty();
    const bestAuthors = await fetchBestAuthors();

          
  }
  render ();

  const handleOpenModal = () => {
    setShowModal(true);
  };

 
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenDeleteModal = (bestAuthorId: string) => {
    const bestAuthor = bestAuthorsState.find((bestAuthor) => bestAuthor.id === bestAuthorId);
    if (bestAuthor) {
      setBestAuthorToDelete(bestAuthor);
      setShowDeleteModal(true);
    }
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setBestAuthorToDelete(null);
  };
  const handleOpenEditModal = (bestAuthorId: string) => {
    const bestAuthor = bestAuthorsState.find((bestAuthor) => bestAuthor.id === bestAuthorId);
    if (bestAuthor) {
      setBestAuthorToEdit(bestAuthor);
      setShowEditModal(true);
    }
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setBestAuthorToEdit(null);
  };
const addBestAuthor = (newBestAuthorData: NewBestAuthor) => {
    
    const newBestAuthor: bestAuthor = {
      id: `${Date.now()}`,
      ...newBestAuthorData,
      
    };

    setBestAuthorsState((prevBestAuthors) => [newBestAuthor, ...prevBestAuthors]);

    handleCloseModal();
  };

  const deleteBestAuthor = (bestAuthorId: string) => {
    
    setBestAuthorsState((prevBestAuthors) => {
    
    return prevBestAuthors.filter((bestAuthor) => bestAuthor.id !== bestAuthorId);
    });
  };

  const handleConfirmDelete = () => {
    if (bestAuthorToDelete) {
      deleteBestAuthor(bestAuthorToDelete.id);
    }
  };
  
const updateBestAuthor = (updatedBestAuthor: bestAuthor) => {
    setBestAuthorsState((prevBestAuthors) => {
      return prevBestAuthors.map((bestAuthor) => {
        if (bestAuthor.id === updatedBestAuthor.id) {
          return updatedBestAuthor;
        }
        return bestAuthor;
      });
    });
    handleCloseEditModal();
  };
const toggleFavorite = (bestAuthorId: string) => {

    setBestAuthorsState((prevBestAuthors: any[]) => {
      
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
   
    <div className="page-container">
      <Header />
      <Navbar handleOpenModal={handleOpenModal} />

        
      <BestAuthorsList
        bestAuthors={bestAuthorsState}
        onDeleteBestAuthor={handleOpenDeleteModal}
        onEditBestAuthor={handleOpenEditModal}
        onToggleFavorite={toggleFavorite}
      />

  
      <NewBestAuthorModal
        show={showModal}
        onHide={handleCloseModal}
        onSubmit={addBestAuthor}
      />

     
      <DeleteModal
        show={showDeleteModal}
        onHide={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
        bestAuthor={bestAuthorToDelete}
      />

      
      <EditBestAuthorModal
        show={showEditModal}
        onHide={handleCloseEditModal}
        onSubmit={updateBestAuthor}
        bestAuthor={bestAuthorToEdit}
      />
    </div>

  );

};
export default App;
