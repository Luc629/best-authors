import "./bestAuthorsCard.css";
import type { bestAuthor } from "../../../types";
import { IoMdHeartEmpty } from "react-icons/io";
import { TiHeartFullOutline } from "react-icons/ti";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


interface bestAuthorCardProps {
    bestAuthor: bestAuthor;
    onDeleteBestAuthor: (bestAuthorId:string) => void;
    onToggleFavorite?: (bestAuthorsId: string, isFavorite: boolean) => void;
    onEditBestAuthor: (bestAuthorId: string) => void;
    showViewMore: (bestAuthorId: string) => void;  
}
const BestAuthorsCard: React.FC<bestAuthorCardProps> = ({
  bestAuthor: { id, name,description, imageURL, favorite },
   
}) => {
  
  function onDeleteBestAuthor(id: string): void {
    throw new Error("Function not implemented.");
  }

  return (
  <div className="bestAuthor-card" key={id}>
    <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src={imageURL} alt={name}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <div className="favorite-icon">
        <div className="favorite-icon"> {favorite? 
            <TiHeartFullOutline/> :
          
            <IoMdHeartEmpty />}

        </div>
      </div>
      <h1> {name}
      </h1>
        <Card.Text>
         
        {description?.slice(0,800)}...
        <span className="view-more">View More</span>
        
        </Card.Text>
        
        <div className="bestAuthor-footer">
        <button className="delete-btn"onClick={() => onDeleteBestAuthor(id)}>
        Delete
       </button>
       
       </div>
        
      </Card.Body>
    </Card>
    </div>
  );
}

export default BestAuthorsCard;