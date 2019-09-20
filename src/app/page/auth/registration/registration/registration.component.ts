import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AppOptions } from '@app/app.options';
import { Alert, SpinnerService } from '@app/core';
import { environment as env } from '@env';
import { CoreValidators } from '@app/validation';
import { RegistrationService } from '../registration.service';


/**
 * User Registration page component
 */
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent implements OnInit {

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
    Validators.minLength(6),
    Validators.maxLength(100),
  ]);

  /**
   * Confirm password formcontrol
   */
  private confirmPassword = new FormControl('', [
    Validators.required,
    CoreValidators.equalTo(this.password)
  ]);

  /**
   * Agree terms & condition formcontrol
   */
  private isAgreed = new FormControl(false, [
    Validators.requiredTrue
  ]);

  /**
   * Init form
   */
  form: FormGroup = this.formBuilder.group({
    email: this.email,
    password: this.password,
    confirm_password: this.confirmPassword,
    is_agreed: this.isAgreed
  });

  /**
   * Constructor
   * @param formBuilder
   * @param service
   * @param router
   * @param spinner
   */
  constructor(
    private formBuilder: FormBuilder,
    private service: RegistrationService,
    private router: Router,
    private spinner: SpinnerService
  ) {
  }

  /**
   * getter for easy access of form fields
   */
  get formControls() { return this.form.controls; }

  /**
   * @ignore
   */
  ngOnInit() {
    scroll(0, 0);
    this.onPasswordChange();
  }

  /**
   * On form submit
   */
  onSubmit() {

    if (!this.form.valid) {  return; }

    this.isSubmitted = true;
    const formData: any = Object.assign({}, this.form.value);
    formData.redirect_url = `${env.baseUrl}/verify-email`;

    delete formData.confirm_password;
    delete formData.is_agreed;

    this.service
        .signup(formData)
        .subscribe(() => {
          this.handleRegistrationResponse(formData.email);
        }, err => {
          this.handleRegistrationFailure(err);
        });

  }

  /**
   * Handle registration response
   * @param email
   */
  private handleRegistrationResponse(email: string) {
    this.isSubmitted = false;
    this.router.navigate([`/registration/verify`], {
      queryParams: {email}
    });
  }

  /**
   * Handle registration failure
   * @param error
   */
  private handleRegistrationFailure(error: any) {
    this.isSubmitted = false;
    this.alert.type    = 'danger';
    this.alert.message = error.error.message;
    this.spinner.stop();
  }


  /**
   * On password change
   * Update new password validity
   */
  onPasswordChange() {
    this.password
        .valueChanges
        .subscribe(() => {
          this.confirmPassword
              .updateValueAndValidity();
        });
  }
}
