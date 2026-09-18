const Character = (props) => {
    const { key,
            name,
            status,
            species,
            gender,
            image,
            } = props;

    let className1, className2;

    if(status === "Alive"){
        className1 = 'info_green'
        className2 = 'info-1-1_green'
    } else {
        className1 = 'info_red'
        className2 = 'info-1-1_red'
    }

    return (
        <div className="character-card" id={key}>
            <div className="img-character">
                <img src={image} alt="Rick Sanchez"/>
            </div>
            <div className="character-info">
                <h3 className="name">{name}</h3>
                <div className={className1}>
                    <div className = {className2}></div>
                    <span>{status}</span>
                </div>
                <div className="info">
                    <div className = "info-2-1"></div>
                    <span>{species}</span>
                </div>
                <div className="info">
                    <div className = "info-3-1"></div>
                    <span>{gender}</span>
                </div>
            </div>
        </div>
    )
}

export default Character