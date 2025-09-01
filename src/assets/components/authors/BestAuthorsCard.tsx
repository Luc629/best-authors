import "./bestAuthorsCard.css";
import type { bestAuthor } from "../../../types";
import { IoMdHeartEmpty } from "react-icons/io";
import { TiHeartFullOutline } from "react-icons/ti";




interface bestAuthorCardProps {
    bestAuthor: bestAuthor;
    onDeleteBestAuthor: (bestAuthorId:string) => void;
    onToggleFavorite?: (bestAuthorsId: string, isFavorite: boolean) => void;
    onEditBestAuthor: (bestAuthorId: string) => void;
    showViewMore: (bestAuthorId: string) => void;  
}
const BestAuthorsCard: React.FC<bestAuthorCardProps> = ({
  bestAuthor: { id, name,description, imageURL, favorite },
   onDeleteBestAuthor,
   onToggleFavorite,
   onEditBestAuthor,
   

}) => {
  // const {name,imageURL,description,id} = bestAuthor;
  return (
    <div className="bestAuthor-card">
      <div className="favorite-icon">
        <div className="favorite-icon"> {favorite? (
            <TiHeartFullOutline onClick={() => onToggleFavorite(id)} />
          ) : (
            <IoMdHeartEmpty onClick={() => onToggleFavorite(id)} />
          )}

        </div>
      </div>
      <h1> {name}
      </h1>
      <div className="bestAuthor-img">
        <img src={imageURL} alt={name}/>
    
      </div>
    <div className="bestAuthor-details">
      <p>
        {description?.slice(0,800)}...
        <span className="view-more">View More</span>
      </p>
    
    </div>
   
    <div className="bestAuthor-footer">
       <button className="delete-btn"onClick={() => onDeleteBestAuthor(id)}>
        Delete
       </button>
       <button className="edit-btn" onClick={() => onEditBestAuthor(id)}>
          Edit
        </button>

    </div>

    </div>


  )
}




export default BestAuthorsCard;