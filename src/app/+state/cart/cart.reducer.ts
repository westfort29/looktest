import { ActionReducer } from '@ngrx/store';
import { ProductCartInterface } from 'src/app/interfaces/product-cart.interface';
import { CartActions, CartActionTypes, AddProductToCartAction, ChangeProductAmountAction } from './cart.actions';
import { CategoriesEnum } from 'src/app/enums/categories.enum';

export const initialState: ProductCartInterface[] = [
    {
        id: '1',
        price: 320,
        images: ['/assets/product1.png', '/assets/product2.png', '/assets/product1.png', '/assets/product2.png'],
        name: 'Рубашка на пуговицах',
        categoryCode: CategoriesEnum.SHIRTS,
        categoryName: 'Рубашки',
        available: 20,
        description: 'lorem ipsum',
        amount: 2,
    },
    {
        id: '3',
        price: 90,
        images: ['/assets/product2.png'],
        name: 'Штаны такие-то',
        categoryCode: CategoriesEnum.PANTS,
        categoryName: 'Штаны',
        available: 1,
        description: 'lorem ipsum',
        amount: 1,
    },
    {
        id: '35',
        price: 190,
        images: ['/assets/product1.png'],
        name: 'Штаны такие-то 2',
        categoryCode: CategoriesEnum.PANTS,
        categoryName: 'Штаны',
        available: 1,
        description: 'lorem ipsum',
        amount: 1,
    },
    {
        id: '34',
        price: 40,
        images: ['/assets/product2.png'],
        name: 'Штаны такие-то 3',
        categoryCode: CategoriesEnum.PANTS,
        categoryName: 'Штаны',
        available: 1,
        description: 'lorem ipsum',
        amount: 1,
    },
    {
        id: '33',
        price: 10,
        images: ['/assets/product1.png'],
        name: 'Штаны такие-то 4',
        categoryCode: CategoriesEnum.PANTS,
        categoryName: 'Штаны',
        available: 1,
        description: 'lorem ipsum',
        amount: 1,
    },
    {
        id: '32',
        price: 290,
        images: ['/assets/product2.png'],
        name: 'Нужно больше штанов',
        categoryCode: CategoriesEnum.PANTS,
        categoryName: 'Штаны',
        available: 1,
        description: 'lorem ipsum',
        amount: 1,
    },
    {
        id: '31',
        price: 590,
        images: ['/assets/product1.png'],
        name: 'Штаны кончились',
        categoryCode: CategoriesEnum.PANTS,
        categoryName: 'Штаны',
        available: 1,
        description: 'lorem ipsum',
        amount: 1,
    },
];

function addProductToCart(state: ProductCartInterface[], action: AddProductToCartAction): ProductCartInterface[] {
    return [
        ...state,
        {...action.payload},
    ];
}

function changeProductAmount(state: ProductCartInterface[], action: ChangeProductAmountAction): ProductCartInterface[] {
    return state.map((product: ProductCartInterface) => {
            if (product.id === action.payload.id) {
                return {...product, amount: action.payload.amount};
            }

            return product;
        })
        .filter((product: ProductCartInterface) => !!product.amount);
}

function clearCart(): ProductCartInterface[] {
    return [
        ...initialState,
    ];
}

const reducersMap: Record<string, ActionReducer<ProductCartInterface[], CartActions>> = {
    [CartActionTypes.ADD_PRODUCT_TO_CART]: addProductToCart,
    [CartActionTypes.CHANGE_PRODUCT_AMOUNT]: changeProductAmount,
    [CartActionTypes.CLEAR_CART]: clearCart,
};

export function reducer(state: ProductCartInterface[] = initialState, action: CartActions): ProductCartInterface[] {
    return action.type in reducersMap ? reducersMap[action.type](state, action) : state;
}
