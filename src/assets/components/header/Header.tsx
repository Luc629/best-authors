import "./Header.css";
import { type FC } from "react";

const Header: FC = () => {
    return (
        <div className= "header">
            <div className= "heading">
                <h1>Best Authors</h1>
            </div>
            <button><a href="#bestAuthors"> Add Best Author</a>
        </button>

    </div>
    )
}

export default Header
    