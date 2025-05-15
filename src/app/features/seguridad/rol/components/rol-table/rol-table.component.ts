import { Component } from '@angular/core'

@Component({
    selector: 'app-rol-table',
    standalone: false,
    templateUrl: './rol-table.component.html',
    styleUrl: './rol-table.component.css',
})
export class RolTableComponent {
    displayedColumns: string[] = [
        'No',
        'Rol',
        'Descripción',
        'Creado',
        'Acciones',
    ]
}
