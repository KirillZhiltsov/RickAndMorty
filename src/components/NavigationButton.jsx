const NavigationButton = (props) => {
    let {
        type = "button",
        children,
        onActive,
        setActive
    } = props
    const className = onActive === children ? 'navigation-button-active' : 'navigation-button'
    return (
        <button
            className={`navigation-button ${className}`}
            type={type}
            onClick={() => {setActive(children)}}
        >
            {children}
        </button>
    )
}

export default NavigationButton