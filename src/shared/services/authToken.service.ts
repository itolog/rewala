class AuthTokenService {
    private token = 'auth-token';

    getAuthToken() {
       return window.localStorage.getItem(this.token);
    }

    setAuthToken(token: string) {
        window.localStorage.setItem(this.token, token);
    }
}

export const authTokenService = new AuthTokenService();