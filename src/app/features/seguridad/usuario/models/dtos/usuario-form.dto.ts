export interface UsuarioFormDto {
    data: UsuarioFormData
}

export interface UsuarioFormData {
    id: number
    nombre: string
    apellido: string
    direccion_domicilio: string
    dni: string
    digito_verificador: string
    telefono: string
    role_id: number
}
