import { Component, OnInit } from '@angular/core';

import { Task } from '../model/task';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  	public tasks: Task[] = [];

  	constructor(private storage: Storage) {
  		this.storage.forEach((value, key, index) => {
  			this.tasks.push(value);
  		});
	}
	
	calculateCardProgressBar(id){
		let count = 0;
		for (let index = 0; index < this.tasks[id].subTasks.length; index++) {
			if(this.tasks[id].subTasks[index].checked == true){
				count++;
			}		
		}
		let calc;
		calc = count/this.tasks[id].subTasks.length;
		return calc;
	}

  	ngOnInit() {
	}

	deleteTask(id){
		this.storage.remove(id).then((result) => {
			console.log(result);
			console.log ("delete"+id);
		});
	}

	// Deveria fazer/achar método que procura por ID
  	expandCard(id){
	    if (this.tasks[id].expanded == true){
	    	this.tasks[id].expanded = false;
	    }else {
	    	this.tasks[id].expanded = true;
	    }
	    this.attTask(id);
  	}

  	doRefresh(event) {
	    console.log('Begin async operation');

  		this.tasks = [];
  		this.storage.forEach((value, key, index) => {
			this.tasks.push(value);
			console.log(this.tasks);
		});

	    setTimeout(() => {
	      console.log('Async operation has ended');
	      event.target.complete();
	    }, 1000);
	}

	attTask(id) {
		this.storage.set(""+id+"", this.tasks[id]);
	}
}
