const products = [
    {
        id:1,
        name:"Gucci",
        desc:"Men's Regular Casual Shirt",
        price:13000,
        rating:4.7,
        size:['S','M','L'],
        image:"https://res.cloudinary.com/dmwnrwhqv/image/upload/v1652937884/ecommerce/shirt6_kamscu.jpg",
        altImage:['https://res.cloudinary.com/dmwnrwhqv/image/upload/v1653045609/ecommerce/shirt33_ndrl2x.webp','https://res.cloudinary.com/dmwnrwhqv/image/upload/v1653045609/ecommerce/shirt22_egfun5.webp','https://res.cloudinary.com/dmwnrwhqv/image/upload/v1653045609/ecommerce/shirt11_dlfawr.webp']
    },
    {
        id:2,
        name:"Adidas",
        desc:"Solid Slim Fit Casual Shirt for Men",
        price:23000,
        rating: 4.8,
        size:['S','M'],
        image:"https://res.cloudinary.com/dmwnrwhqv/image/upload/v1652937884/ecommerce/shirt3_oatg9k.jpg",
        altImage:['https://res.cloudinary.com/dmwnrwhqv/image/upload/v1653045609/ecommerce/shirt13_icg7na.webp','https://res.cloudinary.com/dmwnrwhqv/image/upload/v1653045608/ecommerce/shirt12_pyxys9.webp','https://res.cloudinary.com/dmwnrwhqv/image/upload/v1653045609/ecommerce/shirt11_dlfawr.webp']
    },
    {
        id:3,
        name:"Peter England",
        desc:"Men's Tall Meeker Peak Short",
        price:25000,
        rating: 3.3,
        size:['M','L'],
        image:"https://res.cloudinary.com/dmwnrwhqv/image/upload/v1652937884/ecommerce/shirt2_biwt6n.jpg",
        altImage:['https://res.cloudinary.com/dmwnrwhqv/image/upload/v1653045609/ecommerce/shirt24_xgajge.webp','https://res.cloudinary.com/dmwnrwhqv/image/upload/v1653045609/ecommerce/shirt33_ndrl2x.webp','https://res.cloudinary.com/dmwnrwhqv/image/upload/v1653045609/ecommerce/shirt35_c2ckcj.webp']
    },{
        id:4,
        name:"Peter England",
        desc:"Mens Slim Fit Cotton Blue",
        price:5000,
        rating: 4.5,
        size:['S','L'],
        image:"https://res.cloudinary.com/dmwnrwhqv/image/upload/v1652937884/ecommerce/shirt5_offqgq.jpg",
        altImage:['https://res.cloudinary.com/dmwnrwhqv/image/upload/v1653045609/ecommerce/shirt33_ndrl2x.webp','https://res.cloudinary.com/dmwnrwhqv/image/upload/v1653045609/ecommerce/shirt22_egfun5.webp','https://res.cloudinary.com/dmwnrwhqv/image/upload/v1653045609/ecommerce/shirt11_dlfawr.webp']

    },
    {
        id:5,
        name:"Peter England",
        desc:"Men's Regular Formal Shirt",       
        price:9000,
        rating: 4.1,
        size:['S','M','L'],
        image:"https://res.cloudinary.com/dmwnrwhqv/image/upload/v1652937884/ecommerce/shirt1_z1sqid.jpg",
        altImage:['https://res.cloudinary.com/dmwnrwhqv/image/upload/v1653045609/ecommerce/shirt24_xgajge.webp','https://res.cloudinary.com/dmwnrwhqv/image/upload/v1653045609/ecommerce/shirt33_ndrl2x.webp','https://res.cloudinary.com/dmwnrwhqv/image/upload/v1653045609/ecommerce/shirt35_c2ckcj.webp']

    },
    {
        id:6,
        name:"Peter England",
        desc:"Men's Slim Casual Shirt",
        price:35000,
        rating: 2.5,
        size:['L'],
        image:"https://res.cloudinary.com/dmwnrwhqv/image/upload/v1652937884/ecommerce/shirt4_ya3gzw.jpg",
        altImage:['https://res.cloudinary.com/dmwnrwhqv/image/upload/v1653045609/ecommerce/shirt13_icg7na.webp','https://res.cloudinary.com/dmwnrwhqv/image/upload/v1653045608/ecommerce/shirt12_pyxys9.webp','https://res.cloudinary.com/dmwnrwhqv/image/upload/v1653045609/ecommerce/shirt11_dlfawr.webp']

    }
]

module.exports = products