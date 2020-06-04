import { NgModule } from '@angular/core';
import { InvokeFunctionPipe } from './invoke-function.pipe';

@NgModule({
    providers: [InvokeFunctionPipe],
    declarations: [InvokeFunctionPipe],
    exports: [InvokeFunctionPipe],
})
export class InvokeFunctionPipeModule {}
