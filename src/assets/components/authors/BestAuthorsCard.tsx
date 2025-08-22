import "./bestAuthorCard.css";
import type { bestAuthor } from "../../../types";


interface bestAuthorCardProps {
    bestAuthor: bestAuthor;

}
const bestAuthorsCard: React.FC<bestAuthorCardProps> = ({
  bestAuthor: {name, description,imageURL},
}) => {
  return (
    <div className="bestAuthor-card">
      <div className="bestAuthor-img">
        <img src="{imgURL" alt={`${name}`}/>

      </div>
    <div className="bestAuthor-details">
      <p>
        {description?.slice(0,300)}
      </p>
    
    </div>
    <div className="bestAuthor-footer">
       <button className="delete-btn">Delete</button>

    </div>

    </div>


  )
}




export default bestAuthorsCard;