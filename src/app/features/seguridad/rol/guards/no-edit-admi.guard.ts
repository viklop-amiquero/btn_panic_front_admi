import { CanActivateFn, Router } from '@angular/router'
import { inject } from '@angular/core'
import { RoutesName } from '../../../../shared/routes/routes'

export const noEditAdmiGuard: CanActivateFn = (route, state) => {
    const router = inject(Router)
    const id = +route.paramMap.get('id')!

    if (id === 1) {
        return router.createUrlTree([RoutesName.ROL.index.route])
    }

    return true
}
