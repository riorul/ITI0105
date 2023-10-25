import "./Login.css"
import useWindowDimensions from "./windowDimensions";
import { ReactComponent as FacebookLogo} from "../assets/facebook.svg"
import { ReactComponent as GoogleLogo} from "../assets/google.svg"
import { ReactComponent as FigmaLogo} from "../assets/figma.svg"

const Login = () => {
    const { height, width } = useWindowDimensions();

    return (
        <div className="login-page">
            <div className="left-section">
                <h2 className="left-heading">Fox Serve broneeringud</h2>
                <div>
                    <h1 className="top-margin">Logi sisse oma kontosse</h1>
                    <h3>Logi sisse kasutades</h3>
                    <div className="logo-container">
                        {/* The target="_blank" attribute opens the link in a new tab, and rel="noopener noreferrer" is a security measure when opening links in a new tab. */}
                        <a href="https://accounts.google.com/" target="_blank" rel="noopener noreferrer">
                            <GoogleLogo className="logo"/>
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <FacebookLogo className="logo"/>
                        </a>
                        <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
                            <FigmaLogo className="logo"/>
                        </a>
                    </div>
                </div>
                <div className="divider">
                    <div className="line"></div>
                    <div className="or">or</div>
                    <div className="line"></div>
                </div>
                <div>
                    <div>
                        <input type="email" id="email" name="email" placeholder="Email"/>
                    </div>
                    <div>
                        <input type="password" id="password" name="password" placeholder="Password"/>
                    </div>
                </div>
                <button type="submit">Logi sisse</button>
            </div>
            <div className="right-section">
            </div>
        </div>
    )
}


export default Login;