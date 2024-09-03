import { ReactNode } from "react";
import { Nav } from "./style";
import NavbarIcon from "./components/NavbarIcon";
import SearchBar from "./components/SearchBar";

const Navbar = (): ReactNode => {
    return (
        <Nav className="bg-blue-400 text-white">
            <NavbarIcon/>
            <SearchBar placeholder="Pesquise aqui..."/>
        </Nav>
    );
};

export default Navbar;