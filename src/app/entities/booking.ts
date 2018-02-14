import { Passenger } from './passenger';
import { Flight } from './flight';

export interface Booking {
    passenger: Passenger;
    flights: Flight[];
}
