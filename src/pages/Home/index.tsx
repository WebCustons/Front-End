import {StyledHome,StyledBannerPageHome, StyledButtonsMenu, StyledButtonLogin, StyledButtonRegister, StyledButtonMenuItemRegister} from "./style";
import Banner from '../../assets/banner_bmw.png';
import {IconButton, Menu, MenuButton, MenuList} from '@chakra-ui/react';
import {AiOutlineMenu} from 'react-icons/ai';
import { useEffect, useState } from "react";
import {Header} from '../../components/header';
import {Footer} from '../../components/footer'; 

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
          <Header>
            {isMobile ? (
                  <Menu>
                  <MenuButton
                          as={IconButton}
                          aria-label='Options'
                          icon={<AiOutlineMenu/>}
                          variant='outline'
                    >

                  </MenuButton>
                  
                    <MenuList bg={'var(--whiteFixed)'} padding={'5px'} zIndex={2}>
                        <StyledButtonLogin>
                          Fazer Login
                        </StyledButtonLogin><br/>
                        <StyledButtonMenuItemRegister>
                            Cadastrar
                        </StyledButtonMenuItemRegister>

                      </MenuList>
                  </Menu>
                ):(
              <StyledButtonsMenu>
                  <StyledButtonLogin>Fazer Login</StyledButtonLogin>

                  <StyledButtonRegister>Cadastrar</StyledButtonRegister>

              </StyledButtonsMenu>
                )}

          </Header>

          <StyledHome>
            <StyledBannerPageHome>
              <img src={Banner}/>
              <h1>
                  Web Custons
              </h1>
              <p>
                A melhor plataforma de anúncios de carros do pais
              
              </p>
            </StyledBannerPageHome>

            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>

            test<br/>
            test<br/>
            test<br/>
            test<br/>

            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>


          </StyledHome>
          <Footer/>

   </>
  );
}
export default Home;
