import "./bestAuthorsCard.css";
import type { bestAuthor } from "../../../types";


interface bestAuthorCardProps {
    bestAuthor: bestAuthor;

}
const bestAuthorsCard: React.FC<bestAuthorCardProps> = ({
  bestAuthor: {name, description,imageURL},
}) => {
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
        {description?.slice(0,500)}...
        <span className="view-more">View More</span>
      </p>
    
    </div>
    <div className="bestAuthor-footer">
       <button className="delete-btn">Delete</button>

    </div>

    </div>


  )
}




export default bestAuthorsCard;