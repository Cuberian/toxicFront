export function AuthException(message) {
    this.message = message;
    this.name = "AuthException";
}