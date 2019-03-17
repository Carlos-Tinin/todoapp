import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  tasks: any[] = [];

  constructor() { 
  	this.tasks = [
			{ "id": 0,
			"expanded": false,
	  	  "title": "Fazer atividade física", 
		  "subtasks": [
			 {"name": "feijão", "checked": false},
			 {"name": "açucar", "checked": false}
		  ]
		},
		{ "id": 1,
	  	"expanded": false,
	  	  "title": "compras", 
		  "subtasks": [
			 {"name": "feijão", "checked": false},
			 {"name": "açucar", "checked": false}
		  ]
		}
  	];
	}
	
	calculateCardProgressBar(id){
		let count = 0;
		for (let index = 0; index < this.tasks[id].subtasks.length; index++) {
			if(this.tasks[id].subtasks[index].checked == true){
				count++;
			}		
		}
		let calc;
		console.log (count);
		console.log (this.tasks[id].subtasks.length);
		calc = count/this.tasks[id].subtasks.length;
		return calc;
	}

  ngOnInit() {
	}

	deleteTask(id){
		if (id > -1){
			this.tasks.splice (id,1);	
		}
		console.log ("delete");
	}

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
