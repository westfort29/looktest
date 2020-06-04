import { CategoriesEnum } from '../enums/categories.enum';

export interface ProductInterface {
    id: string;
    price: number;
    images: string[];
    name: string;
    categoryCode: CategoriesEnum;
    categoryName: string;
    available: number;
    description: string;
}
