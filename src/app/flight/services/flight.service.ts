import { Flight } from '../../entities/flight';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BASE_URL } from '../../app.token';

@Injectable()
export class FlightService {
  public flights: Flight[] = [];

  constructor(
    @Inject(BASE_URL) private url: string,
    private http: HttpClient) {
    
  }

  findById(id: string): Observable<Flight> {
    
      const url = this.url + '/api/flight';

      const params = new HttpParams()
                          .set('id', id);

      const headers = new HttpHeaders()
                          .set('Accept', 'application/json');

      return this
              .http
              .get<Flight>(url, { params, headers } );
  }

  public find(from: string, to: string): Observable<Flight[]> {
    const url = this.url + '/api/flight';

    let params = new HttpParams()
                      .set('from', from)
                      .set('to', to);

    let headers = new HttpHeaders()
                      .set('Accept', 'application/json');
  
    return this.http
      .get<Flight[]>(url, { params, headers });
  }

}
