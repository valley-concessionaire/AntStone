export default function translateStatus(status: string): string {
    switch (status) {
        case 'IN_PROGRESS':
            return 'En progreso';
        case 'COMPLETED':
            return 'Completado';
        case 'PENDING':
            return 'Pendiente';
        default:
            return 'Estado desconocido';
    }
}