import { ReactNode } from "react";
import { FlexEndRow, FlexStartRow } from "./style";

type FlexStartVariantProps = {
    variant: "flex-start",
    children: ReactNode | ReactNode[],
};

type FlexEndVariantProps = {
    variant: "flex-end",
    children: ReactNode | ReactNode[],
};

type ModalCardRowProps = FlexStartVariantProps | FlexEndVariantProps;

const ModalCardRow = (props: ModalCardRowProps): ReactNode => {
    switch (props.variant) {
        case "flex-start": return FlexStartModalCardRow(props);
        case "flex-end": return FlexEndModalCardRow(props);
    }
};

const FlexStartModalCardRow = (props: FlexStartVariantProps): ReactNode => {
    return (
        <FlexStartRow>
            { props.children }
        </FlexStartRow>
    );
};

const FlexEndModalCardRow = (props: FlexEndVariantProps): ReactNode => {
    return (
        <FlexEndRow>
            { props.children }
        </FlexEndRow>
    );
}

export default ModalCardRow;