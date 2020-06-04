import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, distinctUntilChanged, startWith, takeUntil } from 'rxjs/operators';
import { SelectOptionInterface } from 'src/app/interfaces/select-option.interface';
import { FormControl } from '@angular/forms';
import { AbstractDestroyable } from 'src/app/components/abstract/abstract-destroyable';
import { StartNavigationConfig } from './config/start-navigation.config';

@Component({
    selector: 'app-start-navigation',
    styleUrls: ['./start-navigation.component.scss'],
    templateUrl: './start-navigation.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartNavigationComponent extends AbstractDestroyable implements OnInit {
    public categories = StartNavigationConfig.categories;
    public selectOptions = StartNavigationConfig.selectOptions;
    public sortControl: FormControl;
    public activeCategoryId$: Observable<string>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
    ) {
        super();
    }

    ngOnInit(): void {
        this.initactiveCategory();
        this.initSorting();
    }

    private initactiveCategory(): void {
        this.activeCategoryId$ = this.activatedRoute.queryParams
            .pipe(
                startWith(this.activatedRoute.snapshot.queryParams.category),
                map(({category}) => category),
                distinctUntilChanged(),
            );
    }

    private initSorting(): void {
        const initialValue = StartNavigationConfig.selectOptions.find((option: SelectOptionInterface) =>
            option.value === this.activatedRoute.snapshot.queryParams.sort,
        ) || null;

        this.sortControl = new FormControl(initialValue);

        this.sortControl.valueChanges
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(({value}: SelectOptionInterface) =>
                this.router.navigate(['/start'], { queryParams: {sort: value}, queryParamsHandling: 'merge' }),
            );
    }
}
