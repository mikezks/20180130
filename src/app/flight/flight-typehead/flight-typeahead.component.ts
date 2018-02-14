import { Flight } from '../../entities/flight';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'flight-typeahead',
    templateUrl: './flight-typeahead.component.html'
})
export class FlightTypeaheadComponent implements OnInit, OnDestroy {

    constructor(private http: HttpClient) {
    }

    control: FormControl;
    flights$: Observable<Flight[]>;
    loading: boolean = false;
    logInfo: Subscription;

    ngOnInit() {
        this.control = new FormControl();

        this.flights$ = this.control
                            .valueChanges
                            .filter(
                                value => value.length >= 3
                            )
                            .debounceTime(300)
                            .do(v => this.loading = true)
                            .switchMap(name => this.load(name))
                            .do(v => this.loading = false);

        const hw = Observable
                    .of('Hello World')
                    //.map(v => v.length);

        this.logInfo = Observable
                        .timer(0, 2000)
                        .switchMap(v => hw)
                        .subscribe(
                            value => {
                                console.log(value);
                            }
                        );
    }

    load(from: string): Observable<Flight[]>  {
        const url = "http://www.angular.at/api/flight";

        const params = new HttpParams()
                            .set('from', from);

        const headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        return this.http.get<Flight[]>(url, {params, headers});
    }

    ngOnDestroy() {
        this.logInfo.unsubscribe();
    }
}
