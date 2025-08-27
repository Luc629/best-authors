import "./Header.css";
import { type FC } from "react";

interface HeaderProps {
    addBestAuthors?: () => void;
}

const Header: FC<HeaderProps> = () => {
    return (
        <div className= "header">
            <div className= "heading">
                <h1>Best Authors</h1>
            </div>
            
        </div>
    )
}

export default Header
    