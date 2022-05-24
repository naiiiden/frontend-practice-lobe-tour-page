const Hero = ({ h1Text, spanText, pText, embedId, width, height }) => {
    return (
        <div className="hero--container">
            <h1 className="hero--heading">{h1Text} <span className="hero--heading--span">{spanText}</span></h1>
            <p className="hero--description">{pText}</p>
                <iframe src={`https://www.youtube.com/embed/${embedId}`}
                    frameBorder="0"
                    width={`${width}%`}
                    height={`${height}px`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
        </div>
    )
}

export default Hero;