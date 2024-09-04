import { ReactNode } from "react";
import Navbar from "../../components/Navbar";
import PageContent from "../../components/PageContent";
import Footer from "../../components/Footer";

const HomePage = (): ReactNode => {
    return (
        <>
            <Navbar/>
            <PageContent/>
            <Footer/>
        </>
    );
};

export default HomePage;