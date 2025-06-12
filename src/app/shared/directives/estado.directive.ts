import {
    Directive,
    ElementRef,
    Input,
    OnChanges,
    Renderer2,
    SimpleChanges,
} from '@angular/core'

@Directive({
    selector: '[appEstado]',
    standalone: false,
})
export class EstadoDirective implements OnChanges {
    @Input('appEstado') estado!: string

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['estado']) {
            this.updateEstadoBadge()
        }
    }

    updateEstadoBadge(): void {
        const estadoMap: Record<
            string,
            { text: string; bgColor: string; textColor: string }
        > = {
            '0': {
                text: 'Eliminado',
                bgColor: '#fef2f2',
                textColor: '#b91c1c',
            },
            '1': { text: 'Activo', bgColor: '#ecfdf5', textColor: '#047857' }, // verde
            '2': {
                text: 'Atendido',
                bgColor: '#dbeafe',
                textColor: '#2b7fff',
            },
        }

        const estadoInfo = estadoMap[this.estado] || {
            text: 'Desconocido',
            bgColor: '#f3f4f6',
            textColor: '#374151',
        }

        this.el.nativeElement.innerHTML = estadoInfo.text

        this.renderer.setStyle(
            this.el.nativeElement,
            'backgroundColor',
            estadoInfo.bgColor
        )
        this.renderer.setStyle(
            this.el.nativeElement,
            'color',
            estadoInfo.textColor
        )

        this.renderer.setStyle(this.el.nativeElement, 'padding', '4px 8px')
        this.renderer.setStyle(this.el.nativeElement, 'borderRadius', '999px')
        this.renderer.setStyle(this.el.nativeElement, 'fontWeight', '500')
        this.renderer.setStyle(this.el.nativeElement, 'fontSize', '12px')
        this.renderer.setStyle(this.el.nativeElement, 'display', 'inline-block')
    }
}
