
import "./bestAuthorsList.css";
import type { bestAuthor } from "../../../types";
import { type FC } from "react";
import BestAuthorsCard from "./BestAuthorsCard";
import BestAuthorCard from "./BestAuthorsCard";

type bestAuthorsListProps = {
  bestAuthors: bestAuthor[];
  // onDeleteBestAuthor: (bestAuthorId: string) => void;

};

// const BestAuthorsList: FC<bestAuthorsListProps> = ({ bestAuthors}) => {
//   return (
//     <div id="bestAuthor" className="bestAuthor-list">
//       {bestAuthors?.map((bestAuthor) => (
//         <BestAuthorCard key={bestAuthor.id} bestAuthor={bestAuthor} />
//       ))}
//     </div>
//   );
// };

const BestAuthorsList: FC<bestAuthorsListProps> = ({ bestAuthors, onDeleteBestAuthor, onToggleFavorite }) => {
    console.log({bestAuthors});
  function onToggleFavorite(bestAuthorsId: string, isFavorite: boolean): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div id="bestAuthors" className="bestAuthor-list">
      {bestAuthors?.map((bestAuthor) => (
        <BestAuthorsCard 
          key={bestAuthor.id}
          bestAuthor={bestAuthor}
          onDeleteBestAuthor={onDeleteBestAuthor}
          onToggleFavorite={onToggleFavorite} 
          onEditBestAuthor={function (bestAuthorId: string): void {
            throw new Error("Function not implemented.");
          } } showViewMore={function (bestAuthorId: string): void {
            throw new Error("Function not implemented.");
          } }        
        />
      ))}
    </div>
  );
};



export default BestAuthorsList;

