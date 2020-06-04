import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'invokeFunction',
})
export class InvokeFunctionPipe implements PipeTransform {
    transform(value: any, handler: (value: any, ...rest) => any, ...rest): any {
        return handler(value, ...rest);
    }
}
