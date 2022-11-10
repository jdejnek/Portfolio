import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import './bottom-nav.styles.css'

const BottomNav = () => {
    return(
        <div>
            <BottomNavigation sx={{padding: '2rem'}}>
                <BottomNavigationAction className="linked-in-icon" label='LinkedIn' icon={<LinkedInIcon />}/>
                <BottomNavigationAction className='git-hub-icon' label='Github' icon={<GitHubIcon />}/>
                <BottomNavigationAction className="email-icon" label='Email' icon={<EmailIcon />}/>
            </BottomNavigation>
        </div>
    )
}

export default BottomNav;