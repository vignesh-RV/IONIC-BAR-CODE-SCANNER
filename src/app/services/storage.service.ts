import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class StorageService{
    public currentBill:any;

    constructor(){}

    storeData(data): any{
        localStorage.setItem("secureStorage", JSON.stringify(data || ''));
    }

    getStoredData(): any{
        let localData = localStorage.getItem("secureStorage");
        return JSON.parse( localData || JSON.stringify([]) );
    }

    getDataById(id): any{
        let storedData = this.getStoredData();
        if(storedData){
            return storedData.find((d)=>d.id == id) || null;
        }
        return null;
    }

    addNewData(data): any{
        let storedData = this.getStoredData();
        if(storedData){
            data.id = new Date().getTime();
            storedData.push(data);
            this.storeData(storedData);
        }
        return data;
    }
}