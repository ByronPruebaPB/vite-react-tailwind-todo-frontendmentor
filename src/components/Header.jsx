import IconMoon from "./iconos/IconMoon";
const Header = () => {
    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
                    TODO
                </h1>
                <IconMoon className="fill-red-400"></IconMoon>
            </div>
        </header>
    );
};

export default Header;
