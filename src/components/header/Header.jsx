import { NavLink } from "react-router-dom";
import logo from "./../../img/J-logo.png";
import NavItem from "../navItem/NavItem";
import NavMenu from "../navMenu/NavMenu";
import { EDDAAPP, EDDASONGS, SONGOFGODS, SONGOFHEROES } from "./HeaderItemList";
const HeaderComponent = () => {
	return (
		<header className="header">
			<div className="header_logo">
				<NavLink to="/">
                    <img src={logo} alt="Jardarr logo" title="Jardarr logo"/>
                </NavLink>
            </div>
			<div className="header_desktop_menu">
				<nav>
					<NavItem text="Goðakvæði">
						<NavMenu items={SONGOFGODS}/>
					</NavItem>
					<NavItem text="Hetjukvæði">
						<NavMenu items={SONGOFHEROES}/>
					</NavItem>
					<NavItem text="Eddukvæði">
						<NavMenu items={EDDASONGS}/>
					</NavItem>
					<NavItem text="Viðbætir">
						<NavMenu items={EDDAAPP}/>
					</NavItem>
				</nav>
			</div>
		</header>
	);
};

export const Header = HeaderComponent;
