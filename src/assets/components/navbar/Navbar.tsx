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
 import "./Navbar.css";

import { useEffect, useState, type FC } from "react";

import Nav from 'react-bootstrap/Nav';

interface NavbarProps {
  handleOpenModal: () => void; 
}

const Navbar: FC<NavbarProps> = ({ handleOpenModal }) => {
  
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    
    const handleScroll = () => {
      
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    }, []);


return (
     <>
      
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
       
        <div className={`navbar-brand ${scrolled ? "scrolled" : ""}`}>
          
          <a href="#">Best Authors</a>
        </div>

        <div className="navbar-menu">
          
          <ul>
            
            {/* <li>
              <a className={scrolled ? "scrolled" : ""} href="#bestauthors">
                Best Authors
              </a>
            </li> */}

            
            <li>
              <a
                // href="#bestAuthors"
                className={scrolled ? "scrolled" : ""}
                onClick={handleOpenModal}
              >
                Add Best Author
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* return ( */}
    {/* <Nav
      activeKey="/home"
      onSelect={(addBestAuthor) => alert(`selected ${addBestAuthor}`)}
    >
      <Nav.Item>
        <Nav.Link href="/#bestAuthors">
        Add Best Author</Nav.Link>
      </Nav.Item>
     
          
      ) */}
    {/* </Nav> */}
    </>
  );
};



// function Navbar() {
//   return (
//     <Nav
//       activeKey="/home"
//       onSelect={(addBestAuthor) => alert(`selected ${addBestAuthor}`)}
//     >
//       <Nav.Item>
//         <Nav.Link href="/#bestAuthors">
//         Add Best Author</Nav.Link>
//       </Nav.Item>
     
//       <Nav.Item>
//         <Nav.Link eventKey="link-1">Link</Nav.Link>
//       </Nav.Item>
      
      
//     </Nav>
//   );
// }

export default Navbar;
