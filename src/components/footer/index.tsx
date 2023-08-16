import StyledFooter from './style';
import Logo from '../../assets/logo_2.png';
import {IoIosArrowUp} from 'react-icons/io';

export function Footer() {

    const scrollToTop = ()=>{
        window.scrollTo({top:0, behavior:'smooth'});
    }
    return (
        <StyledFooter>
            <img src={Logo}/>
            <p>© 2023 - Todos os direitos reservados.</p>
            <button onClick={scrollToTop}>
                <IoIosArrowUp/>
            </button>
        </StyledFooter>
    )
}