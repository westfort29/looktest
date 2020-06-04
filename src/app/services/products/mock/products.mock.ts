import { ProductInterface } from 'src/app/interfaces/product.interface';
import { CategoriesEnum } from 'src/app/enums/categories.enum';

export const productsMock: ProductInterface[] = [
    {
        id: '1',
        price: 320,
        images: ['/assets/product1.png', '/assets/product2.png', '/assets/product1.png', '/assets/product1.png', '/assets/product2.png'],
        name: 'Рубашка на пуговицах',
        categoryCode: CategoriesEnum.SHIRTS,
        categoryName: 'Рубашки',
        available: 20,
        description: 'lorem ipsum',
    },
    {
        id: '2',
        price: 240,
        images: ['/assets/product2.png', '/assets/product1.png', '/assets/product2.png', '/assets/product1.png'],
        name: 'Кросовки какие-то',
        categoryCode: CategoriesEnum.BOOTS,
        categoryName: 'Кроссовки',
        available: 3,
        description: 'lorem ipsum',
    },
    {
        id: '3',
        price: 90,
        images: ['/assets/product1.png'],
        name: 'Штаны такие-то',
        categoryCode: CategoriesEnum.PANTS,
        categoryName: 'Штаны',
        available: 1,
        description: 'lorem ipsum',
    },
    {
        id: '4',
        price: 120,
        images: ['/assets/product1.png', '/assets/product1.png'],
        name: 'Плащ какой-то, допустим, с очень длинным названием, ну так точно не влезет, проверяй',
        categoryCode: CategoriesEnum.COATS,
        categoryName: 'Плащи',
        available: 4,
        description: 'lorem ipsum',
    },
];
