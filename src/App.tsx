import { ReactNode, useState } from "react";
import { ThemeContext, ThemeProvider } from "./contexts";
import Navbar from "./components/Navbar";
import PageContent from "./components/PageContent";

type AppProps = {
    children: ReactNode | ReactNode[]
};

const App = (props: AppProps): ReactNode => {
    

    return (
        <ThemeProvider>
            <Navbar/>
            <PageContent>
                { props.children }
            </PageContent>
        </ThemeProvider>
    );
};


export default App;