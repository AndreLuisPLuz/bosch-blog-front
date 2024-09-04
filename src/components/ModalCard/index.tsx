import { ReactNode } from "react";
import { BackPane, DialogCard, CloseButtonRow, FormCard } from "./style";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import IconButton from "../IconButton";
import closeIcon from "../../../../assets/close.png";

type DialogModalCardProps = {
    variant: "dialog";
    children: ReactNode | ReactNode[];
    toggle: () => void;
};

type FormModalCardProps = {
    variant: "form"
    action?: string;
    children: ReactNode | ReactNode[];
    toggle: () => void;
};

type ModalCardProps = DialogModalCardProps | FormModalCardProps;

const ModalCard = (props: ModalCardProps): ReactNode => {
    switch (props.variant) {
        case "dialog": return DialogModalCard(props);
        case "form": return FormModalCard(props);
    };
};

const DialogModalCard = (props: DialogModalCardProps): ReactNode => {
    useLockBodyScroll();

    return (
        <BackPane>
            <DialogCard>
                <CloseButtonRow>
                    <IconButton icon={ closeIcon } onClick={ props.toggle } className="relative left-3"/>
                </CloseButtonRow>
                { props.children }
            </DialogCard>
        </BackPane>
    );
};

const FormModalCard = (props: FormModalCardProps): ReactNode => {
    useLockBodyScroll();

    return (
        <BackPane>
            <FormCard action={ props.action }>
                <CloseButtonRow>
                    <IconButton icon={ closeIcon } onClick={ props.toggle } className="relative left-3"/>
                </CloseButtonRow>
                { props.children }
            </FormCard>
        </BackPane>
    );
};

export default ModalCard;