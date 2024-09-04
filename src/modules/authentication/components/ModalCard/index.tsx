import { ReactNode } from "react";
import { BackPane, Card } from "./style";
import { useLockBodyScroll } from "@uidotdev/usehooks";

type ModalCardProps = {
    children: ReactNode | ReactNode[]
};

const ModalCard = (props: ModalCardProps): ReactNode => {
    useLockBodyScroll();

    return (
        <BackPane>
            <Card>
                { props.children }
            </Card>
        </BackPane>
    );
};

export default ModalCard;