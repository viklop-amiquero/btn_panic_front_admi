export interface HeaderLayoutConfig {
    breadcrumbs: string[]
    title: string
    showButton: boolean
    buttonLabel?: string
    buttonIcon?: string
    // buttonColor?: string
    buttonColor?: 'warn' | 'primary' | 'accent' | 'basic' | 'success' | 'orange'
    link?: string
}
