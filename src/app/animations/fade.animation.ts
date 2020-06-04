import { transition, style, animate } from "@angular/animations";

export const fadeAnimation = [
    transition(
      ':enter', 
      [
        style({ opacity: 0 }),
        animate('0.3s ease-out', 
                style({ opacity: 1 }))
      ]
    ),
    transition(
      ':leave', 
      [
        style({ opacity: 1 }),
        animate('0.3s ease-in', 
                style({ opacity: 0 }))
      ]
    )
];
