import { Image } from "react-native-animatable"
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



const Flavour = [
    {
        product_id: 1,
        name: "Strawberry Flavour",
        image: images.ice4,
        price: 18.20,
        delivery_type: "Free Delivery",
        info: "Strawberry ice cream is a classic dessert to serve withCandy and Extra Topping .Strawberry ice cream is a classic treat that everyone loves",
        product_count: 0,
        product_price_without_sale: 22.22,
        product_price_with_sale: 18.22,
        price_delivery: 0
    },
    {
        product_id: 2,
        name: "Vanilla Flavour",
        image: images.ice3,
        price: 20.5,
        delivery_type: "Free Delivery",
        info: "Vanilla ice cream is a classic dessert to serve withCandy and Extra Topping .Vanilla ice cream is a classic treat that everyone loves",
        product_count: 0,
        product_price_without_sale: 22.22,
        product_price_with_sale: 18.22,
        price_delivery: 0

    },
    {
        product_id: 3,
        name: "Mango Flavour",
        image: images.ice3,
        price: 10.3,
        delivery_type: "Free Delivery",
        info: "Mango ice cream is a classic dessert to serve withCandy and Extra Topping .Mango ice cream is a classic treat that everyone loves",
        product_count: 0,
        product_price_without_sale: 22.22,
        product_price_with_sale: 18.22,
        price_delivery: 0

    },
    {
        product_id: 4,
        name: "Pistachio Flavour",
        image: images.Flavour8,
        price: 4,
        delivery_type: "Free Delivery",
        info: "Pistachio ice cream is a classic dessert to serve withCandy and Extra Topping .Pistachio ice cream is a classic treat that everyone loves",
        product_count: 0,
        product_price_without_sale: 22.22,
        product_price_with_sale: 18.22,
        price_delivery: 0

    },
    {
        product_id: 5,
        name: "Pistachio Flavour",
        image: images.ice2,
        price: 4,
        delivery_type: "Free Delivery",
        info: "Pistachio ice cream is a classic dessert to serve withCandy and Extra Topping .Pistachio ice cream is a classic treat that everyone loves",
        product_count: 0,
        product_price_without_sale: 22.22,
        product_price_with_sale: 18.22,
        price_delivery: 0

    },
    {
        product_id: 6,
        name: "Pistachio Flavour",
        image: images.ice4,
        price: 34,
        delivery_type: "Free Delivery",
        info: "Pistachio ice cream is a classic dessert to serve withCandy and Extra Topping .Pistachio ice cream is a classic treat that everyone loves",
        product_count: 0,
        product_price_without_sale: 22.22,
        product_price_with_sale: 18.22,
        price_delivery: 0


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
        price_delivery: 0
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
        price_delivery: 0

    }
    , {
        product_id: 3,
        product_image: images.Flavour3,
        product_name: "blueberry flavour",
        product_price_without_sale: 12,
        product_price_with_sale: 14,
        product_count: 0,
        product_delivery_status: "Free Delivery",
        price_delivery: 0

    }
    , {
        product_id: 4,
        product_image: images.Flavour4,
        product_name: "pistachio flavour and vanilla flavour",
        product_price_without_sale: 50,
        product_price_with_sale: 25,
        product_count: 0,
        product_delivery_status: "Free Delivery",
        price_delivery: 0

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



const categories = [
    {
        category_id: 1,
        category_name: "CheeseCake",
        category_image: images.cheesecake,
        Flavour: [
            {
                product_id: 1,
                name: "Strawberry cheesecake Flavour",
                image: images.cheesecake4,
                price: 18.20,
                delivery_type: "Free Delivery",
                info: "Strawberry ice cream is a classic dessert to serve withCandy and Extra Topping .Strawberry ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0
            },
            {
                product_id: 2,
                name: "Vanilla cheesecake Flavour",
                image: images.cheesecake,
                price: 20.5,
                delivery_type: "Free Delivery",
                info: "Vanilla ice cream is a classic dessert to serve withCandy and Extra Topping .Vanilla ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0

            },
            {
                product_id: 3,
                name: "Mango cheesecake Flavour",
                image: images.cheesecake2,
                price: 10.3,
                delivery_type: "Free Delivery",
                info: "Mango ice cream is a classic dessert to serve withCandy and Extra Topping .Mango ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0

            },
            {
                product_id: 4,
                name: "Pistachio cheesecake Flavour",
                image: images.cheesecake3,
                price: 4,
                delivery_type: "Free Delivery",
                info: "Pistachio ice cream is a classic dessert to serve withCandy and Extra Topping .Pistachio ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0

            }
        ]

    },
    {
        category_id: 2,
        category_name: "Tiramisu",
        category_image: images.trim,
        Flavour: [
            {
                product_id: 1,
                name: "Strawberry cheesecake Flavour",
                image: images.trim1,
                price: 18.20,
                delivery_type: "Free Delivery",
                info: "Strawberry ice cream is a classic dessert to serve withCandy and Extra Topping .Strawberry ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0
            },
            {
                product_id: 2,
                name: "Vanilla cheesecake Flavour",
                image: images.trim2,
                price: 20.5,
                delivery_type: "Free Delivery",
                info: "Vanilla ice cream is a classic dessert to serve withCandy and Extra Topping .Vanilla ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0

            },
            {
                product_id: 3,
                name: "Mango cheesecake Flavour",
                image: images.trim3,
                price: 10.3,
                delivery_type: "Free Delivery",
                info: "Mango ice cream is a classic dessert to serve withCandy and Extra Topping .Mango ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0

            },
        ]
    },
    {
        category_id: 3,
        category_name: "Donat",
        category_image: images.donat,
        Flavour: [
            {
                product_id: 1,
                name: "Strawberry cheesecake Flavour",
                image: images.donat2,
                price: 18.20,
                delivery_type: "Free Delivery",
                info: "Strawberry ice cream is a classic dessert to serve withCandy and Extra Topping .Strawberry ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0
            },
            {
                product_id: 2,
                name: "Vanilla cheesecake Flavour",
                image: images.Donat1,
                price: 20.5,
                delivery_type: "Free Delivery",
                info: "Vanilla ice cream is a classic dessert to serve withCandy and Extra Topping .Vanilla ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0

            },
            {
                product_id: 3,
                name: "Mango cheesecake Flavour",
                image: images.Donat3,
                price: 10.3,
                delivery_type: "Free Delivery",
                info: "Mango ice cream is a classic dessert to serve withCandy and Extra Topping .Mango ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0

            },
            {
                product_id: 4,
                name: "Pistachio cheesecake Flavour",
                image: images.Donat4,
                price: 4,
                delivery_type: "Free Delivery",
                info: "Pistachio ice cream is a classic dessert to serve withCandy and Extra Topping .Pistachio ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0

            },
            {
                product_id: 5,
                name: "Pistachio cheesecake Flavour",
                image: images.donat2,
                price: 4,
                delivery_type: "Free Delivery",
                info: "Pistachio ice cream is a classic dessert to serve withCandy and Extra Topping .Pistachio ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0

            }
        ]
    }, {
        category_id: 4,
        category_name: "pancake",
        category_image: images.pancake2,
        Flavour: [
            {
                product_id: 1,
                name: "Strawberry cheesecake Flavour",
                image: images.pancake1,
                price: 18.20,
                delivery_type: "Free Delivery",
                info: "Strawberry ice cream is a classic dessert to serve withCandy and Extra Topping .Strawberry ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0
            },
            {
                product_id: 2,
                name: "Vanilla cheesecake Flavour",
                image: images.pancake2,
                price: 20.5,
                delivery_type: "Free Delivery",
                info: "Vanilla ice cream is a classic dessert to serve withCandy and Extra Topping .Vanilla ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0

            },
            {
                product_id: 3,
                name: "Mango cheesecake Flavour",
                image: images.pancake3,
                price: 10.3,
                delivery_type: "Free Delivery",
                info: "Mango ice cream is a classic dessert to serve withCandy and Extra Topping .Mango ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0

            },
            {
                product_id: 4,
                name: "Pistachio cheesecake Flavour",
                image: images.pancake4,
                price: 4,
                delivery_type: "Free Delivery",
                info: "Pistachio ice cream is a classic dessert to serve withCandy and Extra Topping .Pistachio ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0

            },
            {
                product_id: 5,
                name: "Pistachio cheesecake Flavour",
                image: images.pancake,
                price: 4,
                delivery_type: "Free Delivery",
                info: "Pistachio ice cream is a classic dessert to serve withCandy and Extra Topping .Pistachio ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0

            }
        ]
    },
    {
        category_id: 5,
        category_name: "CupCake",
        category_image: images.cupCake,
        Flavour: [
            {
                product_id: 1,
                name: "Strawberry cheesecake Flavour",
                image: images.cupCake1,
                price: 18.20,
                delivery_type: "Free Delivery",
                info: "Strawberry ice cream is a classic dessert to serve withCandy and Extra Topping .Strawberry ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0
            },
            {
                product_id: 2,
                name: "Vanilla cheesecake Flavour",
                image: images.cupCake2,
                price: 20.5,
                delivery_type: "Free Delivery",
                info: "Vanilla ice cream is a classic dessert to serve withCandy and Extra Topping .Vanilla ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0

            },
            {
                product_id: 3,
                name: "Mango cheesecake Flavour",
                image: images.cupCake3,
                price: 10.3,
                delivery_type: "Free Delivery",
                info: "Mango ice cream is a classic dessert to serve withCandy and Extra Topping .Mango ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0

            },
            {
                product_id: 4,
                name: "Pistachio cheesecake Flavour",
                image: images.cupCake4,
                price: 4,
                delivery_type: "Free Delivery",
                info: "Pistachio ice cream is a classic dessert to serve withCandy and Extra Topping .Pistachio ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0

            },
            {
                product_id: 5,
                name: "Pistachio cheesecake Flavour",
                image: images.cupCake1,
                price: 4,
                delivery_type: "Free Delivery",
                info: "Pistachio ice cream is a classic dessert to serve withCandy and Extra Topping .Pistachio ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0

            },
            {
                product_id: 6,
                name: "Pistachio cheesecake Flavour",
                image: images.cupCake3,
                price: 34,
                delivery_type: "Free Delivery",
                info: "Pistachio ice cream is a classic dessert to serve withCandy and Extra Topping .Pistachio ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0


            }
        ]
    },
    {
        category_id: 6,
        category_name: "Ice cream",
        category_image: images.Flavour4,
        Flavour: [
            {
                product_id: 1,
                name: "Strawberry cheesecake Flavour",
                image: images.pancake,
                price: 18.20,
                delivery_type: "Free Delivery",
                info: "Strawberry ice cream is a classic dessert to serve withCandy and Extra Topping .Strawberry ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0
            },
            {
                product_id: 2,
                name: "Vanilla cheesecake Flavour",
                image: images.ice3,
                price: 20.5,
                delivery_type: "Free Delivery",
                info: "Vanilla ice cream is a classic dessert to serve withCandy and Extra Topping .Vanilla ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0

            },
            {
                product_id: 3,
                name: "Mango cheesecake Flavour",
                image: images.ice3,
                price: 10.3,
                delivery_type: "Free Delivery",
                info: "Mango ice cream is a classic dessert to serve withCandy and Extra Topping .Mango ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0

            },
            {
                product_id: 4,
                name: "Pistachio cheesecake Flavour",
                image: images.Flavour8,
                price: 4,
                delivery_type: "Free Delivery",
                info: "Pistachio ice cream is a classic dessert to serve withCandy and Extra Topping .Pistachio ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0

            },
            {
                product_id: 5,
                name: "Pistachio cheesecake Flavour",
                image: images.ice2,
                price: 4,
                delivery_type: "Free Delivery",
                info: "Pistachio ice cream is a classic dessert to serve withCandy and Extra Topping .Pistachio ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0

            },
            {
                product_id: 6,
                name: "Pistachio cheesecake Flavour",
                image: images.ice4,
                price: 34,
                delivery_type: "Free Delivery",
                info: "Pistachio ice cream is a classic dessert to serve withCandy and Extra Topping .Pistachio ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0


            }
        ]
    },
    {
        category_id: 6,
        category_name: "Waffle",
        category_image: images.waffle1,
        Flavour: [
            {
                product_id: 1,
                name: "Strawberry cheesecake Flavour",
                image: images.waffle2,
                price: 18.20,
                delivery_type: "Free Delivery",
                info: "Strawberry ice cream is a classic dessert to serve withCandy and Extra Topping .Strawberry ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0
            },
            {
                product_id: 2,
                name: "Vanilla cheesecake Flavour",
                image: images.waffle3,
                price: 20.5,
                delivery_type: "Free Delivery",
                info: "Vanilla ice cream is a classic dessert to serve withCandy and Extra Topping .Vanilla ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0

            },
            {
                product_id: 3,
                name: "Mango sdasdasd Flavour",
                image: images.waffle4,
                price: 10.3,
                delivery_type: "Free Delivery",
                info: "Mango ice cream is a classic dessert to serve withCandy and Extra Topping .Mango ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0

            },
            {
                product_id: 4,
                name: "Pistachio cheesecake Flavour",
                image: images.waffle1,
                price: 4,
                delivery_type: "Free Delivery",
                info: "Pistachio ice cream is a classic dessert to serve withCandy and Extra Topping .Pistachio ice cream is a classic treat that everyone loves",
                product_count: 0,
                product_price_without_sale: 22.22,
                product_price_with_sale: 18.22,
                price_delivery: 0

            }
        ]
    },



]


const data = [
    {
        title: 'Order Placed',
        body: "We Have Recived Your Order"
    },
    {
        title: 'Confirmed',
        body: "Your Order Has Been Confirmed"
    },
    {
        title: 'Order Shipped',
        body: "22 Mar 2024"
    },
    {
        title: 'Out For Delivery',
        body: "Soon"
    },
    {
        title: 'Deliverd',
        body: "Have a Nice Order"
    }
]


const Profile_Buttons = [
    {
        id: 1,
        name: "Your orders",
        // nav:"CheckoutPage"
    },
    {
        id: 2,
        name: "Offers",
        // nav:"Flavours"
    },
    {
        id: 3,
        name: "Notifications",
        nav:"NotificationsPage"
    },
    {
        id: 4,
        name: "Orders pay",
        nav:"OrderPay"
    },
    {
        id: 5,
        name: "Refer a friend",
        nav:"Refer_Friend"
    },
    {
        id: 6,
        name: "Vouchers",
        // nav:"AboutPage"
    },
    {
        id: 7,
        name: "Get help",
        nav:"GetHelp"
    },
    {
        id: 8,
        name: "About",
        nav:"AboutPage"
    },
]

const RefundData =[
    {
        Date:"Septamber 10,2023",
        Money:36.50
    },
    {
        Date:"Septamber 10,2023",
        Money:36.50
    },
    {
        Date:"Septamber 10,2023",
        Money:36.50
    },
    {
        Date:"Septamber 10,2023",
        Money:36.50
    },
    {
        Date:"Septamber 10,2023",
        Money:4
    },
    {
        Date:"Septamber 10,2023",
        Money:1
    },
    {
        Date:"Septamber 10,2023",
        Money:4
    },
    {
        Date:"Septamber 10,2023",
        Money:3
    },
    {
        Date:"Septamber 10,2023",
        Money:2
    }
]

export {
    Top_Flavours,
    cart_products,
    categories,
    Flavour,
    data,
    Profile_Buttons,
    RefundData
}