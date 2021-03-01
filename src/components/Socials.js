import React from 'react';
import '../styles/_socialBar.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Socials = () => {
    return (
        <div className="socials">
            <a href="https://www.linkedin.com"><LinkedInIcon style= {{ fontSize: 25 }} className="linkedin"/></a>
            <a href="https://www.facebook.com"><FacebookIcon style= {{ fontSize: 25 }} className="facebook"/></a>
            <a href="https://www.instagram.com"><InstagramIcon style= {{ fontSize: 25 }} className="instagram"/></a>
        </div>
    );
}

export default Socials;