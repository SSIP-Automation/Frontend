import React from 'react'
import "./Css/SideBarScreen.css"
import SideBarOption from "./SideBarOption"
import HomeIcon from '@material-ui/icons/Home';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { Image } from "react-bootstrap"
import { useAuth } from '../AuthContext';

function SideBarScreen() {
    // const [currentUser, setCurrentUser] = useState()
    const {logout}=useAuth()


    return (
        <div className="sidebar d-none d-sm-block">
            <div className="sidebar_header mt-2">
                <Image className="sidebar_image" src={auth.currentUser.photoURL}  height="50px" roundedCircle ></Image>
                <SideBarOption u_name={auth.currentUser.displayName} />
            </div>

            <hr />
            <div className="sidebar_body">
                <Link to="/home" className="text-decoration-none text-muted">
                    <SideBarOption Icon={HomeIcon} title="Home"/>
                </Link>

                <Link to="/DashBoard" className="text-decoration-none text-muted">
                    <SideBarOption Icon={DashboardRoundedIcon} title="DashBoard" />
                </Link>

                <Link to="/Profile" className="text-decoration-none text-muted">
                    <SideBarOption Icon={PersonRoundedIcon} title="Profile"/>
                </Link>

                <Link to="/AboutUs" className="text-decoration-none text-muted">
                    <SideBarOption Icon={InfoRoundedIcon} title="About Us"/>
                </Link>
    
                <Link to="/Setting" className="text-decoration-none text-muted">
                    <SideBarOption Icon={SettingsRoundedIcon} title="Setting"/>
                </Link>
            </div>
            <div onClick={()=>logout()}>
                <SideBarOption Icon={ExitToAppRoundedIcon}  title="Log Out" />
            </div>
        </div>
    )
}

export default SideBarScreen
