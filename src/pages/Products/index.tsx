import StyledProducts from "./style";
import { useEffect } from 'react';
import { useProduct } from './../../hooks/useProduct';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Header } from './../../components/header/index';
import { UserHeader } from './../../components/userHeader/index';
import { Box, Image, Text } from '@chakra-ui/react';
import { Footer } from "../../components/footer";

function Products() {

    const navigate = useNavigate()
    const { id } = useParams()

    const { getAdvert, advert } = useProduct()

    useEffect(() => {
        if (id) {
            getAdvert(parseInt(id))
        } else {
            navigate("/")
        }
    }, [])

    return (
        <StyledProducts>
            <Header>
                <UserHeader />
            </Header>
            {/* <Box as="main" background={"var(--grey8)"}>
                <Box
                    background={"var(--brand1)"}
                    position={"relative"}
                    height={"330px"}
                    marginBottom={"170px"}
                >
                    <Box
                        className="userContainer"
                        display={"flex"}
                        flexDirection={"column"}
                        backgroundColor={"var(--grey10)"}
                        height={"400px"}
                        position={"absolute"}
                        top={"30%"}
                        left={"4%"}
                        right={"4%"}
                        padding={"30px 20px"}
                        justifyContent={"space-between"}
                    >
                        <Image src={advert?.cover_image} color={`var(--grey10)`} width={"100%"} height={"100%"} /> 
                    </Box>
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        backgroundColor={"var(--grey10)"}
                        height={"400px"}
                        position={"absolute"}
                        top={"30%"}
                        left={"4%"}
                        right={"4%"}
                        padding={"30px 20px"}
                        justifyContent={"space-between"}
                    >
                        {advert?.image_gallery?.map((image) => {
                            <Image src={image} color={`var(--grey10)`} />
                        })}
                    </Box>
                </Box>
                
            </Box> */}
            <Footer />

        </StyledProducts>
    )
}
export default Products;
