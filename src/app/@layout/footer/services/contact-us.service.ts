import {inject, Injectable} from '@angular/core';
import {config} from '@core/utils/config';
import {ContactUsFormInterface} from '@layout/footer/interfaces/contact-us-form.interface';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  private httpClient = inject(HttpClient)

  submitContactUsForm(dto: ContactUsFormInterface) {
    return this.httpClient.post(environment.apiUrl + config.apiUrl.sendMessage, dto)
  }
}
