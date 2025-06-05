import { PersonaDto } from '../dtos/persona.dto'
import { RoleMenuAuthDto } from '../dtos/RoleMenuAuth.dto'
import { UserAuthDto } from '../dtos/userAuth.dto'

export interface AuthResponse {
    token: string
    role: string
    user: UserAuthDto
    persona: PersonaDto
    role_menu: RoleMenuAuthDto[]
}
