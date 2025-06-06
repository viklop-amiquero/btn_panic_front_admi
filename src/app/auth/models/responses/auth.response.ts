import { PersonaDto } from '../dtos/persona.dto'
import { UserAuthDto } from '../dtos/userAuth.dto'

export interface AuthResponse {
    token: string
    role: string
    user: UserAuthDto
    persona: PersonaDto
}
