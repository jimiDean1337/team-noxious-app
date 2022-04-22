import { Injectable } from '@angular/core';
import { ToastrService, GlobalConfig } from 'ngx-toastr';
import { stringify } from 'querystring';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  Toasts: any = [];

  constructor(private toastr: ToastrService) { }

  public success(message: string, title?: string, override?: any) {
    const toast = this.toastr.success(message, title, override);
    this.Toasts.push(toast);
  }

  public warning(message: string, title?: string, override?: any) {
    const toast = this.toastr.warning(message, title, override);
    this.Toasts.push(toast);
  }

  public error(message: string, title?: string, override?: any) {
    const toast = this.toastr.error(message, title, override);
    this.Toasts.push(toast);
  }

  public info(message: string, title?: string, override?: any) {
    const toast = this.toastr.info(message, title, override);
    this.Toasts.push(toast);
  }
}
