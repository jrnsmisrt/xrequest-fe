import {MenuItem} from "../interface/menu-item";
import {categoryRoutes} from "../routing/routes";

export const menuItemList: MenuItem[] = [
    {name: 'Home', route: '#'},
    {
        name: 'Categoriëen',
        type: 'dropdown',
        subMenu: [
            {
                name: 'Vrouw zoekt man',
                route: categoryRoutes.FEMALE4MALE,
                type:'dropdown-item',
            },
            {
                name: 'Man zoekt vrouw',
                route: categoryRoutes.MALE4MALE,
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
    {name: 'About', route: '#'},
]
