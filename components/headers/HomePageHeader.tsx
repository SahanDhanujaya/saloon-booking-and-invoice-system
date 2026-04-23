import DefaultNavbar from "../navbar/DefaultNavbar";

const HomePageHeader = () => {
    return (
        <header className="flex h-16 w-full items-center justify-between bg-white/60 px-3 backdrop-blur-lg sm:px-4 fixed">
            <DefaultNavbar />
        </header>
    );
}

export default HomePageHeader;