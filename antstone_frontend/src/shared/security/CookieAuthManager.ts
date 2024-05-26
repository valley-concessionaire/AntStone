import IAuthManager from "./IAuthManager";
import User from "./user";

export default class CookieAuthManager implements IAuthManager {

  saveAuthentication(token: string, user: User): void {
    this.setCookie('auth', token, 1);
    localStorage.setItem('id', user.id ?? '');
    localStorage.setItem('displayName', user.displayName);
    localStorage.setItem('pictureUrl', user.pictureUrl ?? '/assets/img/faces/profile.jpg');
    localStorage.setItem('position', user.position ?? '');
    this.setCookie('roles', user.roles.join(','), 1);
  }

  removeAuthentication() {
    document.cookie = 'auth=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    localStorage.removeItem('displayName');
    localStorage.removeItem('pictureUrl');
    localStorage.removeItem('position');
    localStorage.removeItem('selectedBranchId');
    localStorage.removeItem('selectedBranch');
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
      displayName: localStorage.getItem('displayName') ?? 'Anónimo',
      pictureUrl: localStorage.getItem('pictureUrl') ?? '/assets/img/faces/profile.jpg',
      id: localStorage.getItem('id') ?? '',
      position: localStorage.getItem('position') ?? '',
      isPasswordExpired: false,
      roles: this.getCookie('roles').split(',')
    };

    return user;
  }

  getUserId(): string | null { return localStorage.getItem('id'); }

  getToken(): string {
    return this.getCookie('auth');
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
