import {StyledHome, StyledMenu,StyledBannerPageHome, StyledButtonsMenu, StyledButtonLogin, StyledButtonRegister} from "./style";
import Logo from '../../assets/Logo_test.png';
import Banner from '../../assets/banner_bmw.png';
import {IconButton, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react';
import {AiOutlineMenu} from 'react-icons/ai';
import { useEffect, useState } from "react";

function Home() {

  const [isMobile, setisMobile] = useState(false);

  useEffect(()=>{
      const screen = window.matchMedia('(max-width: 599px)');
      setisMobile(screen.matches);

      const resize = ()=>{
        setisMobile(screen.matches);
      }

      window.addEventListener('resize', resize);
      
      return ()=>{
        window.removeEventListener('resize', resize);
      };

  },[])


  return (

   <>
      <header>
          <StyledMenu>
              <img src={Logo}/>
              {isMobile ? (
                <Menu>
                <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<AiOutlineMenu/>}
                        variant='outline'
                  >

                </MenuButton>
                
                  <MenuList zIndex={2}>
                      <MenuItem>
                        Fazer Login
                      </MenuItem>
                      <MenuItem>
                          Cadastrar
                      </MenuItem>

                    </MenuList>
                </Menu>
              ):(
             <StyledButtonsMenu>
                <StyledButtonLogin>Fazer Login</StyledButtonLogin>

                <StyledButtonRegister>Cadastrar</StyledButtonRegister>

             </StyledButtonsMenu>
              )}

          </StyledMenu>

          <StyledBannerPageHome>
            <img src={Banner}/>
            <h1>
                Web Custons
            </h1>
            <p>
              A melhor plataforma de anúncios de carros do pais
            
            </p>
          </StyledBannerPageHome>

      </header>

   </>
  );
}
export default Home;
