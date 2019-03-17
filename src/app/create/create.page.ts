import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  
  subtasks: any[] = [" "];
 
  constructor(private storage: Storage) {
      
  }

  ngOnInit() {
  }

  addSubTask(){
    this.subtasks.push(" ");
  }

  create(title: string, items: any[]) {
  	this.storage.set(title, items);
  }

}
