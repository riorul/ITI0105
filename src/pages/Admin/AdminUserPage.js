import React, {useState} from 'react';
import {useAuth} from "../../auth/AuthProvider";

import './AdminUserPage.css';
import AdminHeader from "../../components/Header/AdminHeader";
import UserDetails from "../../components/UserDetails/UserDetails";
import ConfirmationBox from "../../components/Confirmation/ConfirmationBox";
import InformationCard from "../../components/InformationCard/InformationCard";



const AdminUserPage = () => {
    const { getAllUserData, deleteUser, getUserDataById } = useAuth();
    const allUsers = getAllUserData();
    const headerList = ["Username", "Name", "Role", "Last Online", "Status", "Actions"];


    const [deleteUserId, setDeleteUserId] = useState(null);
    const [deleteUserUN, setDeleteUserUN] = useState(null);
    const [infoUserId, setInfoUserId] = useState(null);


    const handleRequestInfo = (userId) => {
        setInfoUserId(userId);
    };

    const handleRequestDelete = (userId, UN) => {
        setDeleteUserId(userId);
        setDeleteUserUN(UN);
    };

    const handleConfirmDelete = () => {
        if (deleteUserId !== null) {
            setDeleteUserId(null);
            deleteUser(deleteUserId)
        }
    };

    const handleCancelDelete = () => {
        setDeleteUserId(null);
    };

    return (
        <div>
            <AdminHeader className="header-admin"/>

            <div className="static-user-description">
                {headerList.map((header) => (
                    <div className="static-profile-box">
                        {header}
                    </div>
                ))}
            </div>

            {allUsers.map((user) => (
                <UserDetails
                    userData={user}
                    onRequestDelete={handleRequestDelete}
                    onRequestInfo={handleRequestInfo}
                />

            ))}

            {deleteUserId && (
                <ConfirmationBox
                    message={`Are you sure you want to delete ${deleteUserUN}?`}
                    onConfirm={handleConfirmDelete}
                    onCancel={handleCancelDelete}
                />
            )}

            {infoUserId && (
                <InformationCard
                    userData={getUserDataById(infoUserId)}
                    onClose={() => setInfoUserId(null)}
                />
            )}
        </div>
    );
};

export default AdminUserPage;