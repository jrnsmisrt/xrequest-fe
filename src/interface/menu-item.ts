export interface MenuItem {
    name: string,
    route?: string,
    type?: string,
    subMenu?: MenuItem[],
}
