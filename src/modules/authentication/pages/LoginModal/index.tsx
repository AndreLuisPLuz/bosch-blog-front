import { ReactNode } from "react";
import ModalCard from "../../../../components/ModalCard";
import Typography from "../../../../components/Typography";
import ModalCardRow from "../../../../components/ModalCardRow";

type LoginModalProps = {
    toggle: () => void,
};

const LoginModal = (props: LoginModalProps): ReactNode => {
    return (
        <ModalCard variant="form" action="/" toggle={ props.toggle }>
            <ModalCardRow>
                
            </ModalCardRow>
        </ModalCard>
    );
};

export default LoginModal;