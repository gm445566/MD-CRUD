import { ClassApp } from './app.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  getItems() {
    return new Observable<ClassApp[]>(obj => {
      obj.next([
        {
          id: Math.random(),
          image: 'https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg',
          category: 'อาหารไทย',
          name: 'อาหารไทย เมนูอาหาร สูตรอาหารง่ายๆ',
          // tslint:disable-next-line:max-line-length
          detail: 'เมนูอาหาร อาหารไทยง่ายๆ ทำกินเองที่บ้านได้ กับข้าว อาหารไทยมีอะไรบ้าง รวมสูตรอาหาร เมนูต้ม เมนูผัด เมนูแกง เมนูทอด เมนูนึ่ง เมนูปิ้งย่าง เมนูหมู เมนูปลา เมนูไก่ เมนูปลาหมึก เมนูกุ้ง เมนูหอย อาหารไทย คือ อาหารประจำชาติไทย เอกลักษณ์วัฒนธรรมการกินจากอดีตสู่ปัจจุบันอาหารของไทย วัฒนธรรมประจำชาติที่สำคัญของประเทศไทย',
          date: new Date()
        }
      ]);
      obj.complete();
    });
  }
  constructor() { }
}
