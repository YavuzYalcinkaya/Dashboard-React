import React from "react";
import "./topbar.css";
import LanguageIcon from '@mui/icons-material/Language';
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import InfoIcon from '@mui/icons-material/Info';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
        <div className="topbarIconContainer">
            <FormatIndentDecreaseIcon />           
          </div>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon  />
            
          </div>
          <div className="topbarIconContainer">
            <FullscreenIcon />
          </div>
          <div className="topbarIconContainer">
            <NotificationsIcon />
            
          </div>
          <div className="topbarIconContainer">
            <InfoIcon />
          </div>
          <div className="user">
            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
            <span className="name">Mary Johnson</span>
            <div className="topbarIconContainer arrowdown">
              <KeyboardArrowDownIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}