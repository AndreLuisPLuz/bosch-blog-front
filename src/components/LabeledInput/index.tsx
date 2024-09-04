import { ReactNode } from "react";
import Input from "./style";

type LabeledInputProps = {
    label: string
};

const LabeledInput = (props: LabeledInputProps): ReactNode => {
    return (
        <Input placeholder={ props.label }/>
    );
};

export default LabeledInput;