import { ReactNode } from "react";
import ModalCard from "../../../../components/ModalCard";
import ModalCardRow from "../../../../components/ModalCardRow";
import LabeledInput from "../../../../components/LabeledInput";
import { SubLine } from "./style";
import Typography from "../../../../components/Typography";

type LoginModalProps = {
    toggle: () => void,
};

const LoginModal = (props: LoginModalProps): ReactNode => {
    

    return (
        <ModalCard variant="form" toggle={ props.toggle }>
            <ModalCardRow variant="flex-start">
                <SubLine>
                    <Typography variant="h2" fontSize="lg" fontWeight="bold">Login</Typography>
                    <Typography variant="p">Entre com seu email e senha.</Typography>
                </SubLine>
            </ModalCardRow>
            <ModalCardRow variant="flex-start">
                <LabeledInput placeholder="Email" type="text" width="full"/>
            </ModalCardRow>
            <ModalCardRow variant="flex-start">
                <SubLine>
                    <LabeledInput placeholder="Senha" type="password" width="full"/>
                    <a href=""><Typography variant="p">Esqueceu sua senha?</Typography></a>
                </SubLine>
            </ModalCardRow>
            <ModalCardRow variant="flex-end">
                <LabeledInput placeholder="Entrar" type="submit"/>
            </ModalCardRow>
        </ModalCard>
    );
};

export default LoginModal;