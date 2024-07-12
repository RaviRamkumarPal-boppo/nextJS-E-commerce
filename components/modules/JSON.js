import sideTable from '@/public/pal/side-table.jpg';
import chair from '@/public/pal/chair.png';
import DinnerTable from '@/public/pal/dinner-table.jpg';
import Pillow from '@/public/pal/pillow.jpg';
import Clock from '@/public/pal/clock.jpg';
import lamp from '@/public/pal/lamp.png';
import Client3 from '@/public/pal/client-1.jpg';
import Client2 from '@/public/pal/client-2.jpg';
import Client1 from '@/public/pal/client-3.jpg';
import Bedroom from '@/public/pal/bedroom.jpg';
import Livingroom from '@/public/pal/livingroom.jpg';
import Waitingroom from '@/public/pal/waitingroom.jpg';
import product1 from '@/public/products/product1.jpg';
import product2 from '@/public/products/product2.jpg';
import product3 from '@/public/products/product3.jpg';
import product4 from '@/public/products/product4.jpg';
import product5 from '@/public/products/product5.jpg';
import product6 from '@/public/products/product6.jpg';
import product7 from '@/public/products/product7.jpg';
import product8 from '@/public/products/product8.jpg';
import product9 from '@/public/products/product9.jpg';
import product10 from '@/public/products/product10.jpg';
import product11 from '@/public/products/product11.jpg';
import product12 from '@/public/products/product12.png';
import product13 from '@/public/products/product13.png';
import product14 from '@/public/products/product14.png';



const categoryObj = [
    {
        image: sideTable,
        title: 'Side Table',
        count: 120
    },
    {
        image: chair,
        title: 'Arm Chair',
        count: 45
    },
    {
        image: DinnerTable,
        title: 'Dinner Table',
        count: 120
    },
    {
        image: Pillow,
        title: 'Pillow',
        count: 150
    },
    {
        image: Clock,
        title: 'Clock',
        count: 40
    }
];

const productObj = [
    {
        image: sideTable,
        title: 'Side Table',
        price: 235
    },
    {
        image: chair,
        title: 'Arm Chair',
        price: 250
    },
    {
        image: DinnerTable,
        title: 'Dinner Table',
        price: 180
    },
    {
        image: Pillow,
        title: 'Pillow',
        price: 125
    },
    {
        image: Clock,
        title: 'Clock',
        price: 99
    },
    {
        image: lamp,
        title: 'Lamp',
        price: 139
    }
];


const clientObj = [
    {
        image: Client1,
        description: "I recently purchased a beautiful dining set from FurniFlex, and I couldn't be happier! The quality is top-notch, and it looks even better in person than it did online. Plus, the customer service team was incredibly helpful throughout the entire process. Highly recommend",
        name: "Emily K.",
        address: "New York, NY"
    }, {
        image: Client2,
        description: "I recently purchased a beautiful dining set from FurniFlex, and I couldn't be happier! The quality is top-notch, and it looks even better in person than it did online. Plus, the customer service team was incredibly helpful throughout the entire process. Highly recommend",
        name: "jeen M.",
        address: "New York, NY"
    }, {
        image: Client3,
        description: "I recently purchased a beautiful dining set from FurniFlex, and I couldn't be happier! The quality is top-notch, and it looks even better in person than it did online. Plus, the customer service team was incredibly helpful throughout the entire process. Highly recommend",
        name: "Lily P.",
        address: "New York, NY"
    }
]


const roomsObj = [
    {
        image: Livingroom
    }, {
        image: Waitingroom
    }, {
        image: Bedroom
    },

]

const footerObj = [
    {
        title: 'About',
        footerLink: {
            links: [
                '/company',
                '/Ourstory',
                '/blog'
            ],
            label: [
                'Our Company',
                'Our Story',
                'Blog'
            ]
        }
    },
    {
        title: 'Information',
        footerLink: {
            links: [
                '/DeliveryInformation',
                '/PrivacyPolicy',
                '/TramsAndConditions',
                '/Return'
            ],
            label: [
                'Delivery Information',
                'Privacy Policy',
                'Trams & Conditions',
                'Return'
            ]
        }
    },
    {
        title: 'Support',
        footerLink: {
            links: [
                '/ContactUs',
                '/Help',
                '/FAQ',
                '/Checkout'
            ],
            label: [
                'Contact Us',
                'Help',
                'FAQ',
                'Checkout'
            ]
        }
    },
];



