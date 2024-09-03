import { ReactNode } from "react";
import boschIcon from "../../../../assets/bosch.svg";
import { Container, Icon } from "./style";
import Typography from "../../../Typography";

const NavbarIcon = (): ReactNode => {
    return (
        <>
            <Container>
                <Icon src={ boschIcon } alt="Bosch"/>
                <Typography fontSize="lg" fontWeight="bold" variant="span">Blog</Typography>
            </Container>
        </>
    );
};

export default NavbarIcon;