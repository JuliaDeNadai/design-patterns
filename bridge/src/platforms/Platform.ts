export default interface Platform {
    configureRMTP(): void
    authToken(): void

}
