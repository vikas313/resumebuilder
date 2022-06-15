import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';


import { environment } from './environments/environment';
import { FormsModule } from '@angular/forms';
import { DetailsService } from './app/shared/details.service';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent,{
  providers:[
    {
      provide:DetailsService,useClass:DetailsService
    }
  ]
});