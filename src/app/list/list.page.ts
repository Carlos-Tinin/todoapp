import { Component, OnInit } from '@angular/core';

import { Task } from '../model/task';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  	tasks: Task[] = [];

  	constructor() {
  		let task1 = new Task(0);
  		let task2 = new Task(1);

  		task1.title = "Fazer atividade física";
  		task1.subTasks = [
			{"name": "Correr", "checked": false},
			{"name": "Pular", "checked": false}
	  	];

	  	task2.title = "Compras";
	  	task2.subTasks = [
			{"name": "Feijão", "checked": false},
			{"name": "Açucar", "checked": false}
		];

		this.tasks.push(task1);
		this.tasks.push(task2);
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
		if (id > -1){
			this.tasks.splice (id, 1);	
		}
		console.log ("delete");
	}

	// Deveria fazer/achar método que procura por ID
  	expandCard(id){
	    if (this.tasks[id].expanded == true){
	    	this.tasks[id].expanded = false;
	    	console.log("fecho");
	    }else {
	    	this.tasks[id].expanded = true;
	    	console.log("abriu");
	    }
  	}
}
