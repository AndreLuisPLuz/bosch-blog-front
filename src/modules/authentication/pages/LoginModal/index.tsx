import { ReactNode } from "react";
import ModalCard from "../../components/ModalCard";
import Typography from "../../../../components/Typography";

type LoginModalProps = {
    toggle: () => void,
};

const LoginModal = (props: LoginModalProps): ReactNode => {
    return (
        <ModalCard toggle={ props.toggle }>
            <Typography variant="p">Teste</Typography>
        </ModalCard>
    );
};

export default LoginModal;