interface Breadcrumb {
    label: string
    link: string
}

export interface HeaderLayoutConfig {
    breadcrumbs: Breadcrumb[]
    title: string
    showButton: boolean
    buttonLabel?: string
    buttonIcon?: string
    // buttonColor?: string
    buttonColor?: 'warn' | 'primary' | 'accent' | 'basic' | 'success' | 'orange'
    link?: string
}
