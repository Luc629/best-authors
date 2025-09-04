import "./bestAuthorsCard.css";
import type { bestAuthor } from "../../../types";
import { IoMdHeartEmpty } from "react-icons/io";
import { TiHeartFullOutline } from "react-icons/ti";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


interface bestAuthorCardProps {
  bestAuthor: bestAuthor ;
  onDeleteBEstAuthor: (bestAuthorId: string) => void; 
  onToggleFavorite: (bestAuthorId: string) => void;
}

const BestAuthorCard: React.FC<bestAuthorCardProps> = ({
  bestAuthor: { id, name,description, imageURL, favorite },
  onDeleteBestAuthor,
  onToggleFavorite,
}) => {
  

  return (
    <div className="bestAuthor-card">
      <div className="favorite-icon">
        <div className="favorite-icon">
          {favorite ? (
            <TiHeartFullOutline onClick={() => onToggleFavorite(id)} />
          ) : (
            <IoMdHeartEmpty onClick={() => onToggleFavorite(id)} />
          )}
          
          </div>
      </div>
      <div className="bestAuthor-img">
        <img src={imageURL} alt={`${name}`} />
      </div>

      <div className="bestAuthor-details">
         <p>
          {description?.slice(0, 800)}...
          <span className="view-more">View More</span>
        </p>
      </div>
      <div className="bestAuthor-footer">
        <button className="edit-btn">Edit</button>
        <button className="delete-btn" onClick={() => onDeleteBestAuthor(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};



// interface bestAuthorCardProps {
//     bestAuthor: bestAuthor;
//     onDeleteBestAuthor: (bestAuthorId:string) => void;
//     onToggleFavorite?: (bestAuthorsId: string, isFavorite: boolean) => void;
//     onEditBestAuthor: (bestAuthorId: string) => void;
//     showViewMore: (bestAuthorId: string) => void;  
// }
// const BestAuthorsCard: React.FC<bestAuthorCardProps> = ({
//   bestAuthor: { id, name,description, imageURL, favorite },
   
// }) => {
//   function onEditBestAuthor(id: string): void {
//     throw new Error("Function not implemented.");
//   }

//   function onDeleteBestAuthor(id: string): void {
//     throw new Error("Function not implemented.");
//   }

//   return (
//   <div className="bestAuthor-card">
//     <Card style={{ width: '50rem' }}>
//       <Card.Img variant="top" src={imageURL} alt={name}/>
//       <Card.Body>
//         <Card.Title>{name}</Card.Title>
//         <div className="favorite-icon">
//         <div className="favorite-icon"> {favorite? 
//             <TiHeartFullOutline/> :
          
//             <IoMdHeartEmpty />}

//         </div>
//       </div>
//       <h1> {name}
//       </h1>
//         <Card.Text>
         
//         {description?.slice(0,800)}...
//         <span className="view-more">View More</span>
        
//         </Card.Text>
//         <Button variant="primary" onClick={() => onEditBestAuthor(id)}>Edit</Button>

//         <div className="bestAuthor-footer">
//         <button className="delete-btn"onClick={() => onDeleteBestAuthor(id)}>
//         Delete
//        </button>
       
//        </div>
        
//       </Card.Body>
//     </Card>
//     </div>
//   );
// }
 
// //   return (
    
// //     <div className="bestAuthor-card">
// //       <div className="favorite-icon">
// //         <div className="favorite-icon"> {favorite? (
// //             <TiHeartFullOutline onClick={() => onToggleFavorite(id)} />
// //           ) : (
// //             <IoMdHeartEmpty onClick={() => onToggleFavorite(id)} />
// //           )}

// //         </div>
// //       </div>
// //       <h1> {name}
// //       </h1>
// //       <div className="bestAuthor-img">
// //         <img src={imageURL} alt={name}/>
    
// //       </div>
// //     <div className="bestAuthor-details">
// //       <p>
// //         {description?.slice(0,800)}...
// //         <span className="view-more">View More</span>
// //       </p>
    
// //     </div>
   
// //     <div className="bestAuthor-footer">
// //        <button className="delete-btn"onClick={() => onDeleteBestAuthor(id)}>
// //         Delete
// //        </button>
// //        <button className="edit-btn" onClick={() => onEditBestAuthor(id)}>
// //           Edit
// //         </button>
        
// //     </div>

// //     </div>


// //   )
// // }




export default BestAuthorCard;