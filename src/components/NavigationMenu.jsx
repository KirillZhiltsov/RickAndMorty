import NavigationButton from "./NavigationButton.jsx";

const NavigationMenu = () => {
    const menuItems = ["Characters", "Locations", "Episodes", "Search"]
    return (
        <nav className="navigation">
            {menuItems.map((items) => (
                <NavigationButton type='buttom'>
                    {items}
                </NavigationButton>
    ))}
        </nav>
    )
}

export default NavigationMenu