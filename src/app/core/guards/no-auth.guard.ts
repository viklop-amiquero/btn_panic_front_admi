import { CanActivateFn, Router } from '@angular/router'
import { Observable, tap, map } from 'rxjs'
import { AuthService } from '../../auth/services/auth/auth.service'
import { RoutesName } from '../../shared/routes/routes'
import { inject } from '@angular/core'

const checkAuthStatus = (): Observable<boolean> => {
    const authService: AuthService = inject(AuthService)
    const router: Router = inject(Router)

    return authService.checkAuthentication().pipe(
        tap((isAuthenticaded) => {
            if (isAuthenticaded) {
                // router.navigateByUrl('index')
                router.navigate([RoutesName.INDEX.route])
            }
        }),
        map((isAuthenticaded) => !isAuthenticaded)
    )
}

export const noAuthGuard: CanActivateFn = (route, state) => {
    return checkAuthStatus()
}
