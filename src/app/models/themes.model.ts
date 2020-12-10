export interface IThemes {
    name: string;
    link: string;
}

export const BaseHref: string[] = [
    'assets/themes/',
    '/theme.css'
]

export const Themes: IThemes[] = [
    {
        name: 'Light Bootstrap',
        link: 'bootstrap4-light-blue'
    },
    {
        name: 'Dark Bootstrap',
        link: 'bootstrap4-dark-blue'
    }
]