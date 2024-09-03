import { ReactNode } from "react";
import { Nav } from "./style";

const Navbar = (): ReactNode => {
    return (
        <Nav className="bg-blue-400 text-white">
            <span>Teste</span>
            <span>Teste</span>
            <span>Teste</span>
        </Nav>
    );
};

export default Navbar;