import cybermart from '../img/site.png'
import weatherApp from '../img/weatherapp.png'
import cocktail from '../img/cocktail.png'
import socialDB from '../img/socialNetwork.png'
import blogpost from '../img/blogpost.png'
import readmeGen from '../img/readmeGen.png'

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


          <div className="col-md-6 col-lg-4">
            <div>
              <a href='https://cybermart1-76e7c43ac326.herokuapp.com/' target="blank">
                <img
                  src={cybermart}
                  alt="Ecoomerce website"
                  style={imageStyle}
                  // e is for event so the event passes when it is over the target and then the style is applied
                  onMouseOver={(e) => (e.currentTarget.style.opacity = 0.8)}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = 1)} />
              </a>
              <h3>CyberMart: HTML, CSS, Express</h3>
              <a href='https://github.com/Ch40s1/CyberMart' target='blank'>Github</a>
            </div>
          </div>


          <div className="col-md-6  col-lg-4">
            <div style={containerStyle}>
              <a href='https://ch40s1.github.io/Weather-Application/' target="blank">
                <img
                  src={weatherApp}
                  alt="weather website"
                  style={imageStyle}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = 0.8)}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = 1)} />
              </a>
              <h3>WeatherApp: HTML, CSS, Node</h3>
              <a href='https://github.com/Ch40s1/Weather-Application' target='blank'>Github</a>
            </div>
          </div>




          <div className="col-md-6  col-lg-4">
            <div style={containerStyle}>
              <a href='https://ch40s1.github.io/Cocktail-pedia/' target="blank">
                <img src={cocktail}
                  alt="drink website"
                  style={imageStyle}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = 0.8)}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = 1)} />
              </a>
              <h3>Cocktailpedia: HTML, CSS, Node</h3>
              <a href='https://github.com/Ch40s1/Cocktail-pedia' target='blank'>Github</a>
            </div>
          </div>



          <div className="col-md-6  col-lg-4">
            <div style={containerStyle}>
              <a href='https://easyblogs1-0a58a50a4e3a.herokuapp.com/' target="blank">
                <img src={blogpost}
                  alt="social post website"
                  style={imageStyle}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = 0.8)}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = 1)} />
              </a>
              <h3>BlogpostDB: Express, Sequelize</h3>
              <a href='https://github.com/Ch40s1/blogpost-mvc' target='blank'>Github</a>
            </div>
          </div>


          <div className="col-md-6  col-lg-4">
            <div style={containerStyle}>
              <a href='https://github.com/Ch40s1/Social-NetworkDB' target="blank">
                <img src={socialDB}
                  alt="markdown"
                  style={imageStyle}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = 0.8)}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = 1)} />
              </a>
              <h3>SocialNetWorkDB: Express, MongoDB, Mongoose </h3>
            </div>
          </div>

          <div className="col-md-6  col-lg-4">
            <div style={containerStyle}>
              <a href='https://github.com/Ch40s1/readme-generator' target="blank">
                <img src={readmeGen}
                  alt="markdown"
                  style={imageStyle}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = 0.8)}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = 1)} />
              </a>
              <h3>Readme generator: Node</h3>
            </div>
          </div>


      </div>
    </div>
    </div>
  );
}
