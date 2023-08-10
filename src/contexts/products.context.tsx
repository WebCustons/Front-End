import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { TAdvert } from "../interfaces/advert.interface";
import image from "../assets/Logo.png";

interface iProductContextProps {
  children: ReactNode;
}
type TFilters =  {
  brand: string,
  model: string,
  color: string,
  year: string,
  fuel: string
}

interface IProductProvider {
  listPage: number[] | null;
  currentPage: number;
  previousPage: number;
  listItems: TAdvert[] | null | undefined;
  setPages: () => void;
  nextPage: () => void;
  prevPage: () => void;
  setPageByNumber: (number: number) => void;
  getProducts: () => void;
  productsList: TAdvert[] | null
  setFilters: React.Dispatch<React.SetStateAction<TFilters[] | null>>
  filters: TFilters[] | null | undefined
  getAdvertsByFilter: (name:string, typeFilter:String)=> void;

}

export const ProductContext = createContext({} as IProductProvider);

export const ProductProvider = ({ children }: iProductContextProps) => {
  const [productsList, setProductsList] = useState<TAdvert[] | null>([
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
      year: 2018,
      fuel: "Gasoline",
      mileage: 0,
      color: "red",
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
      year: 2018,
      fuel: "Gasoline",
      mileage: 0,
      color: "red",
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
      year: 2018,
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
      id: 17,
      brand: "Porsche",
      model: "718",
      year: 2018,
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
    }
  ]);

  const [listPage, setListPage] = useState<number[] | null>([]);
  const [currentPage, setcurrentPage] = useState<number>(0);
  const [previousPage, setPreviousPage] = useState<number>(0);
  const [listItems, setListItems] = useState<TAdvert[] | null>();
  const [filters,setFilters] = useState<TFilters[] | null>([])


  const getAdvertsByFilter = (nameFilter:string, typeFilter:String)=>{

  
      const arrayFilter = listItems?.filter((advert)=>{
        if(advert.brand === nameFilter){
          return advert
        }
        if(advert.color === nameFilter){
          return advert
        }
        if(advert.fuel === nameFilter){
          return advert
        }
        if(advert.model === nameFilter){
          return advert
        }
        if(advert.year === Number(nameFilter)){
          return advert
        }
      })
      
      if(arrayFilter?.length === 0 && listItems?.length){

        if(typeFilter === 'Marca'){
          const findProduct = productsList?.filter((product)=>{
            if(product.brand === nameFilter){
              return product
            }
          })

          setListItems(findProduct);
        }else if(typeFilter != 'Marca'){
        
        const nameBrand = listItems[0].brand;

        const findProduct = productsList?.filter((product)=>{

          if(product.brand === nameBrand){

            if(product.color === nameFilter){
              return product
            }
            if(product.fuel === nameFilter){
              return product
            }
            if(product.model === nameFilter){
              return product
            }
            if(product.year === Number(nameFilter)){
              return product
            }
          }
          
        })
      
        
        const newListItems = findProduct;

        setListItems(newListItems);
        }
      }else{

        setListItems(arrayFilter);
      }
  
  } 


  const getProducts = () => {};

  const setPages = () => {
    const numberOfPages: number = Math.ceil(productsList!.length / 12);
    const listLength: number = productsList!.length;
    let helper: number = 12;
    const itemsPage: number[] = [];
    itemsPage.push(0);

    for (let i = 0; i < numberOfPages; i++) {
      if (listLength - helper >= 0) {
        itemsPage.push(helper);
        helper = helper + 12;
      } else if (helper > 12) {
        itemsPage.push(helper);
      } else {
        itemsPage.push(listLength);
      }
    }

    setListItems(productsList!.slice(0, itemsPage[1]));
    setcurrentPage(1);
    setPreviousPage(0);
    setListPage(itemsPage);
  };

  const nextPage = () => {
    if (!listPage) {
      null;
    } else if (listPage.length - 1 > 1 && listPage.length - 1 != currentPage) {
      setListItems(
        productsList!.slice(
          listPage[previousPage + 1],
          listPage[currentPage + 1]
        )
      );
      setcurrentPage(currentPage + 1);
      setPreviousPage(previousPage + 1);
    }
  };

  const prevPage = () => {
    if (!listPage) {
      null;
    } else if (currentPage > 1) {
      setListItems(
        productsList!.slice(
          listPage[previousPage - 1],
          listPage[currentPage - 1]
        )
      );
      setcurrentPage(currentPage - 1);
      setPreviousPage(previousPage - 1);
    }
  };

  const setPageByNumber = (number: number) => {
    if (!listPage) {
      null;
    } else {
      setListItems(productsList!.slice(listPage[number - 1], listPage[number]));
      setcurrentPage(number);
      setPreviousPage(number - 1);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        currentPage,
        listItems,
        listPage,
        nextPage,
        previousPage,
        prevPage,
        setPageByNumber,
        setPages,
        getProducts,
        productsList,
        setFilters,
        filters,
        getAdvertsByFilter
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
