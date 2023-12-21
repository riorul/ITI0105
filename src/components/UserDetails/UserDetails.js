import React from 'react';
import './UserDetails.css';
import { ReactComponent as DeleteSvg} from "../../assets/admin/delete.svg"
import { ReactComponent as InfoSvg} from "../../assets/admin/info.svg"
import { ReactComponent as EditSvg} from "../../assets/admin/edit.svg"
import { ReactComponent as Profile} from "../../assets/defaultPfp.svg"


const UserDetails = ({ userData, onRequestDelete, onRequestInfo }) => {
    const data = [
        `${userData.username} #${String(userData.id).padStart(4, '0')}`,
        `${userData.firstName} ${userData.lastName}`,
        userData.role,
        userData?.lastOnline,
        userData?.status
    ]
    const handleRequestDelete = () => {
        onRequestDelete(userData.id, `${userData.username} #${String(userData.id).padStart(4, '0')}`);
    };

    const handleInfoClick = () => {
        onRequestInfo(userData.id);
    };


    return (
        <div className="box-admin-profile">
            {data.map((text, index) => (
                <div key={index} className="info-profile-box">
                    {index === 1 ? (
                        <>
                            <Profile className="profile0" />
                            {text}
                        </>
                    ) : (
                        text
                    )}
                </div>
            ))}
            <div className="user-editing-options">
                <InfoSvg onClick={handleInfoClick}/>
                <EditSvg />
                <DeleteSvg onClick={handleRequestDelete}/>
            </div>
        </div>
    );
};

export default UserDetails;