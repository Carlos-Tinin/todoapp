import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  listElem: any[] = [];
  expanded:boolean;

  constructor() { 
  	this.listElem = [
			{ "id": 0,
	  	  "title": "compras", 
		  "items": [
			 {"name": "feijão", "checked": false},
			 {"name": "açucar", "checked": false}
		  ]
		},
		{ "id": 1,
	  	  "title": "compras", 
		  "items": [
			 {"name": "feijão", "checked": false},
			 {"name": "açucar", "checked": false}
		  ]
		}
  	];
  	this.expanded = false;
	}
	
	calculateCardProgressBar(id){
		let count = 0;
		for (let index = 0; index < this.listElem[id].items.length; index++) {
			if(this.listElem[id].items[index].checked == true){
				count++;
			}		
		}
		let calc;
		console.log (count);
		console.log (this.listElem[id].items.length);
		calc = count/this.listElem[id].items.length;
		return calc;
	}

  ngOnInit() {
  }

  expandCard(id){
    if (this.listElem[id].expanded == true){
      this.listElem[id].expanded = false;
      console.log("fecho");
    }else {
      this.listElem[id].expanded = true;
      console.log("abriu");
    }
  }
}
