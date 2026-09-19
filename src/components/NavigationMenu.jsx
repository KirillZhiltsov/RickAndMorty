import NavigationButton from "./NavigationButton.jsx";

const NavigationMenu = (props) => {
    const{
        onActive,
        setActive
    } = props;

    const menuItems = ["Characters", "Locations", "Episodes"]
    return (
        <nav className="navigation">
            {menuItems.map((item) => (
                <NavigationButton
                    type='button'
                    onActive = {onActive}
                    setActive = {setActive}>
                    {item}
                </NavigationButton>
    ))}
        </nav>
    )
}

export default NavigationMenu