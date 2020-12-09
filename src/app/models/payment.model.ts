export interface Payment {
    id: string;
    name: string;
    total: number;
    discount: number;
}

export const PaymentsNames = [
    'Оплата по договору',
    'Перевод физ. лицу',
    'Перевод юр. лицу',
    'Оплата услуг',
    'Покупка товара'
]