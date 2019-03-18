import { Component, OnInit } from '@angular/core';

import { Task } from '../model/task'

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})

export class CreatePage implements OnInit {
  
  public subtasks: any[] = [];
  public task: Task = new Task();

  constructor(private storage: Storage) {
    
  }

  ngOnInit() {
    this.storage.length().then((result) => {
      // id = tamanho do length do storage;
      this.task.id = result;
    });
  }

  addSubTask(){
    this.subtasks.push({"name": "", "checked": false});
  }

  createTask() {
    for (let subtask of this.subtasks) {
      this.task.subTasks.push(subtask);
    }

    this.storage.set(""+this.task.id+"", this.task);
  }
}
