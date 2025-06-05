export const RoutesName = {
    AUTH: { route: 'auth', name: '', icon: 'lock-closed-outline' },
    LOGIN: { route: 'login', name: '', icon: 'log-in-outline' },
    INDEX: { route: '', name: 'Inicio', icon: 'home-outline' },
    DASHBOARD: { route: 'dashboard', name: 'Inicio', icon: 'home-outline' },
    PROFILE: { route: 'profile', name: 'Mi cuenta', icon: 'person-outline' },
    ROL: {
        index: { route: 'rol' },
        create: { route: 'create' },
        edit: { route: 'edit' },
    },
    USUARIO: {
        index: { route: 'usuario' },
        create: { route: 'create' },
        edit: { route: 'edit' },
    },
    PAGESMESSAGE: {
        unauthorized: { route: 'unauthorized' },
        notfound: { route: 'not-found' },
    },
}
