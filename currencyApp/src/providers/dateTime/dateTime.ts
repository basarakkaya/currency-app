import { Injectable } from "@angular/core";

@Injectable()
export class DateTimeProvider {
    constructor() { }
    
    validateDate(givenDate: string) {
        let dateArr = givenDate.split("-"),
        year = dateArr[0],
        month = dateArr[1],
        day = dateArr[2];

        if(month.length < 2) {
            month = "0" + month;
        }
        if(day.length < 2) {
            day = "0" + day;
        }

        return year+"-"+month+"-"+day;
    }
}