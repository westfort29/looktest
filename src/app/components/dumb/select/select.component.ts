import { Component, ChangeDetectionStrategy, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectOptionInterface } from 'src/app/interfaces/select-option.interface';
import { trigger } from '@angular/animations';
import { fadeAnimation } from 'src/app/animations/fade.animation';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectComponent),
            multi: true,
        },
    ],
    animations: [
        trigger('inOutAnimation', fadeAnimation),
    ]
})
export class SelectComponent implements ControlValueAccessor {
    @Input('value') _value: SelectOptionInterface;
    @Input() options: SelectOptionInterface[] = [];
    @Input() placeholder: string;

    public onChange: Function = () => {};
    public onTouched: Function = () => {};
    public isOpen = false;

    public get value(): SelectOptionInterface {
        return this._value;
    }

    public set value(value: SelectOptionInterface) {
        const previousValue = this._value;

        this._value = value;
        this.onChange(value, previousValue);
        this.onTouched();
    }

    public get currentOption(): SelectOptionInterface {
        return this.value || null;
    }

    public registerOnChange(fn: Function): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: Function): void {
        this.onTouched = fn;
    }

    public writeValue(value: SelectOptionInterface): void {
        if (value) {
            this.value = value;
        }
    }

    public dirtyWriteValue(text: SelectOptionInterface): void {
        this._value = text;
    }

    public toggleExpand(): void {
        this.isOpen = !this.isOpen;
    }

    public selectOption(option: SelectOptionInterface): void {
        this.value = option;
    }
}
