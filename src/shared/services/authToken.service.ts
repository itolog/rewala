class AuthTokenService {
    private token = 'auth-token';

    getAuthToken() {
       return window.localStorage.getItem(this.token);
    }

    setAuthToken(token: string) {
        window.localStorage.setItem(this.token, token);
    }

    removeAuthToken() {
        window.localStorage.removeItem(this.token);
    }
}

export const authTokenService = new AuthTokenService();