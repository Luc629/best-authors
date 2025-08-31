
import "./bestAuthorsList.css";
import type { bestAuthor } from "../../../types";
import { type FC } from "react";
import BestAuthorsCard from "./BestAuthorsCard";

type bestAuthorsListProps = {
  bestAuthors: bestAuthor[];
  onDeleteBestAuthor: (bestAuthorId: string) => void;

};


const BestAuthorsList: FC<bestAuthorsListProps> = ({ bestAuthors, onDeleteBestAuthor, onToggleFavorite }) => {
    console.log({bestAuthors});
  return (
    <div id="bestAuthors" className="bestAuthors-list">
      {bestAuthors?.map((bestAuthor) => (
        <BestAuthorsCard 
        key={bestAuthor.id}  
        bestAuthor={bestAuthor} 
        onDeleteBestAuthor= {onDeleteBestAuthor} 
        onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};



export default BestAuthorsList;

