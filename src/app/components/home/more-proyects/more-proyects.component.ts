import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-more-proyects',
  templateUrl: './more-proyects.component.html',
  styleUrls: ['./more-proyects.component.scss']
})
export class MoreProyectsComponent implements OnInit {

  constants: Object = {};

  constructor(
    private router: Router,
    public analyticsService: AnalyticsService,
    private http: HttpClient
    ) { }

    ngOnInit() {
        this.fetchData().subscribe(data => {
          this.constants = data["OtherProjects"];
        });

        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }

    redirect(route: string, event) {
      const id = event.target.id;
      if(id=='demoLink' || id=='ghLink'){
        return
      }
      if(route && route.trim() !== ''){
        window.open(route, '_blank');
      }
    }

    fetchData() {
      return this.http.get<any>('../assets/i18n/constants.json');
    }

}
