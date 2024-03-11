// import NavItem from "../navItem/NavItem";
// import NavMenu from "../navMenu/NavMenu";
// import { EDDAAPP, EDDASONGS, SONGOFGODS, SONGOFHEROES } from "./../header/HeaderItemList";

// const MobileMenu = ({ isOpen = false }) => {
//     return ( 
//         <>
//             <div className="header_mobile_menu_background-b" style={{ display: isOpen ? 'flex' : 'none' }}  />
//             <div className="header_mobile_menu_background-w" style={{ display: isOpen ? 'flex' : 'none' }}>
//                 <nav className="header_mobile_menu_item">
//                     <NavItem text="Goðakvæði">
//                         <NavMenu items={SONGOFGODS} />
//                     </NavItem>    
//                     <NavItem text="Hetjukvæði">
//                         <NavMenu items={SONGOFHEROES} />
//                     </NavItem>    
//                     <NavItem text="Eddukvæði">
//                         <NavMenu items={EDDASONGS} />
//                     </NavItem>    
//                     <NavItem text="Viðbætir">
//                         <NavMenu items={EDDAAPP} />
//                     </NavItem>    
//                 </nav>
// 			</div>
//         </>
//      );
// }
 
// export default MobileMenu;

import React, { useRef, useEffect } from 'react';
import NavItem from "../navItem/NavItem";
import NavMenu from "../navMenu/NavMenu";
import { EDDAAPP, EDDASONGS, SONGOFGODS, SONGOFHEROES } from "./../header/HeaderItemList";

const MobileMenu = ({ isOpen = false }) => {
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                // Здесь должен быть вызов функции для закрытия меню
                // Например, setIsOpen(false), если isOpen управляется через useState
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="header_mobile_menu_background-g" style={{ display: isOpen ? 'flex' : 'none' }} />
            <div className="header_mobile_menu_background-b" style={{ display: isOpen ? 'flex' : 'none' }} ref={menuRef}>
                <nav className="header_mobile_menu_item">
                    <NavItem text="Goðakvæði">
                        <NavMenu items={SONGOFGODS} />
                    </NavItem>    
                    <NavItem text="Hetjukvæði">
                        <NavMenu items={SONGOFHEROES} />
                    </NavItem>    
                    <NavItem text="Eddukvæði">
                        <NavMenu items={EDDASONGS} />
                    </NavItem>    
                    <NavItem text="Viðbætir">
                        <NavMenu items={EDDAAPP} />
                    </NavItem>    
                </nav>
            </div>
        </>
    );
}

export default MobileMenu;