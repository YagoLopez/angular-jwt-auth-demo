// todo: use real jwt
// todo: implement http logger: https://angular.io/guide/http#logging
/**
 * HttpInterceptor that adds authorization header with JWT for each request of a logged in user
 */
var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // get logged in user
        var loggedinUser = JSON.parse(localStorage.getItem('loggedinUser'));
        if (loggedinUser && loggedinUser.token) {
            // add JWT header
            request = request.clone({
                setHeaders: { Authorization: "Bearer " + loggedinUser.token }
            });
        }
        return next.handle(request);
    };
    return JwtInterceptor;
}());
export { JwtInterceptor };
//# sourceMappingURL=jwt.interceptor.js.map