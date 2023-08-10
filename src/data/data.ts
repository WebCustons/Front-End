import image from "../assets/Logo.png";
import { TAdvert } from "../schemas/advert.schema";

export const dataBase:TAdvert[] =
    [
        {
            id: 1,
            brand: "Maserati",
            model: "Ghibli",
            year: 2019,
            fuel: "Gasoline",
            mileage: 200000,
            color: "Black",
            table_fipe: false,
            price: 10000000,
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, neque laborum minima laudantium illum asperiores cum iste assumenda. Cupiditate iste vitae eaque blanditiis necessitatibus architecto mollitia deleniti neque labore quidem!",
            cover_image: image,
            published: true,
            image_gallery: [{ id: 1, image: image }],
            user_advert: {
                id: 1,
                birth_date: new Date(),
                cpf: "11111111111",
                description: "Banana",
                email: "banana@gmail.com",
                name: "Banana Split",
                password: "1111",
                phone: 111111111,
                type_user: "seller",
            },
        },
        {
            id: 2,
            brand: "Porsche",
            model: "718",
            year: 2019,
            fuel: "Gasoline",
            mileage: 0,
            color: "Black",
            table_fipe: false,
            price: 0,
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, neque laborum minima laudantium illum asperiores cum iste assumenda. Cupiditate iste vitae eaque blanditiis necessitatibus architecto mollitia deleniti neque labore quidem!",
            cover_image: image,
            published: true,
            image_gallery: [{ id: 1, image: image }],
            user_advert: {
                id: 2,
                birth_date: new Date(),
                cpf: "22222222222",
                description: "Maça",
                email: "maça@gmail.com",
                name: "Maça dourada",
                password: "1111",
                phone: 111111111,
                type_user: "seller",
            },
        },
        {
            id: 3,
            brand: "Maserati",
            model: "Ghibli",
            year: 2019,
            fuel: "Gasoline",
            mileage: 0,
            color: "Black",
            table_fipe: false,
            price: 0,
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, neque laborum minima laudantium illum asperiores cum iste assumenda. Cupiditate iste vitae eaque blanditiis necessitatibus architecto mollitia deleniti neque labore quidem!",
            cover_image: image,
            published: true,
            image_gallery: [{ id: 1, image: image }],
            user_advert: {
                id: 1,
                birth_date: new Date(),
                cpf: "11111111111",
                description: "Banana",
                email: "banana@gmail.com",
                name: "Banana Split",
                password: "1111",
                phone: 111111111,
                type_user: "seller",
            },
        },
        {
            id: 4,
            brand: "Porsche",
            model: "718",
            year: 2019,
            fuel: "Gasoline",
            mileage: 0,
            color: "Black",
            table_fipe: true,
            price: 0,
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, neque laborum minima laudantium illum asperiores cum iste assumenda. Cupiditate iste vitae eaque blanditiis necessitatibus architecto mollitia deleniti neque labore quidem!",
            cover_image: image,
            published: true,
            image_gallery: [{ id: 1, image: image }],
            user_advert: {
                id: 2,
                birth_date: new Date(),
                cpf: "22222222222",
                description: "Maça",
                email: "maça@gmail.com",
                name: "Maça dourada",
                password: "1111",
                phone: 111111111,
                type_user: "seller",
            },
        },
        {
            id: 5,
            brand: "Maserati",
            model: "Ghibli",
            year: 2019,
            fuel: "Gasoline",
            mileage: 0,
            color: "Black",
            table_fipe: false,
            price: 0,
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, neque laborum minima laudantium illum asperiores cum iste assumenda. Cupiditate iste vitae eaque blanditiis necessitatibus architecto mollitia deleniti neque labore quidem!",
            cover_image: image,
            published: true,
            image_gallery: [{ id: 1, image: image }],
            user_advert: {
                id: 1,
                birth_date: new Date(),
                cpf: "11111111111",
                description: "Banana",
                email: "banana@gmail.com",
                name: "Banana Split",
                password: "1111",
                phone: 111111111,
                type_user: "seller",
            },
        },
        {
            id: 6,
            brand: "Porsche",
            model: "718",
            year: 2019,
            fuel: "Gasoline",
            mileage: 0,
            color: "Black",
            table_fipe: false,
            price: 0,
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, neque laborum minima laudantium illum asperiores cum iste assumenda. Cupiditate iste vitae eaque blanditiis necessitatibus architecto mollitia deleniti neque labore quidem!",
            cover_image: image,
            published: true,
            image_gallery: [{ id: 1, image: image }],
            user_advert: {
                id: 2,
                birth_date: new Date(),
                cpf: "22222222222",
                description: "Maça",
                email: "maça@gmail.com",
                name: "Maça dourada",
                password: "1111",
                phone: 111111111,
                type_user: "seller",
            },
        },
        {
            id: 7,
            brand: "Maserati",
            model: "Ghibli",
            year: 2019,
            fuel: "Gasoline",
            mileage: 0,
            color: "Black",
            table_fipe: false,
            price: 0,
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, neque laborum minima laudantium illum asperiores cum iste assumenda. Cupiditate iste vitae eaque blanditiis necessitatibus architecto mollitia deleniti neque labore quidem!",
            cover_image: image,
            published: true,
            image_gallery: [{ id: 1, image: image }],
            user_advert: {
                id: 1,
                birth_date: new Date(),
                cpf: "11111111111",
                description: "Banana",
                email: "banana@gmail.com",
                name: "Banana Split",
                password: "1111",
                phone: 111111111,
                type_user: "seller",
            },
        },
        {
            id: 8,
            brand: "Porsche",
            model: "718",
            year: 2019,
            fuel: "Gasoline",
            mileage: 0,
            color: "Black",
            table_fipe: true,
            price: 0,
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, neque laborum minima laudantium illum asperiores cum iste assumenda. Cupiditate iste vitae eaque blanditiis necessitatibus architecto mollitia deleniti neque labore quidem!",
            cover_image: image,
            published: true,
            image_gallery: [{ id: 1, image: image }],
            user_advert: {
                id: 2,
                birth_date: new Date(),
                cpf: "22222222222",
                description: "Maça",
                email: "maça@gmail.com",
                name: "Maça dourada",
                password: "1111",
                phone: 111111111,
                type_user: "seller",
            },
        },
        {
            id: 9,
            brand: "Maserati",
            model: "Ghibli",
            year: 2019,
            fuel: "Gasoline",
            mileage: 0,
            color: "Black",
            table_fipe: false,
            price: 0,
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, neque laborum minima laudantium illum asperiores cum iste assumenda. Cupiditate iste vitae eaque blanditiis necessitatibus architecto mollitia deleniti neque labore quidem!",
            cover_image: image,
            published: true,
            image_gallery: [{ id: 1, image: image }],
            user_advert: {
                id: 1,
                birth_date: new Date(),
                cpf: "11111111111",
                description: "Banana",
                email: "banana@gmail.com",
                name: "Banana Split",
                password: "1111",
                phone: 111111111,
                type_user: "seller",
            },
        },
        {
            id: 10,
            brand: "Porsche",
            model: "718",
            year: 2019,
            fuel: "Gasoline",
            mileage: 0,
            color: "Black",
            table_fipe: false,
            price: 0,
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, neque laborum minima laudantium illum asperiores cum iste assumenda. Cupiditate iste vitae eaque blanditiis necessitatibus architecto mollitia deleniti neque labore quidem!",
            cover_image: image,
            published: true,
            image_gallery: [{ id: 1, image: image }],
            user_advert: {
                id: 2,
                birth_date: new Date(),
                cpf: "22222222222",
                description: "Maça",
                email: "maça@gmail.com",
                name: "Maça dourada",
                password: "1111",
                phone: 111111111,
                type_user: "seller",
            },
        },
        {
            id: 11,
            brand: "Maserati",
            model: "Ghibli",
            year: 2019,
            fuel: "Gasoline",
            mileage: 0,
            color: "Black",
            table_fipe: false,
            price: 0,
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, neque laborum minima laudantium illum asperiores cum iste assumenda. Cupiditate iste vitae eaque blanditiis necessitatibus architecto mollitia deleniti neque labore quidem!",
            cover_image: image,
            published: true,
            image_gallery: [{ id: 1, image: image }],
            user_advert: {
                id: 1,
                birth_date: new Date(),
                cpf: "11111111111",
                description: "Banana",
                email: "banana@gmail.com",
                name: "Banana Split",
                password: "1111",
                phone: 111111111,
                type_user: "seller",
            },
        },
        {
            id: 12,
            brand: "Porsche",
            model: "718",
            year: 2019,
            fuel: "Gasoline",
            mileage: 0,
            color: "Black",
            table_fipe: true,
            price: 0,
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, neque laborum minima laudantium illum asperiores cum iste assumenda. Cupiditate iste vitae eaque blanditiis necessitatibus architecto mollitia deleniti neque labore quidem!",
            cover_image: image,
            published: true,
            image_gallery: [{ id: 1, image: image }],
            user_advert: {
                id: 2,
                birth_date: new Date(),
                cpf: "22222222222",
                description: "Maça",
                email: "maça@gmail.com",
                name: "Maça dourada",
                password: "1111",
                phone: 111111111,
                type_user: "seller",
            },
        },
        {
            id: 13,
            brand: "Maserati",
            model: "Ghibli",
            year: 2019,
            fuel: "Gasoline",
            mileage: 0,
            color: "Black",
            table_fipe: false,
            price: 0,
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, neque laborum minima laudantium illum asperiores cum iste assumenda. Cupiditate iste vitae eaque blanditiis necessitatibus architecto mollitia deleniti neque labore quidem!",
            cover_image: image,
            published: true,
            image_gallery: [{ id: 1, image: image }],
            user_advert: {
                id: 1,
                birth_date: new Date(),
                cpf: "11111111111",
                description: "Banana",
                email: "banana@gmail.com",
                name: "Banana Split",
                password: "1111",
                phone: 111111111,
                type_user: "seller",
            },
        },
        {
            id: 14,
            brand: "Porsche",
            model: "718",
            year: 2019,
            fuel: "Gasoline",
            mileage: 0,
            color: "Black",
            table_fipe: false,
            price: 0,
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, neque laborum minima laudantium illum asperiores cum iste assumenda. Cupiditate iste vitae eaque blanditiis necessitatibus architecto mollitia deleniti neque labore quidem!",
            cover_image: image,
            published: true,
            image_gallery: [{ id: 1, image: image }],
            user_advert: {
                id: 2,
                birth_date: new Date(),
                cpf: "22222222222",
                description: "Maça",
                email: "maça@gmail.com",
                name: "Maça dourada",
                password: "1111",
                phone: 111111111,
                type_user: "seller",
            },
        },
        {
            id: 15,
            brand: "Maserati",
            model: "Ghibli",
            year: 2019,
            fuel: "Gasoline",
            mileage: 0,
            color: "Black",
            table_fipe: false,
            price: 0,
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, neque laborum minima laudantium illum asperiores cum iste assumenda. Cupiditate iste vitae eaque blanditiis necessitatibus architecto mollitia deleniti neque labore quidem!",
            cover_image: image,
            published: true,
            image_gallery: [{ id: 1, image: image }],
            user_advert: {
                id: 1,
                birth_date: new Date(),
                cpf: "11111111111",
                description: "Banana",
                email: "banana@gmail.com",
                name: "Banana Split",
                password: "1111",
                phone: 111111111,
                type_user: "seller",
            },
        },
        {
            id: 16,
            brand: "Porsche",
            model: "718",
            year: 2019,
            fuel: "Gasoline",
            mileage: 0,
            color: "Black",
            table_fipe: true,
            price: 0,
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, neque laborum minima laudantium illum asperiores cum iste assumenda. Cupiditate iste vitae eaque blanditiis necessitatibus architecto mollitia deleniti neque labore quidem!",
            cover_image: image,
            published: true,
            image_gallery: [{ id: 1, image: image }],
            user_advert: {
                id: 2,
                birth_date: new Date(),
                cpf: "22222222222",
                description: "Maça",
                email: "maça@gmail.com",
                name: "Maça dourada",
                password: "1111",
                phone: 111111111,
                type_user: "seller",
            },
        },
    ]
