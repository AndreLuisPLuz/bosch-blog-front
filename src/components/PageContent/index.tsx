import { ReactNode, useContext } from "react";
import { LightPage, DarkPage } from "./style";
import { match } from "ts-pattern";
import { ThemeContext } from "../../contexts";

type PageContentProps = {
    children?: ReactNode | ReactNode[]
};

const PageContent = (props: PageContentProps): ReactNode => {
    const theme = useContext(ThemeContext);

    return match(theme)
        .with({ theme: "dark" }, () => <DarkPage>{ props.children }</DarkPage>)
        .with({ theme: "light" }, () => <LightPage>{ props.children }</LightPage>)
        .exhaustive();
};

export default PageContent;