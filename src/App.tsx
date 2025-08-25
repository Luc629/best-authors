import './App.css'
import Header from './assets/components/header/Header'
import BestAuthorsList from './assets/components/authors/bestAuthorsList'
import { bestAuthors } from './assets/data/bestAuthors'
function App () {
  return (
    <div className= "page-container">
      <Header />
      <BestAuthorsList bestAuthors={bestAuthors} />
    
    
    </div>
  )
 

}
  

export default App
