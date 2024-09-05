import { InputHTMLAttributes, ReactNode } from "react";
import Input from "./style";
import { match } from "ts-pattern";

type LabeledInputProps = {
    width?: "full" | "fit-content" | number
};

const LabeledInput = ({ width, ...props }: LabeledInputProps & InputHTMLAttributes<HTMLInputElement>): ReactNode => {
    const widthString = match(width)
        .with("fit-content", () => "w-fit")
        .with("full", () => "w-full")
        .otherwise(() => "w" + width?.toString());

    return (
        <Input className={`border-slate-700 ${widthString}`} { ...props }/>
    );
};

export default LabeledInput;