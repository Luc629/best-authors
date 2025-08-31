import "./Navbar.css";
import { type FC, useEffect, useState } from "react";

interface NavbarProps {
    addBestAuthor: () => void; 
}

const Navbar: FC<NavbarProps> = ({addBestAuthor}) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY> 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },
      []);

      return (
        <>
        <div className="navbar-menu">
          <ul>
            <li>
              <a className={scrolled ? "scrolled" : ""} href="/#bestAuthors"
              onClick={addBestAuthor}>
                Add BestAuthor
              </a>
            </li>
          </ul>
        </div>
        
        </>

      );
      
};
export default Navbar;