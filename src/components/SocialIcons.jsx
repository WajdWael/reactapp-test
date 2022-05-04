import {FaTwitter, FaFacebook, FaLinkedin} from 'react-icons/fa'
import {StyledSocialIcons} from "./styles/SocialIcons.styled"

// icons: {
// linkedin: '#0E76A8',
// facebook: '#4267B2',
// twitter: '#00ACEE',
// },

export default function SocialIcons() {
    return (
        <StyledSocialIcons>
            <li>
                <a href='https://twitter.com' className='twitter'>
                    <FaTwitter />
                </a>
            </li>
            <li>
                <a href='https://facebook.com' className='facebook'>
                    <FaFacebook />
                </a>
            </li>
            <li>
                <a href='https://linkedin.com' className='linkedin'>
                    <FaLinkedin />
                </a>
            </li>
        </StyledSocialIcons>
    )
}