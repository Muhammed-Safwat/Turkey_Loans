import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { register } from 'swiper/element/bundle';
import AOS from 'aos';

register();

AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
