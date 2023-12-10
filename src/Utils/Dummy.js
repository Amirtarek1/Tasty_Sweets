import { images } from "../constants"

const Top_Flavours = [
    {
        id: 1,
        name: "Strawberry Flavour",
        image: images.Flavour1,
        price: 18.20,
        delivery_type: "Free Delivery"
    },
    {
        id: 2,
        name: "Vanilla Flavour",
        image: images.Flavour2,
        price: 20.5,
        delivery_type: "Free Delivery"
    },
    {
        id: 3,
        name: "Mango Flavour",
        image: images.Flavour8,
        price: 10.3,
        delivery_type: "Free Delivery"
    },
    {
        id: 4,
        name: "Pistachio Flavour",
        image: images.Flavour4,
        price: 4,
        delivery_type: "Free Delivery"
    }
]



const Popular_Flavour = [
    {
        id: 1,
        name: "Strawberry Flavour",
        image: images.ice4,
        price: 18.20,
        delivery_type: "Free Delivery"
    },
    {
        id: 2,
        name: "Vanilla Flavour",
        image: images.ice3,
        price: 20.5,
        delivery_type: "Free Delivery"
    },
    {
        id: 3,
        name: "Mango Flavour",
        image: images.ice3,
        price: 10.3,
        delivery_type: "Free Delivery"
    },
    {
        id: 4,
        name: "Pistachio Flavour",
        image: images.ice2,
        price: 4,
        delivery_type: "Free Delivery"
    },
    {
        id: 5,
        name: "Pistachio Flavour",
        image: images.ice2,
        price: 4,
        delivery_type: "Free Delivery"
    }
]


const cart_products = [
    {
        product_id: 1,
        product_image: images.Flavour1,
        product_name: "Mango flavour",
        product_price_without_sale: 22.22,
        product_price_with_sale: 18.22,
        product_count: 0,
        product_delivery_status: "Free Delivery",
        price_delivery : 0
    }
    ,
    {
        product_id: 2,
        product_image: images.Flavour2,
        product_name: "vanilla flavour with candy",
        product_price_without_sale: 30.21,
        product_price_with_sale: 10,
        product_count: 0,
        product_delivery_status: "Free Delivery",
        price_delivery : 0

    }
    , {
        product_id: 3,
        product_image: images.Flavour3,
        product_name: "blueberry flavour",
        product_price_without_sale: 12,
        product_price_with_sale: 14,
        product_count: 0,
        product_delivery_status: "Free Delivery",
        price_delivery : 0

    }
    , {
        product_id: 4,
        product_image: images.Flavour4,
        product_name: "pistachio flavour and vanilla flavour",
        product_price_without_sale: 50,
        product_price_with_sale: 25,
        product_count: 0,
        product_delivery_status: "Free Delivery",
        price_delivery : 0

    }
    // , {
    //     product_id: 5,
    //     product_image: images.Flavour5,
    //     product_name: "green",
    //     product_price_without_sale: 22.22,
    //     product_price_with_sale: 18.22,
    //     product_count: 0,
    //     product_delivery_status: "Free Delivery",
    // }
    // ,
    // {
    //     product_id: 6,
    //     product_image: images.Flavour6,
    //     product_name: "green",
    //     product_price_without_sale: 22.22,
    //     product_price_with_sale: 18.22,
    //     product_count: 0,
    //     product_delivery_status: "Free Delivery",
    // }
    // , {
    //     product_id: 7,
    //     product_image: images.Flavour7,
    //     product_name: "green",
    //     product_price_without_sale: 22.22,
    //     product_price_with_sale: 18.22,
    //     product_count: 0,
    //     product_delivery_status: "Free Delivery",
    // }
    // , {
    //     product_id: 8,
    //     product_image: images.Flavour8,
    //     product_name: "green",
    //     product_price_without_sale: 22.22,
    //     product_price_with_sale: 18.22,
    //     product_count: 0,
    //     product_delivery_status: "Free Delivery",
    // },
    // {
    //     product_id: 9,
    //     product_image: images.Flavour9,
    //     product_name: "green",
    //     product_price_without_sale: 22.22,
    //     product_price_with_sale: 18.22,
    //     product_count: 0,
    //     product_delivery_status: "Free Delivery",
    // }


]
export {
    Top_Flavours,
    Popular_Flavour,
    cart_products
}