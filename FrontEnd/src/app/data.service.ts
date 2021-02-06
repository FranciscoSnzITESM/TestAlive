import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ScreenSize {
    private innerWidth = window.innerWidth;
    public userInfo: any;
    constructor() { }

    public smallScreen(): boolean {
        return this.innerWidth < 768;
    }
    public setScreenSize(value: number){
        this.innerWidth = value;
    }
}