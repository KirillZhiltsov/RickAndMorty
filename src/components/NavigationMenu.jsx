import NavigationButton from "./NavigationButton.jsx";

const NavigationMenu = () => {
    const menuItems = ["Characters", "Locations", "Episodes"]
    return (
        <nav className="navigation">
            {menuItems.map((item) => (
                <NavigationButton type='button'>
                    {item}
                </NavigationButton>
    ))}
        </nav>
    )
}

export default NavigationMenu