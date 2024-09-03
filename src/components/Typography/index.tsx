import { ReactNode } from "react";
import { match } from "ts-pattern";

type Variant = {
    variant: "p" | "span",
}

type TypographyProps = {
    fontSize?: "sm" | "md" | "lg",
    fontWeight?: "light" | "regular" | "bold",
    fontStyle?: "italic" | "not-italic",
    children: ReactNode | ReactNode[]
};

const fetchStyle = (typography: TypographyProps) => {
    const size = match(typography.fontSize)
        .with("sm", () => "text-sm")
        .with("md", () => "text-base")
        .with("lg", () => "text-lg")
        .otherwise(() => "text-base");
    
    const weight = match(typography.fontWeight)
        .with("light", () => "font-light")
        .with("regular", () => "font-regular")
        .with("bold", () => "font-bold")
        .otherwise(() => "font-regular");

    const style = typography.fontStyle ?? "not-italic";
    
    return { size, weight, style };
};

const Typography = (props: TypographyProps & Variant): ReactNode => {
    return match (props.variant)
        .with("p", () => PTypography(props))
        .with("span", () => SpanTypography(props))
        .exhaustive();
};

const PTypography = (props: TypographyProps): ReactNode => {
    const {size, weight, style} = fetchStyle(props);

    return (
        <p className={`${size} ${weight} ${style}`}>{ props.children }</p>
    );
};

const SpanTypography = (props: TypographyProps): ReactNode => {
    const {size, weight, style} = fetchStyle(props);

    return (
        <span className={`${size} ${weight} ${style}`}>{ props.children }</span>
    );
};

export default Typography;