export interface UsuarioCreateRequest {
    name: string
    apellido: string
    direccion_domicilio: string
    dni: string
    digito_verificador: string
    telefono: string
    role_id: number
}
