import { NgModule } from '@angular/core';
import { HeaderComponent } from "./smart/header/header.component";
import { SelectComponent } from './dumb/select/select.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CartComponent } from './smart/cart/cart.component';
import { CartProductComponent } from './dumb/cart-product/cart-product.component';
import { InvokeFunctionPipeModule } from '../pipes/invoke-funcation/invoke-function-pipe.module';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        InvokeFunctionPipeModule,
    ],
    declarations: [
        HeaderComponent,
        SelectComponent,
        CartComponent,
        CartProductComponent,
    ],
    exports: [
        HeaderComponent,
        SelectComponent,
        CartComponent,
        CartProductComponent,
    ],
})
export class ComponentsModule {}
