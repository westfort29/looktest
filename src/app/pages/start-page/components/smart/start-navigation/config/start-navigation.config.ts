import { SelectOptionInterface } from 'src/app/interfaces/select-option.interface';
import { SortingEnum } from 'src/app/enums/sorting.enum';
import { CategoriesEnum } from 'src/app/enums/categories.enum';

export class StartNavigationConfig {
    public static readonly categories: Readonly<Record<string, string>>[] = [
        {
            name: 'Все',
            paramName: CategoriesEnum.ALL,
        },
        {
            name: 'Плащи',
            paramName: CategoriesEnum.COATS,
        },
        {
            name: 'Кроссовки',
            paramName: CategoriesEnum.BOOTS,
        },
        {
            name: 'Рубашки',
            paramName: CategoriesEnum.SHIRTS,
        },
        {
            name: 'Брюки',
            paramName: CategoriesEnum.PANTS,
        }
    ];

    public static readonly selectOptions: Readonly<SelectOptionInterface>[] = [
        {
            name: 'От дорогих к дешевым',
            value: SortingEnum.EXP_TO_CHEAP,
        },
        {
            name: 'От дешевых к дорогим',
            value: SortingEnum.CHEAP_TO_EXP,
        },
        {
            name: 'Популярные',
            value: SortingEnum.POPULAR,
        },
        {
            name: 'Новые',
            value: SortingEnum.NEW,
        },
    ];
}
