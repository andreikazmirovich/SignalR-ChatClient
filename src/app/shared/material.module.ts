import { NgModule } from "@angular/core";

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

const modules = [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule
];

@NgModule({
    imports: [
        ...modules
    ],
    exports: [
        ...modules
    ]
})
export class MaterialModule { }