const ProductsPageObj = [
    {
        id: 1,
        image: product1,
        title: "Product1",
        oldPrice: 100,
        price: 70,
        description: "A high-quality product that offers great value for money.",
        reviews: 120,
        rating: 4.5,
        sold: 340,
        count: 120,
        productCode: "P1-100"
    }, {
        id: 2,
        image: product2,
        title: "Product2",
        oldPrice: 120,
        price: 84,
        description: "This product combines functionality with style.",
        reviews: 98,
        rating: 4.2,
        sold: 275,
        count: 120,
        productCode: "P2-120"
    }, {
        id: 3,
        image: product3,
        title: "Product3",
        oldPrice: 150,
        price: 105,
        description: "An essential product that meets all your needs.",
        reviews: 150,
        rating: 4.6,
        sold: 310,
        count: 120,
        productCode: "P3-150"
    }, {
        id: 4,
        image: product4,
        title: "Product4",
        oldPrice: 200,
        price: 140,
        description: "Top-of-the-line product with exceptional features.",
        reviews: 200,
        rating: 4.8,
        sold: 450,
        count: 120,
        productCode: "P4-200"
    }, {
        id: 5,
        image: product5,
        title: "Product5",
        oldPrice: 80,
        price: 56,
        description: "Affordable product without compromising quality.",
        reviews: 80,
        rating: 4.0,
        sold: 180,
        count: 120,
        productCode: "P5-80"
    }, {
        id: 6,
        image: product6,
        title: "Product6",
        oldPrice: 80,
        price: 55,
        description: "Reliable and efficient product for daily use.",
        reviews: 75,
        rating: 3.9,
        sold: 160,
        count: 120,
        productCode: "P6-80"
    }, {
        id: 7,
        image: product7,
        title: "Product7",
        oldPrice: 140,
        price: 98,
        description: "High-performance product with sleek design.",
        reviews: 130,
        rating: 4.3,
        sold: 290,
        count: 120,
        productCode: "P7-140"
    }, {
        id: 8,
        image: product8,
        title: "Product8",
        oldPrice: 90,
        price: 63,
        description: "Compact and versatile product for all occasions.",
        reviews: 90,
        rating: 4.1,
        sold: 220,
        count: 120,
        productCode: "P8-90"
    }, {
        id: 9,
        image: product9,
        title: "Product9",
        oldPrice: 110,
        price: 77,
        description: "An innovative product that exceeds expectations.",
        reviews: 110,
        rating: 4.4,
        sold: 250,
        count: 120,
        productCode: "P9-110"
    }, {
        id: 10,
        image: product10,
        title: "Product10",
        oldPrice: 130,
        price: 91,
        description: "Durable product that ensures long-term satisfaction.",
        reviews: 140,
        rating: 4.5,
        sold: 300,
        count: 120,
        productCode: "P10-130"
    }, {
        id: 11,
        image: product11,
        title: "Product11",
        oldPrice: 90,
        price: 52,
        description: "Economical product with top-notch features.",
        reviews: 70,
        rating: 3.8,
        sold: 150,
        count: 120,
        productCode: "P11-90"
    }, {
        id: 12,
        image: product12,
        title: "Product12",
        oldPrice: 160,
        price: 112,
        description: "A premium product designed for the discerning customer.",
        reviews: 160,
        rating: 4.7,
        sold: 320,
        count: 120,
        productCode: "P12-160"
    }, {
        id: 13,
        image: product13,
        title: "Product13",
        oldPrice: 180,
        price: 126,
        description: "Exclusive product offering superior performance.",
        reviews: 180,
        rating: 4.8,
        sold: 400,
        count: 120,
        productCode: "P13-180"
    }, {
        id: 14,
        image: product14,
        title: "Product14",
        oldPrice: 130,
        price: 87,
        description: "Stylish and efficient product for modern living.",
        reviews: 125,
        rating: 4.3,
        sold: 280,
        count: 120,
        productCode: "P14-130"
    }
]






export default { categoryObj, productObj, clientObj, roomsObj, footerObj, ProductsPageObj };
