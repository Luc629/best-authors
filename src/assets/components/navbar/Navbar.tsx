/* import "./Navbar.css";
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
        <div className="container">
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-menu">
          <ul>
            <li>
              <a 
              className={scrolled ? "scrolled" : ""}
              href="/#bestAuthors"
              onClick={addBestAuthor}
              >
                Add BestAuthor
              </a>
            </li>
          </ul>
        </div>
        </nav>
        </div>
        </>

      );
      
};
export default Navbar;

*/

import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(addBestAuthor) => alert(`selected ${addBestAuthor}`)}
    >
      <Nav.Item>
        <Nav.Link href="/#bestAuthors">
        Add Best Author</Nav.Link>
      </Nav.Item>
     
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      
      
    </Nav>
  );
}

export default Navbar;
