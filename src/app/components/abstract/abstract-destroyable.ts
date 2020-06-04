import { Subject } from 'rxjs';
import { OnDestroy } from '@angular/core';

export class AbstractDestroyable implements OnDestroy {
    protected onDestroy$ = new Subject<void>();

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}