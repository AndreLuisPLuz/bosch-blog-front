import { ReactNode } from "react";
import { BackPane, Card, CloseButtonRow } from "./style";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import IconButton from "../../../../components/IconButton";
import closeIcon from "../../../../assets/close.png";

type ModalCardProps = {
    children: ReactNode | ReactNode[],
    toggle: () => void,
};

const ModalCard = (props: ModalCardProps): ReactNode => {
    useLockBodyScroll();

    return (
        <BackPane>
            <Card>
                <CloseButtonRow>
                    <IconButton icon={ closeIcon } onClick={ props.toggle } className="relative left-3"/>
                </CloseButtonRow>
                { props.children }
            </Card>
        </BackPane>
    );
};

export default ModalCard;