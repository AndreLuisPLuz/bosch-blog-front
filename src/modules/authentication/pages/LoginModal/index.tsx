import { ReactNode, useState } from "react";
import ModalCard from "../../../../components/ModalCard";
import ModalCardRow from "../../../../components/ModalCardRow";
import LabeledInput from "../../../../components/LabeledInput";
import { SubLine } from "./style";
import Typography from "../../../../components/Typography";
import { attemptLoginService } from "../../services/login/login.services";

type LoginModalProps = {
    toggle: () => void,
};

const LoginModal = (props: LoginModalProps): ReactNode => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        const loginResult = await attemptLoginService({ email, password });

        if (loginResult.status != 200) { // TODO: treat this when I have a way
            console.log(loginResult.data)
            return;
        }

        localStorage.setItem("jwtToken", loginResult.data.jwtToken);
    }

    return (
        <ModalCard variant="form" toggle={ props.toggle } action="/" handleSubmit={ handleSubmit }>
            <ModalCardRow variant="flex-start">
                <SubLine>
                    <Typography variant="h2" fontSize="lg" fontWeight="bold">Login</Typography>
                    <Typography variant="p">Entre com seu email e senha.</Typography>
                </SubLine>
            </ModalCardRow>
            <ModalCardRow variant="flex-start">
                <LabeledInput placeholder="Email" type="text" width="full" onChange={(e) => setEmail(e.target.value)}/>
            </ModalCardRow>
            <ModalCardRow variant="flex-start">
                <SubLine>
                    <LabeledInput placeholder="Senha" type="password" width="full" onChange={(e) => setPassword(e.target.value)}/>
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