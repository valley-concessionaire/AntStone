import IAuthManager from "./IAuthManager";
import User from "./models/user";
import { JwtPayload, jwtDecode } from "jwt-decode";

export default class CookieAuthManager implements IAuthManager {

  saveAuthentication(accessToken: string, refreshToken: string,  user: User): void {
    this.setCookie('auth', accessToken, 1);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('displayName', user.full_name);
    localStorage.setItem('email', user.email);
    //localStorage.setItem('pictureUrl', user.pictureUrl ?? '/assets/img/faces/profile.jpg');
    localStorage.setItem('isStaff', user.is_staff ? 'true' : 'false');
    //this.setCookie('roles', user.roles.join(','), 1);
  }

  removeAuthentication() {
    document.cookie = 'auth=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    localStorage.removeItem('displayName');
    localStorage.removeItem('email');
    localStorage.removeItem('isStaff');
    document.cookie = 'roles=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  isAuthenticated(): boolean {
    const authToken = this.getCookie('auth');
    return authToken !== '';
  }

  getUserDisplayName(): string {
    const displayName = this.isAuthenticated() ? localStorage.getItem('displayName') : 'Anónimo';
    return displayName ?? '';
  }

  getUserPictureUrl(): string {
    const pictureUrl = this.isAuthenticated() ? localStorage.getItem('pictureUrl') : '';
    return pictureUrl ?? '/assets/img/faces/profile.jpg';
  }

  getUser(): User {
    const user: User = {
      full_name: localStorage.getItem('displayName') ?? 'Anónimo',
      //pictureUrl: localStorage.getItem('pictureUrl') ?? '/assets/img/faces/profile.jpg',
      is_staff: localStorage.getItem('isStaff') === 'true',
      email: localStorage.getItem('email') ?? '',
      //roles: this.getCookie('roles').split(',')
    };

    return user;
  }

  getUserId(): string | null { return localStorage.getItem('id'); }

  getToken(): string {
    return this.getCookie('auth');
  }

  getRole(): number {
    const token = this.getToken();
    const decodedToken = jwtDecode<JwtPayload>(token);
    return decodedToken.exp ?? 0;
  }

  getCookie(cname: string) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  setCookie(name: string, value: string, daysToExpire: number) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + daysToExpire);
    var c_value = escape(value) + ((daysToExpire == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = name + "=" + c_value;
  }

}
