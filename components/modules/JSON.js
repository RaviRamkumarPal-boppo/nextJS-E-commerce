import sideTable from '@/public/pal/side-table.jpg';
import chair from '@/public/pal/chair.png';
import DinnerTable from '@/public/pal/dinner-table.jpg';
import Pillow from '@/public/pal/pillow.jpg';
import Clock from '@/public/pal/clock.jpg';
import lamp from '@/public/pal/lamp.png';

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

export default { categoryObj, productObj };
