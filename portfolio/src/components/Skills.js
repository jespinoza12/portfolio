import meter1 from "../assets/img/meter1.svg";
import meter3 from "../assets/img/meter3.svg";
import reactLogo from "../assets/img/reactLogo.png"
import angularLogo from "../assets/img/angularLogo.png"
import jsLogo from "../assets/img/JavaScript-logo.png"
import tsLogo from "../assets/img/ts-logo.png"
import cssLogo from "../assets/img/css3-logo-png-transparent.png"
import nodeLogo from "../assets/img/node-logo.jpg"
import lambdalogo from "../assets/img/lambda.png"
import amplifyLogo from "../assets/img/amplifylogo.png"
import cognitoLogo from "../assets/img/CognitoLogo.jpg"
import sqlLogo from "../assets/img/sqlLogo.png"
import mySqlLogo from "../assets/img/mysqlLogo.png"
import mogodbLogo from "../assets/img/MongodbLogo.png"
import s3logo from "../assets/img/s3.jpg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={reactLogo} alt="reactLogo" />
                                <h5>ReactJS</h5>
                            </div>
                            <div className="item">
                                <img src={angularLogo} alt="angularLogo" />
                                <h5>Angular</h5>
                            </div>
                            <div className="item">
                                <img src={jsLogo} alt="jsLogo" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={cssLogo} alt="cssLogo" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={tsLogo} alt="typeScriptLogo" />
                                <h5>Typescript</h5>
                            </div>
                            <div className="item">
                                <img src={nodeLogo} alt="NodeLogo" />
                                <h5>Node</h5>
                            </div>
                            <div className="item">
                                <img src={lambdalogo} alt="AWSLamdbaLogo" />
                                <h5>AWS Lambda</h5>
                            </div>
                            <div className="item">
                                <img src={amplifyLogo} alt="awsLogo2" />
                                <h5>AWS Amplify</h5>
                            </div>
                            <div className="item">
                                <img src={s3logo} alt="awsLogo3" />
                                <h5>AWS S3</h5>
                            </div>
                            <div className="item">
                                <img src={cognitoLogo} alt="awsLogo4" />
                                <h5>AWS Cognito</h5>
                            </div>
                            <div className="item">
                                <img src={sqlLogo} alt="sqlLogo" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={mySqlLogo} alt="mySqlLogo" />
                                <h5>mySQL</h5>
                            </div>
                            <div className="item">
                                <img src={mogodbLogo} alt="MongodbLogo" />
                                <h5>MongoDB</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
