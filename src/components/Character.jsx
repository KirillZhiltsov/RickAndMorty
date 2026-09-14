const Character = () => {
    return (
        <div className="character-card">
            <div className="img-character">
                <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick Sanchez"/>
            </div>
            <div className="character-info">
                <h3 className="name">Rick Sanchez</h3>
                <div className="info">
                    <div className = "info-1-1"></div>
                    <span>Alive</span>
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