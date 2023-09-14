import {MenuItem} from "../interface/menu-item";
import {categoryRoutes} from "../routing/routes";

export const menuItemList: MenuItem[] = [
  {name: 'Home', route: ''},
  {
    name: 'Categoriëen',
    type: 'dropdown',
    subMenu: [
      {
        name: 'Vrouw zoekt ...',
        type: 'dropdown',
        subMenu: [
          {
            name: 'Vrouw zoekt man',
            route: categoryRoutes.FEMALE4MALE,
            type: 'dropdown-item',
          },
          {
            name: 'Vrouw zoekt vrouw',
            route: categoryRoutes.FEMALE4FEMALE,
            type: 'dropdown-item',
          },
          {
            name: 'Vrouw zoekt Koppel',
            route: categoryRoutes.FEMALE4COUPLE,
            type: 'dropdown-item',
          },
          {
            name: 'Vrouw zoekt X',
            route: categoryRoutes.FEMALE4X,
            type: 'dropdown-item',
          },
        ]
      },
      {
        name: 'Man zoekt ...',
        type: 'dropdown',
        subMenu: [
          {
            name: 'Man zoekt vrouw',
            route: categoryRoutes.MALE4FEMALE,
            type: 'dropdown-item',
          },
          {
            name: 'Man zoekt man',
            route: '#',
            type: 'dropdown-item',
          }
        ]
      },
      {
        name: 'Koppel zoekt ...',
        type: 'dropdown',
        subMenu: [
          {
            name: 'Koppel zoekt vrouw',
            route: categoryRoutes.COUPLE4FEMALE,
            type: 'dropdown-item',
          },
          {
            name: 'Koppel zoekt man',
            route: categoryRoutes.COUPLE4MALE,
            type: 'dropdown-item',
          },
          {
            name: 'Koppel zoekt koppel',
            route: categoryRoutes.COUPLE4COUPLE,
            type: 'dropdown-item',
          },
          {
            name: 'Koppel zoekt x',
            route: categoryRoutes.COUPLE4X,
            type: 'dropdown-item',
          }
        ]
      },
    ]
  },
  {name: 'About', route: '#'},
]
