import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { PermissionService } from '../../../services/permission/permission.service'
import { RoutesName } from '../../../../shared/routes/routes'

export const permisionGuard: CanActivateFn = (route, state) => {
    const permissionService = inject(PermissionService)
    const router = inject(Router)

    const menuKey = route.data['menuKey']
    const action = route.data['action']

    const hasPermission = permissionService.userHasPermission(menuKey, action)

    if (!hasPermission) {
        console.log('no autorizado')
        return router.navigate([RoutesName.PAGESMESSAGE.unauthorized.route])
        // return router.parseUrl('/unauthorized')
    }

    return true
}
