import React from "react";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { ReactComponent as Notification } from "../../assets/icons/bell.svg";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
import { ReactComponent as Settings } from "../../assets/icons/settings.svg";
import { ReactComponent as Logout } from "../../assets/icons/logout.svg";

export function TabsComponent() {

    return (
        <div className="TabsContainer">
            <div className="icon-container">
                <Menu></Menu>
            </div>
            <div className="icon-container">
                <Notification></Notification>
            </div>
            <div className="icon-container">
                <Plus></Plus>
            </div>
            <div className="icon-container">
                <Settings></Settings>
            </div>
            <div>
                <Logout></Logout>
            </div>
        </div>
    )
}