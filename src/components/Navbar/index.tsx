import { ReactNode, useContext } from "react";
import { LightNav, DarkNav } from "./style";
import NavbarIcon from "./components/NavbarIcon";
import SearchBar from "./components/SearchBar";
import NavbarOptions from "./components/NavbarOptions";
import { ThemeContext } from "../../contexts";
import { match } from "ts-pattern";

const Navbar = (): ReactNode => {
    const theme = useContext(ThemeContext);

    return match(theme)
        .with({ theme: "dark" }, () => <DarkVariant/>)
        .with({ theme: "light" }, () => <LightVariant/>)
        .exhaustive();
};

const LightVariant = (): ReactNode => {
    return (
        <LightNav>
            <NavbarIcon/>
            <SearchBar placeholder="Pesquise aqui..."/>
            <NavbarOptions/>
        </LightNav>
    );
};

const DarkVariant = (): ReactNode => {
    return (
        <DarkNav>
            <NavbarIcon/>
            <SearchBar placeholder="Pesquise aqui..."/>
            <NavbarOptions/>
        </DarkNav>
    );
};

export default Navbar;