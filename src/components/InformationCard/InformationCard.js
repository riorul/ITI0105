import React from 'react';
import './InformationCard.css';
import { ReactComponent as Profile} from "../../assets/defaultPfp.svg"


const InformationCard = ({ userData, onClose }) => {
    return (
        <div className="information-card-overlay">
            <div className="information-card">

                <div className="elevated-info">
                    <div>
                        <strong className="info-card-titles">Full Name</strong>
                        <div className="info-field rounded-box">
                            {userData.firstName || ""} {userData.lastName || ""}
                        </div>
                    </div>

                    <div>
                        <strong className="info-card-titles">Email Address</strong>
                        <div className="info-field rounded-box">
                            {userData.email}
                        </div>
                    </div>

                    <div>
                        <strong className="info-card-titles">Date of Birth</strong>
                        <div className="info-field rounded-box">
                            {userData.dob ? userData.dob : "-"}
                        </div>
                    </div>

                    <div>
                        <strong className="info-card-titles">Phonenumber</strong>
                        <div className="info-field rounded-box">
                            {userData.phoneNumber ? userData.phoneNumber : "-"}
                        </div>
                    </div>

                    <div>
                        <strong className="info-card-titles">Address</strong>
                        <div className="info-field rounded-box">
                            {userData.address ? userData.address : "-"}
                        </div>
                    </div>

                </div>

                <div className="image-info">
                    <Profile className="profile-svg inverted"/>
                    {`${userData.username} #${String(userData.id).padStart(4, '0')}`}
                    <button className="ok-button" onClick={onClose}>
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InformationCard;