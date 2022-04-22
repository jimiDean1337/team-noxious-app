import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/core/services/auth.service';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'tna-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {
  formModel: any = {};

  constructor(private router: Router, private authService: AuthService) { }

  resetPasswordInit(email: string) {
    return this.authService.passwordReset(email).subscribe();
  }

  ngOnInit(): void {
  }

}
