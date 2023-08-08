import { StyledMenu } from './style';
import Logo from '../../assets/logo_1.png';

export function Header({children}:any) {
    return (
        <header>
          <StyledMenu>
              <img src={Logo}/>
              {children}
        </StyledMenu>
        </header>
    )
}
export default Header