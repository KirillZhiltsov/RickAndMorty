import Logo from './Logo.jsx';
import NavigationMenu from './NavigationMenu';

const Header = (props) => {
    const{
        onActive,
        setActive
    } = props

    return (
        <section className="section_header">
            <Logo />
            <NavigationMenu
            onActive = {onActive}
            setActive = {setActive}/>
        </section>
    )
}

export default Header