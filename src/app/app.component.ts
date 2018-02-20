import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import {
  ActivatedRouteSnapshot,
  Router,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  RouterStateSnapshot,
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Hello World';
  showLoadingIndicator: boolean = false;

  constructor(
      private oauthService: OAuthService,
      private router: Router,
      private route: ActivatedRoute) {
    oauthService.configure(authConfig);
    oauthService.tokenValidationHandler = new JwksValidationHandler();
    oauthService.loadDiscoveryDocumentAndTryLogin();

    router.events
          .filter( e => e instanceof NavigationStart)
          .subscribe(event => {
      if (router.url.indexOf('flight-edit') === -1) {
        this.showLoadingIndicator = true;
      }
    });

    router.events
      .filter( e => e instanceof NavigationEnd
                || e instanceof  NavigationError
                || e instanceof NavigationCancel)
      .subscribe(event => {
        this.showLoadingIndicator = false;
      });
  }
}
