import { StyledProducts } from "./style";
import { useEffect, useState } from 'react';
import { useProduct } from './../../hooks/useProduct';
import { useParams } from 'react-router-dom';
import { Box, Button, Image, Text } from '@chakra-ui/react';
import { TAdvert } from "../../schemas/advert.schema";
import { useNavigate } from 'react-router-dom';

export function Products() {
    const navigate = useNavigate()
    const { id } = useParams()

    const { getAdvert } = useProduct()
    const [advert, setAdvert] = useState<TAdvert | undefined>()
    const [couverImg, setCouverImg] = useState<string | undefined>()

    useEffect(() => {
        const fetchAdvert = async () => {
            if (id) {
                const car = await getAdvert(parseInt(id));
                console.log(car.comments);
                setAdvert(car);
                setCouverImg(car.cover_image);
            }
        }
        fetchAdvert()
    }, [id]);

    return (
        <StyledProducts>
            <Box
                background="var(--brand1)"
                height="70%"
                width="100%"
                position="fixed"
                top="0"
                zIndex="-1"
            />
            <Box as="section"
                width={["100%", "50%"]}
                top="20%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="30px"
                padding="3px"
            >
                <Image src={couverImg}
                    backgroundColor="var(--grey10)"
                    height="400px"
                    width="100%"
                    padding="30px 20px"
                    objectFit="contain"
                    borderRadius="10px"
                />
                <Box as="article"
                    width="100%"
                    display="flex"
                    flexDirection="column"
                    padding="30px 30px"
                    backgroundColor="var(--grey10)"
                    borderRadius="10px"
                    gap="20px">
                    <Text as="b" fontSize="3xl" color={`var(--grey2)`}>
                        {advert?.brand} {advert?.model}
                    </Text>
                    <Box
                        width="100%"
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        gap="10px"
                    >
                        <Box
                            width="40%"
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                            gap="10px"
                        >
                            <span>{advert?.year}</span>
                            <span>{advert?.mileage} KM</span>
                        </Box>
                        <Text as="b" fontSize="xl" color={`var(--grey2)`}>
                            R$ {advert?.price},00
                        </Text>
                    </Box>
                    <Button
                        backgroundColor="var(--brand1)"
                        fontWeight="500"
                        color="white"
                        width="30%"
                    >
                        Comprar
                    </Button>
                </Box>
                <Box as="article"
                    backgroundColor="var(--grey10)"
                    width="100%"
                    display="flex"
                    padding="30px 20px"
                    flexDirection="column"
                    alignItems="initial"
                    borderRadius="10px"
                >
                    <Text as="b" fontSize="xl" color={`var(--grey2)`}>
                        Descrição
                    </Text>
                    <Text fontSize="xl" color={`var(--grey2)`}>
                        {advert?.description}
                    </Text>
                </Box>
            </Box>
            <Box as="section"
                width={["100%", "30%"]}
                top="20%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="30px"
                padding="3px"
            >

                <Box as="article"
                    backgroundColor="var(--grey10)"
                    height="450px"
                    width="100%"
                    padding="30px 30px"
                    borderRadius="10px"
                >
                    <Text as="b" fontSize="3xl" color={`var(--grey2)`}>
                        Fotos
                    </Text>
                    <Box as="figure"
                        display="grid"
                        gridTemplateColumns="repeat(3, 1fr)"
                        gridTemplateRows="repeat(3, 1fr)"
                        gap="10px"
                        align-items="center"

                    >
                        {advert?.images && advert?.images.length > 1 && advert?.images.map((image) =>
                            <Image key={image.id} src={image.image}
                                className="optionalImg"
                                height="100px"
                                width="100px"
                                objectFit="cover"
                                borderRadius="10px"
                                onClick={() => setCouverImg(image.image)}
                            />
                        )}
                        <Image key={advert?.cover_image} src={advert?.cover_image}
                            className="optionalImg"
                            height="100px"
                            width="100px"
                            objectFit="cover"
                            borderRadius="10px"
                            onClick={() => setCouverImg(advert?.cover_image)}
                        />
                    </Box>
                </Box>
                <Box as="article"
                    width="100%"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    padding="30px 30px"
                    backgroundColor="var(--grey10)"
                    borderRadius="10px"
                    gap="10px"
                >
                    <Box
                        className="icon"
                        backgroundColor="var(--random2)"
                        borderRadius="50%"
                        display="flex"
                        width="80px"
                        height="80px"
                        alignItems="center"
                        justifyContent="center"
                        fontWeight="bold"
                        marginRight="5px"
                    >
                        <Text fontSize="mg" color={`var(--grey10)`}>
                            {advert?.user?.name[0].toUpperCase()}
                        </Text>
                    </Box>
                    <Text as="b" fontSize="3xl" color={`var(--grey2)`}>
                        {advert?.user.name}
                    </Text>
                    <Text fontSize="xl"
                        textAlign="center"
                        color={`var(--grey2)`}>
                        {advert?.user.description}
                    </Text>
                    <Button colorScheme='purple'
                        onClick={() => {
                            navigate(`/profile/${advert?.user?.id}`)
                        }}>
                        Ver Todos os Anuncius
                    </Button>
                </Box>
            </Box>
        </StyledProducts >
    )
}
