import { Component, OnInit } from '@angular/core';

import { Task } from '../model/task'

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})

export class CreatePage implements OnInit {
  
  public subtasks: any[] = [" "];
  public task: Task = new Task(3);

  constructor(private storage: Storage) {
    this.storage.length().then((result) => {
      console.log(result);
    });
  }

  ngOnInit() {
  }

  addSubTask(){
    this.subtasks.push(" ");
  }

  createTask(title: string, items: any[]) {
    this.storage.set("" + this.task.id + "", this.task);
  }

}
