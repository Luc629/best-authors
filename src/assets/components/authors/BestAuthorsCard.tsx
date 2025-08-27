import "./bestAuthorsCard.css";
import type { bestAuthor } from "../../../types";


interface bestAuthorCardProps {
    bestAuthor: bestAuthor;
  deleteBestAuthor: (bestAuthorId:string) => void;
}
const BestAuthorsCard: React.FC<bestAuthorCardProps> = ({
  bestAuthor,
  deleteBestAuthor

}) => {
  const {name,imageURL,description,id} = bestAuthor;
  return (
    <div className="bestAuthor-card">
      {/* style={{width: "10rem"}} */}
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
       <button className="delete-btn"onClick={() => deleteBestAuthor(id)}>
        Delete
       </button>
       <button className="edit-btn" onClick={() => console.log('clicked')}>
          Edit
        </button>

    </div>

    </div>


  )
}




export default BestAuthorsCard;