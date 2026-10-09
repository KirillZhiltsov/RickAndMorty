const Switch = (props) => {
    let {
        onActive,
        setActive,
        children,
    } = props

    const className = onActive === children? 'switch-active' : 'switch'

    let params;
    if (children === "⬅"){
         params = -1
    } else if (children === "⮕"){
         params = 1
    } else{
         params = children
    }

    return (
        <div
            className={`switch ${className}`}
            onClick={() => {setActive(params)}}
        >
            {children}
        </div>
    )
}

export default Switch