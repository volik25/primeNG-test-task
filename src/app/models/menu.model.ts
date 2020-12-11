import {MenuItem, PrimeIcons as pi} from 'primeng/api';

export const menuItems: MenuItem[] = [
    {
        label: 'Главная',
        icon: pi.HOME,
        
    },
    {
        label: 'Пользователи',
        icon: pi.USERS,
        items: [
            {
                label: 'Личный кабинет',
                icon: pi.USER
            },
            {
                separator: true
            },
            {
                label: 'Все пользователи',
                icon: pi.USERS
            },
            {
                label: 'Новый пользователь',
                icon: pi.USER_PLUS
            },
            {
                label: 'Редактировать пользователя',
                icon: pi.USER_EDIT
            }
        ]
    },
    {
        label: 'Транзакции',
        icon: pi.MONEY_BILL,
        items: [
            {
                label: 'Все транзакции',
                icon: pi.BRIEFCASE,
                items: [
                    {
                        label: 'Таблицей',
                        icon: pi.TABLE
                    },
                    {
                        label: 'Списком',
                        icon: pi.LIST
                    }
                ]
            },
            {
                separator: true
            },
            {
                label: 'Ошибки транзакций',
                icon: pi.BAN
            }
        ]
    }
];