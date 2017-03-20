import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WorkoutService{
    http: any;
    apiKey: String;
    workoutsUrl: String;

    constructor(http:Http) {
        this.http = http;
        this.apiKey = '41mg_hOGHC5QwB4Vjl_nw80aoFJRNIbJ';
        this.workoutsUrl = 'https://api.mlab.com/api/1/databases/maxworkout_app/collections/workouts';
    }

    getWorkouts() {
        return this.http.get(this.workoutsUrl+'?apiKey='+this.apiKey)
        .map(res => res.json());
    }
}