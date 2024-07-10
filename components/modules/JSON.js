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
        image: product1,
        title: "Product 1",
        oldPrice: 100,
        price: 70
    }, {
        image: product2,
        title: "Product 2",
        oldPrice: 120,
        price: 84
    }, {
        image: product3,
        title: "Product 3",
        oldPrice: 150,
        price: 105
    }, {
        image: product4,
        title: "Product 4",
        oldPrice: 200,
        price: 140
    }, {
        image: product5,
        title: "Product 5",
        oldPrice: 80,
        price: 56
    }, {
        image: product6,
        title: "Product 6",
        oldPrice: 80,
        price: 55
    }, {
        image: product7,
        title: "Product 7",
        oldPrice: 140,
        price: 98
    }, {
        image: product8,
        title: "Product 8",
        oldPrice: 90,
        price: 63
    }, {
        image: product9,
        title: "Product 9",
        oldPrice: 110,
        price: 77
    }, {
        image: product10,
        title: "Product 10",
        oldPrice: 130,
        price: 91
    }, {
        image: product11,
        title: "Product 11",
        oldPrice: 90,
        price: 52
    }, {
        image: product12,
        title: "Product 12",
        oldPrice: 160,
        price: 112
    }, {
        image: product13,
        title: "Product 13",
        oldPrice: 180,
        price: 126
    }, {
        image: product14,
        title: "Product 14",
        oldPrice: 130,
        price: 87
    }
]






export default { categoryObj, productObj, clientObj, roomsObj, footerObj, ProductsPageObj };
