import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  constructor(private storage: Storage) {}

  ngOnInit() {
  }

  create(title: string, items: any[]) {
  	this.storage.set(title, items);
  }

}
