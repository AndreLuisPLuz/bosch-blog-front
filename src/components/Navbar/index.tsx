import { Dispatch, ReactNode, SetStateAction } from "react";
import { Nav } from "./style";
import NavbarIcon from "./components/NavbarIcon";
import SearchBar from "./components/SearchBar";
import NavbarOptions from "./components/NavbarOptions";

const Navbar = (): ReactNode => {
    return (
        <Nav className="bg-blue-400 text-white">
            <NavbarIcon/>
            <SearchBar placeholder="Pesquise aqui..."/>
            <NavbarOptions/>
        </Nav>
    );
};

export default Navbar;