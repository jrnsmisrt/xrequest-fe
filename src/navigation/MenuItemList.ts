import {MenuItem} from "../interface/menu-item";

export const menuItemList: MenuItem[] = [
    {name: 'Home', route: '#'},
    {
        name: 'Categoriëen',
        route: '#',
        type: 'dropdown',
        subMenu: [
            {
                name: 'Vrouw zoekt man',
                route: '#',
                type:'dropdown-item',
            },
            {
                name: 'Man zoekt vrouw',
                route: '#',
                type:'dropdown-item',
            },
            {
                name: 'Vrouw zoekt vrouw',
                route: '#',
                type:'dropdown-item',
            },
            {
                name: 'Man zoekt man',
                route: '#',
                type:'dropdown-item',
            }
        ]
    },
    {name: 'PlaceHolder #1', route: '#'},
    {name: 'PlaceHolder #2', route: '#'}
]
