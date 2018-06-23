import { AppService } from './app.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IApp, ClassApp } from './app.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService]
})
export class AppComponent implements IApp {
  constructor(
    private builder: FormBuilder,
    private service: AppService
  ) {
    this.initialLoadData();
    this.Form = this.builder.group({
      image: [],
      category: [],
      name: [],
      detail: []
    });
  }

  Items: ClassApp[] = [];
  Form: FormGroup;
  Insert(value: ClassApp) {
    this.Items.push(value);
  }
  Update(id: number, value: ClassApp) {
    this.Items.map(item => {
      if (item.id === id) {
        item.name = value.name;
        item.category = value.category;
        item.detail = value.detail;
        item.image = value.image;
        item.date = value.date;
      }
      return item;
    });
  }

  Delete(id: number) {
    this.Items.splice(this.Items.findIndex(m => m.id === id), 1);
  }
  // load data
  private initialLoadData() {
    this.service.getItems().subscribe(item => {

      this.Items = item;
    });
  }
}
