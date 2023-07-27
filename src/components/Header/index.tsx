import StyledHeader from './style';
import Logo from '../../assets/Logo.png'
import Navigation from './../Navigation/index';
import StyledTypography from '../BaseTypography/style';

function Header() {
    return (
        <StyledHeader>
            <div>
                <figure className='logo'>
                    <img src={Logo} alt="" />
                </figure>
                <StyledTypography tag='p' classText='Title' >Web Prepared</StyledTypography>
            </div>
            <Navigation />
        </StyledHeader>
    )
}
export default Header