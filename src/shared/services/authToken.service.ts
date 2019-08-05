import { of } from 'rxjs';

class AuthTokenService {
    static token = 'auth-token';

    static getAuthToken() {
       return of(window.localStorage.getItem(this.token));
    }

    static setAuthToken(token: string) {
       return of(window.localStorage.setItem(this.token, token));
    }

    static removeAuthToken() {
       return of(window.localStorage.removeItem(this.token));
    }
}

export default AuthTokenService;
