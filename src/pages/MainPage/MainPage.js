import React from "react";
import './MainPage.css';

import UserHeader from '../../components/Header/UserHeader';
import Footer from '../../components/Footer/Footer';

import mainPageTennisImage from '../../assets/home/tennis_main.png';
import introFirstImage from '../../assets/home/introfirst.png';
import introSecondImage from '../../assets/home/introsecond.png';
import introThirdImage from '../../assets/home/introthird.png';
import { ReactComponent as ContactSVG} from "../../assets/home/contact.svg"
import { ReactComponent as AddSVG} from "../../assets/home/plussign.svg"
import { ReactComponent as QuestionSVG} from "../../assets/home/questionmark.svg"


const MainPage = () => {
    return (
        <div>
            <UserHeader />
            <div className="image-container">
                <img
                    src={mainPageTennisImage} // Replace with the actual URL of your image
                    alt="Description of the image"
                    className="responsive-image"
                />
            </div>

            <div className="info-container">
                <div className="section">
                    <QuestionSVG />
                    <h1>Meist</h1>
                    <p className="italic-paragraph">
                        Fox Serve broneeringud on<br /> mitmekülgsete sportimis-<br /> ja vabaaja veetmise..
                    </p>
                </div>

                <div className="section">
                    <AddSVG />
                    <h1>Teenused</h1>
                    <p className="italic-paragraph">
                        Fox Serve broneeringute<br /> poolt pakutavad teenused ja hinnakiri
                    </p>
                </div>

                <div className="section">
                    <ContactSVG />
                    <h1>Kontakt</h1>
                    <p className="italic-paragraph">
                        Asume Somaalias.<br />+420 666 69
                    </p>
                </div>
            </div>

            <div className="introduction-container">
                <div className="intro-content">
                    <h4>Staadionid</h4>
                    <p>
                        Avage oma tennisepotentsiaal meie tipptasemel väljakutel. Olenemata sellest,
                        kas olete algaja või kogenud mängija, meie staadionid on loodud teie mängu
                        parimaks naudinguks. Valige aeg ja kindlustage oma koht.
                        Arenda ennast – broneeri oma väljak kohe!
                    </p>
                </div>

                <div className="intro-image-container">
                    <img
                        src={introFirstImage} // Replace with the actual URL of your image
                        alt="Description of the image"
                        className="responsive-image intro-image"
                    />
                </div>
            </div>
            <div className="line line-with-margin"></div>

            <div className="introduction-container">

                <div className="intro-image-container">
                    <img
                        src={introSecondImage} // Replace with the actual URL of your image
                        alt="Description of the image"
                        className="responsive-image intro-image"
                    />
                </div>

                <div className="intro-content">
                    <h4>Varustuse rentimine</h4>
                    <p>
                        Meie esmaklassilise varustuse renditeenus on loodud teie mängu parimaks kogemiseks,
                        andes teile väljakul eelise. Saate proovida erinevaid usaldusväärseid kaubamärki
                        reketeid, nööre ja tarvikuid. Proovige enne ostmist ja mängige enesekindlalt.
                        Rendi kohe ja tõsta oma mäng uuele tasemele!
                    </p>
                </div>
            </div>
            <div className="line line-with-margin"></div>

            <div className="introduction-container">
                <div className="intro-content">
                    <h4>Treenerid</h4>
                    <p>
                        Kogege oma tennise teekonda koos meie erakordsete treeneritega. Alates kohan-datud
                        koolitusprogrammidest kuni paindliku ajakavani – oleme pühendunud teie edusammudele.
                        Valige oma treener, valige aeg ja kohandage oma pakett. Kindlustage oma koht ja
                        valmistuge väljakut domineerima. Ära jäta võimalust kasutamata – broneeri oma treener kohe!
                    </p>
                </div>

                <div className="intro-image-container">
                    <img
                        src={introThirdImage} // Replace with the actual URL of your image
                        alt="Description of the image"
                        className="responsive-image intro-image"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MainPage;
