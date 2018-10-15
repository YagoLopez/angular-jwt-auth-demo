import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
describe('• AppComponent', function () {
    var appFixture;
    var appComponent;
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [AppComponent]
        });
        appFixture = TestBed.createComponent(AppComponent);
        appComponent = appFixture.debugElement.componentInstance;
    });
    it('should create the app', async(function () {
        expect(appComponent).toBeTruthy();
    }));
    it("should have as title 'angular-jwt-auth-demo'", async(function () {
        expect(appComponent.title).toEqual('angular-jwt-auth-demo');
    }));
    it('should have router outlet', (function () {
        var appTemplate = appFixture.debugElement.nativeElement;
        expect(appTemplate.querySelector('router-outlet')).toBeDefined();
    }));
});
//# sourceMappingURL=app.component.spec.js.map