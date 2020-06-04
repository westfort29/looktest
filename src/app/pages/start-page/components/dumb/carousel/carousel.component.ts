import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'app-carousel',
    styleUrls: ['./carousel.component.scss'],
    templateUrl: './carousel.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {
    @Input() images: string[];

    public selectedImageIndex = 0;

    public setSelectedImage(index: number): void {
        this.selectedImageIndex = index;
    }

    public preventDefault($event: Event): void {
        $event.preventDefault();
        $event.stopPropagation();
    }
}
