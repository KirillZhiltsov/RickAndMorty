const Character = () => {
    let text = 'Alive'
    let className1, className2;

    if(text === "Alive"){
        className1 = 'info_green'
        className2 = 'info-1-1_green'
    } else {
        className1 = 'info_red'
        className2 = 'info-1-1_red'
    }

    return (
        <div className="character-card">
            <div className="img-character">
                <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick Sanchez"/>
            </div>
            <div className="character-info">
                <h3 className="name">Rick Sanchez</h3>
                <div className={className1}>
                    <div className = {className2}></div>
                    <span>{text}</span>
                </div>
                <div className="info">
                    <div className = "info-2-1"></div>
                    <span>Human</span>
                </div>
                <div className="info">
                    <div className = "info-3-1"></div>
                    <span>Earth C-137</span>
                </div>
            </div>
        </div>
    )
}

export default Character