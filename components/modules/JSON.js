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




export default { categoryObj, productObj, clientObj, roomsObj ,footerObj};
