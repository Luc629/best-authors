
 import "./Navbar.css";

import { useEffect, useState, type FC } from "react";


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
            
                       
            <li>
              <a
                
                className={scrolled ? "scrolled" : ""}
                onClick={handleOpenModal}
              >
                Add Best Author
              </a>
            </li>
          </ul>
        </div>
      </nav>
      
    </>
  );
};





export default Navbar;
