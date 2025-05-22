import { CanActivateFn, Router } from '@angular/router'
import { RolService } from '../services/rol.service'
import { inject } from '@angular/core'
import { Observable, map, of, catchError } from 'rxjs'
import { RoutesName } from '../../../../shared/routes/routes'

const existRoleMenu = (id: number): Observable<boolean> => {
    const rolService: RolService = inject(RolService)
    const router: Router = inject(Router)

    return rolService.getRoleMenuById(id).pipe(
        map((data) => {
            if (!data) {
                router.navigate([RoutesName.ROL.index.route])
            }
            return true
        }),
        catchError((error) => {
            router.navigate([RoutesName.ROL.index.route])
            return of(false)
        })
    )
}

export const roleMenuExistsGuard: CanActivateFn = (route, state) => {
    const id = +route.paramMap.get('id')!
    return existRoleMenu(id)
}
