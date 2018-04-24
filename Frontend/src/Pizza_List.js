
var pizza_info = [
    {
        id:1,
        icon:'assets/images/female.jpg',
        title: "Пацієнт 1",
        type: 'Діагноз: виразкова хвороба',
        content: {
            meat: ['ПІБ: Марченко Олена Василівна'],
            chicken: ['Стать: Жіноча'],
            cheese: ['Дата народження: 11.12.1991']
            // pineapple: ['ананаси'],
            // additional: ['томатна паста', 'петрушка']
        },
        small_size:{
            weight: 370,
            size: 30,
            price: 99
        },
        big_size:{
            weight: 660,
            size: 40,
            price: 169
        },
        //is_new:true,
        //is_popular:true

    },
    {
        id:2,
        icon:'assets/images/female.jpg',
        title: "Пацієнт 2",
        type: 'Діагноз: -',
        content: {
            meat: ['ПІБ: Войтенко Лариса Михайлівна'],
            cheese: ['Стать: жіноча'],
            mushroom: ['Дата народження: 10.10.1973']
        },
        small_size:{
            weight: 460,
            size: 30,
            price: 139
        },
        big_size:{
            weight: 840,
            size: 40,
            price: 199
        },
        //is_popular:true
    },
    {
        id:3,
        icon:'assets/images/man.jpg',
        title: "Пацієнт 3",
        type: 'Діагноз: кишкове отруєння',
        content: {
            meat: ['Сахно Петро Ігорович'],
            cheese: ['Стать : чоловіча'],
            pineapple: ['Дата народження: 5.6.1989']
        },
        small_size:{
            weight: 430,
            size: 30,
            price: 115
        },
        big_size:{
            weight: 780,
            size: 40,
            price: 179
        }
    },
    {
        id:4,
        icon:'assets/images/man.jpg',
        title: "Пацієнт 4",
        type: 'Діагноз: кишкове отруєння',
        content: {
            meat: ['Олійник Максим Володимирович'],
            cheese: ['Стать : чоловіча'],
            mushroom: ['Дата народження: 4.3.1967']
        },
        small_size:{
            weight: 450,
            size: 30,
            price: 111
        },
        big_size:{
            weight: 790,
            size: 40,
            price: 169
        }
    },

    {
        id:43,
        icon:'assets/images/female.jpg',
        title: "Пацієнт 5",
        type: 'Діагноз: розлад шлункової системи',
        content: {
            meat: ['Росоха Ольга Олександрівна'],
            cheese: ['Стать : жіноча'],
            mushroom: ['Дата народження: - ']
        },
        small_size:{
            weight: 470,
            size: 30,
            price: 115
        },
        big_size:{
            weight: 780,
            size: 40,
            price: 180
        }
    },

    {
        id:6,
        icon:'assets/images/man.jpg',
        title: "Пацієнт 6",
        type: 'Діагноз: гостре вірусне захворювання підшлункової',
        content: {
            meat: ['Рило Іван Іванович'],
            cheese: ['Стать : чоловіча'],
            additional: ['Дата народження: 23.5.1999']
        },
        small_size:{
            weight: 400,
            size: 30,
            price: 189
        },
        big_size:{
            weight: 700,
            size: 40,
            price: 299
        }
    }
];

module.exports = pizza_info;