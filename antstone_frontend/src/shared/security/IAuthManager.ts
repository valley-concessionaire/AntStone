import User from "./models/user";

export default interface IAuthManager {
    saveAuthentication(token: string, user: User): void;
    isAuthenticated(): boolean;
    getToken(): string;
    getUserDisplayName() : string;
    getUserPictureUrl(): string;
    getUser(): User;
    removeAuthentication() : void
}