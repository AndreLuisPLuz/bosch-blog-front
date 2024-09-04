import { ReactNode } from "react";
import { Page } from "./style";

type PageContentProps = {
    children?: ReactNode | ReactNode[]
};

const PageContent = (props: PageContentProps): ReactNode => {
    return (
        <Page>
            { props.children }
        </Page>
    );
};

export default PageContent;