import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AppOptions } from '@app/app.options';
import { SessionService, Alert, Roles, AuthService, SpinnerService } from '@app/core';
import { environment as env } from '@env';
import { CoreValidators } from '@app/validation';


/**
 * User Login page component
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  /**
   * Flag for form submit status
   */
  isSubmitted = false;

  /**
   * Alert
   */
  alert = new Alert();

  /**
   * Email formcontrol
   */
  private email = new FormControl('', [
    Validators.required,
    Validators.pattern(AppOptions.patterns.email),
    Validators.maxLength(255)
  ]);

  /**
   * Password formcontrol
   */
  private password = new FormControl('', [
    Validators.required,
    CoreValidators.blankSpace(),
    Validators.maxLength(100)
  ]);

  /**
   * Remember me formcontrol
   */
  private rememberMe = new FormControl(false);

  /**
   * Init form
   */
  form: FormGroup = this.formBuilder.group({
    email: this.email,
    password: this.password,
    rememberMe: this.rememberMe
  });

  /**
   * Return url
   */
  private returnUrl: string;

  /**
   * Constructor
   * @param formBuilder
   * @param service
   * @param session
   * @param route
   * @param spinner
   */
  constructor(
    protected formBuilder: FormBuilder,
    protected service: AuthService,
    protected session: SessionService,
    protected route: ActivatedRoute,
    protected spinner: SpinnerService
  ) {
    this.returnUrl = this.route.snapshot.queryParams.return;
  }

  /**
   * @ignore
   */
  ngOnInit() {
    scroll(0, 0);
  }

  /**
   * On form submit
   */
  onSubmit() {

    if (!this.form.valid) { return; }

    this.isSubmitted    = true;
    const formData: any = Object.assign({}, this.form.value);

    this.service
        .login(formData)
        .subscribe((res: any) => {
          this.handleLoginResponse(res);
        }, (err) => {
          this.handleLoginFailure(err);
        });

  }

  /**
   * Handle login response
   * @param loginResponse
   */
  private handleLoginResponse(loginResponse: any) {

    this.session.seed(loginResponse);

    // Get user data and Set User info
    this.service
        .getMe()
        .subscribe(user => {
          this.isSubmitted = false;

          this.session.seedAccount(user);

          if (this.returnUrl) {
            return window.location.replace(`${env.baseUrl}${this.returnUrl}`);
          }

          window.location.replace(`${env.baseUrl}/dashboard`);
        }, () => {
          this.isSubmitted = false;
          this.spinner.stop();
          this.session.logout();
        });

  }

  /**
   * Handle login failure
   * @param error
   */
  private handleLoginFailure(error): void {
    this.isSubmitted   = false;
    this.alert.type    = 'danger';
    this.alert.message = error.error.message;
    this.spinner.stop();
  }

}
