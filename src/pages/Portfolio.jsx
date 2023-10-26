export default function Portfolio() {
  const containerStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    textAlign: 'center',
  };

  const imageStyle = {
    maxWidth: '100%',
    transition: 'opacity 0.3s',
  };

  return (
    <div style={containerStyle}>
      <h1>Projects</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div>
              <a href='https://cybermart1-76e7c43ac326.herokuapp.com/' target="blank">
                <img
                  src="src/img/site.png"
                  alt="Project 1"
                  style={imageStyle}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = 0.8)}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = 1)} />
              </a>
              <h3>CyberMart: HTML, CSS, Express</h3>
            </div>
          </div>
          <div className="col-md-6">
            <div style={containerStyle}>
              <a href='https://ch40s1.github.io/Weather-Application/' target="blank">
                <img
                  src="src/img/weatherapp.png"
                  alt="Project 2"
                  style={imageStyle}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = 0.8)}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = 1)} />
              </a>
              <h3>WeatherApp: HTML, CSS, Node</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div style={containerStyle}>
              <a href='https://ch40s1.github.io/Cocktail-pedia/' target="blank">
                <img src="src/img/cocktail.png"
                  alt="Project 3"
                  style={imageStyle}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = 0.8)}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = 1)} />
              </a>
              <h3>Cocktailpedia: HTML, CSS, Node</h3>
            </div>
          </div>
          {/* <div className="col-md-6">
            <div style={containerStyle}>
              <img src="project4.jpg" alt="Project 4" style={imageStyle} onMouseOver={(e) => (e.currentTarget.style.opacity = 0.8)}
                onMouseOut={(e) => (e.currentTarget.style.opacity = 1)}/>
              <h3>Project 4 Name</h3>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
