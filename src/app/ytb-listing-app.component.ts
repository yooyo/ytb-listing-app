import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component'
import { FilterComponent } from './filter/filter.component'
import { YoutubeApiService } from './youtube-api.service'
import { HTTP_PROVIDERS } from '@angular/http';
//import { Ng2Select } from 'ng2-material-select';
import 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'ytb-listing-app-app',
  templateUrl: 'ytb-listing-app.component.html',
  styleUrls: ['ytb-listing-app.component.css'],
  directives: [ NavComponent, FilterComponent],
  providers:[YoutubeApiService, HTTP_PROVIDERS]
})
export class YtbListingAppAppComponent {
  title = 'Youtube search app';
}
