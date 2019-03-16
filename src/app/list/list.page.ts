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
	  	  "expanded": false,
	  	  "title": "compras", 
		  "items": [
			 {"name": "feijão", "checked": true},
			 {"name": "açucar", "checked": false}
		  ]
		},
		{ "id": 1,
	  	  "expanded": false,
	  	  "title": "compras", 
		  "items": [
			 {"name": "feijão", "checked": true},
			 {"name": "açucar", "checked": false}
		  ]
		}
  	];
  	this.expanded = false;
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
