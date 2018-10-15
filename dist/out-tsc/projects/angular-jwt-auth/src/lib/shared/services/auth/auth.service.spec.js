import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AlertService } from '../../components/alert.service';
import { MockupBackendInterceptor } from '../../interceptors/mockup.backend.interceptor';
import { JwtInterceptor } from './jwt.interceptor';
var authService;
var registeredUsers = [{
        id: 1,
        firstName: 'firstName1',
        lastName: 'lastName1',
        email: 'username1@domain.com',
        password: 'password1',
        role: 'admin'
    }];
describe('• Authorization Service', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                AuthService,
                AlertService,
                { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
                { provide: HTTP_INTERCEPTORS, useClass: MockupBackendInterceptor, multi: true }
            ]
        });
        authService = TestBed.get(AuthService);
        // Simulate registered users for testing, writing them to localStorage
        localStorage.setItem('users', JSON.stringify(registeredUsers));
    });
    it('login() - Right email and password', function () {
        authService.login('username1@domain.com', 'password1').subscribe(function (user) {
            expect(localStorage.getItem('loggedinUser')).not.toBe(null);
            expect(user.token).toEqual('fake-jwt-token');
        });
    });
    it('login() - Wrong email and password', function () {
        authService.login('xxx', 'xxx').subscribe(function () { }, function (error) {
            expect(error.error.message).toBe('Invalid email and/or password');
        });
    });
    it('login() - Wrong email', function () {
        authService.login('xxx', 'password1').subscribe(function () { }, function (error) {
            expect(error.error.message).toBe('Invalid email and/or password');
        });
    });
    it('login() - Wrong password', function () {
        authService.login('xxx', 'password1').subscribe(function () { }, function (error) {
            expect(error.error.message).toBe('Invalid email and/or password');
        });
    });
    it('logout()', function () {
        authService.logout();
        expect(localStorage.getItem('loggedinUser')).toBe(null);
    });
    afterAll(function () {
        localStorage.clear();
    });
});
//# sourceMappingURL=auth.service.spec.js.map