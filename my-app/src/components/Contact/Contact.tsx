import { MdMobileScreenShare, MdOutlineMailOutline } from 'react-icons/md';
import { RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx';
import "./Contact.css";

const Contact = () => {
    return (
        <div className='contact-container'>
            <ul>
                <a href="tel:+917607205292" target='_blank' rel='noreferrer'>
                    <li>
                        <MdMobileScreenShare size={60} />
                    </li>
                </a>
                <a href="mailto:sahurajat78@gmail.com" target='_blank' rel='noreferrer'>
                    <li>
                        <MdOutlineMailOutline size={60} />
                    </li>
                </a>
                <a href="https://www.linkedin.com/in/rajat-sahu-102791147/" target='_blank' rel='noreferrer'>
                    <li>
                        <RxLinkedinLogo size={60} />
                    </li>
                </a>
                <a href="https://github.com/rajatsahu18" target='_blank' rel='noreferrer'>
                    <li>
                        <RxGithubLogo size={60} />
                    </li>
                </a>
            </ul>
        </div>
    )
}

export default Contact;