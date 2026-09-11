import Logo from './Logo.jsx';
import NavigationMenu from './NavigationMenu';

const Header = () => {
    return (
        <section className="section_header">
            <Logo />
            <NavigationMenu />
        </section>
    )
}

export default Header