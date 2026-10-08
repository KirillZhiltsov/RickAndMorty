const Switch = (props) => {
    let {
        onActive,
        setActive,
        children,
    } = props

    const className = onActive === children? 'switch-active' : 'switch'

    return (
        <div
            className={`switch ${className}`}
            onClick={() => {setActive(children)}}
        >
            {children}
        </div>
    )
}

export default Switch