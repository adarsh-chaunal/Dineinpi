import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainTitle from "@/components/MainTitle";

type Props = {
    children: React.ReactNode;
}

const Layout = ({children}: Props) => {
    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <MainTitle />
            <div className="container mx-auto flex-1 py-10">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;