import { NgModule } from '@angular/core';
import { StartPageComponent } from './start-page.component';
import { StartNavigationComponent } from './components/smart/start-navigation/start-navigation.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './components/smart/products/products.component';
import { ProductComponent } from './components/dumb/product/product.component';
import { CarouselComponent } from './components/dumb/carousel/carousel.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        ComponentsModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        StartPageComponent,
        StartNavigationComponent,
        ProductsComponent,
        ProductComponent,
        CarouselComponent,
    ],
    exports: [
        StartPageComponent,
        StartNavigationComponent,
        ProductsComponent,
        ProductComponent,
        CarouselComponent,
    ]
})
export class StartPageModule {}
