export const STATUS = {
    available: 'available',
    currentlyUnavailable: 'currentlyUnavailable',
    occupied: 'occupied',
    waitingToOrder: 'waitingToOrder',
    paid: 'paid',
};

export const STATUS_LIST = [{
    value: 'available',
    label: 'available'
},{
    value: 'currentlyUnavailable',
    label: 'currentlyUnavailable'
},{
    value: 'occupied',
    label: 'occupied'
},{
    value: 'waitingToOrder',
    label: 'waitingToOrder'
},{
    value: 'paid',
    label: 'paid'
}];

export const TABLE_COLOR = {
    available: '',
    currentlyUnavailable: 'orange',
    occupied: '#F08080',
    waitingToOrder: '#FF4500',
    paid: 'orange',
};

export const TABLE_SIZE = {
    big: 'big',
    regular: 'regular',
};

export const SHAPE = {
    circle: 'circle',
};

export const tables = [
    {
        number: 1,
        shape: SHAPE.circle,
        size: TABLE_SIZE.big,
        status: STATUS.available,
    },
    {
        number: 2,
        shape: SHAPE.circle,
        size: TABLE_SIZE.regular,
        status: STATUS.available,
    },
    {
        number: 3,
        shape: SHAPE.circle,
        size: TABLE_SIZE.regular,
        status: STATUS.available,
    },
    {
        number: 4,
        shape: SHAPE.circle,
        size: TABLE_SIZE.big,
        status: STATUS.available,
    },
    {
        number: 5,
        shape: SHAPE.circle,
        size: TABLE_SIZE.regular,
        status: STATUS.available,
    },
];

export const dishes = [
    {
        id: 1,
        name: 'Dish One',
        value: 'Dish One',
        label: 'Dish One'
    },
    {
        id: 2,
        name: 'Dish Two',
        value: 'Dish Two',
        label: 'Dish Two'
    },
    {
        id: 3,
        name: 'Dish Three',
        value: 'Dish Three',
        label: 'Dish Three'
    },
    {
        id: 4,
        name: 'Dish Four',
        value: 'Dish Four',
        label: 'Dish Four'
    },
    {
        id: 5,
        name: 'Dish Five',
        value: 'Dish Five',
        label: 'Dish Five'
    },
];

export const orders = [

];
export const ORDER_STATUS = [
    {   name: 'Ordered',
        value: 'Ordered',
        label: 'Ordered' } ,
    {   name: 'Cooked',
        value: 'Cooked',
        label: 'Cooked' }
];

export const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
