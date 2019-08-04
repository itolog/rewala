class AuthTokenService {
    static token = 'auth-token';

    static getAuthToken() {
       return window.localStorage.getItem(this.token);
    }

    static setAuthToken(token: string) {
        window.localStorage.setItem(this.token, token);
    }

    static removeAuthToken() {
        window.localStorage.removeItem(this.token);
    }
}

export default AuthTokenService;