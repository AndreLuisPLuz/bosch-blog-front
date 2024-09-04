import { ReactNode, useState } from "react";
import { Container } from "./style";
import NavButton from "../NavButton";
import LoginModal from "../../../../modules/authentication/pages/LoginModal";

const NavbarOptions = (): ReactNode => {
    const [shouldLoginRender, setLoginRender] = useState(false);

    const toggleLoginModal = () => {
        console.log("Toggle");
        setLoginRender(!shouldLoginRender);
    };

    return (
        <>
            <Container>
                <NavButton title="Entrar" onClick={ toggleLoginModal }/>
            </Container>

            { shouldLoginRender && <LoginModal toggle={ toggleLoginModal }/> }
        </>
    );
};

export default NavbarOptions;