export default interface User {
    id: string;
    displayName: string;
    employeeId?: string | null;
    pictureUrl: string;
    position: string | null;
    isPasswordExpired: boolean;
    roles: string[];
}