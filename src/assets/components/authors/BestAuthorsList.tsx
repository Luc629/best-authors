import BestAuthorsCard from "./bestAuthorsCard";
import "./bestAuthorsList.css";
import type { bestAuthor } from "../../../types";
import { type FC } from "react";

type bestAuthorsListProps = {
  bestAuthors: bestAuthor[];

};

const BestAuthorsList: FC<bestAuthorsListProps> = ({ bestAuthors }) => {
  return (
    <div id="bestAuthors" className="bestAuthors-list">
      {bestAuthors?.map((bestAuthor) => (
        <BestAuthorsCard key={bestAuthor.id} bestAuthor={bestAuthor} />
      ))}
    </div>
  );
};

export default BestAuthorsList;

