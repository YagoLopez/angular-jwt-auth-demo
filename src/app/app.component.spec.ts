import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';

describe('• AppComponent', () => {

  let appFixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    });
    appFixture = TestBed.createComponent(AppComponent);
    appComponent = appFixture.debugElement.componentInstance;
  });

  it('should create the app', async(() => {
    expect(appComponent).toBeTruthy();
  }));

  it(`should have as title 'angular-jwt-auth-demo'`, async(() => {
    expect(appComponent.title).toEqual('angular-jwt-auth-demo');
  }));

  it('should have router outlet', (() => {
    const appTemplate = appFixture.debugElement.nativeElement;
    expect(appTemplate.querySelector('router-outlet')).toBeDefined();
  }));

});
