import { ReactNode, useContext, useEffect, useState } from "react";
import { Container } from "./style";

import NavButton from "../NavButton";
import LoginModal from "../../../../modules/authentication/pages/LoginModal";
import IconButton from "../../../IconButton";

import lightModeIcon from "../../../../assets/light-mode.png";
import darkModeIcon from "../../../../assets/night-mode.png";
import { ThemeContext } from "../../../../contexts";
import { match } from "ts-pattern";

const NavbarOptions = (): ReactNode => {
    const [shouldLoginRender, setLoginRender] = useState(false);
    const [themeIcon, setThemeIcon] = useState(lightModeIcon);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const toggleLoginModal = () => {
        setLoginRender(!shouldLoginRender);
    };

    useEffect(() => {
        const newThemeIcon = match(theme)
            .with("light", () => lightModeIcon)
            .with("dark", () => darkModeIcon)
            .exhaustive();

        setThemeIcon(newThemeIcon);
    }, [theme]);

    return (
        <>
            <Container>
                <NavButton title="Entrar" onClick={ toggleLoginModal }/>
                <IconButton icon={ themeIcon } onClick={ toggleTheme }/>
            </Container>

            { shouldLoginRender && <LoginModal toggle={ toggleLoginModal }/> }
        </>
    );
};

export default NavbarOptions;