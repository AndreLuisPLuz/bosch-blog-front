import { ReactNode } from "react";
import { Row } from "./style";

type ModalCardRowProps = {
    children: ReactNode | ReactNode[],
};

const ModalCardRow = (props: ModalCardRowProps): ReactNode => {
    return (
        <Row>
            { props.children }
        </Row>
    );
};

export default ModalCardRow;