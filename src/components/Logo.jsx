import logo from "../assets/logo.png";

const Logo = () => {
    return (
        <div className="logo">
            <img
                src={logo}
                alt="Какой-то логотип"
                className="logo_img"
                draggable={false}
            ></img>
            <a className="logo_text">Rick and Morty</a>
        </div>
    )
}

export default Logo