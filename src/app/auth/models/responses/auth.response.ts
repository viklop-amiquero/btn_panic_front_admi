import { PersonaDto } from '../dtos/persona.dto'
import { UserAuthDto } from '../dtos/userAuth.dto'

export interface AuthResponse {
    token: string
    role: string
    user: UserAuthDto
    persona: PersonaDto
    role_menu: RoleMenu[]
}
interface RoleMenu {
    id: number
    role_id: number
    menu_id: number
    permiso_id: number
}
