import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Task } from '../model/task';
var ListPage = /** @class */ (function () {
    function ListPage() {
        this.tasks = [];
        var task1 = new Task(0);
        var task2 = new Task(1);
        task1.title = "Fazer atividade física";
        task1.subTasks = [
            { "name": "Correr", "checked": false },
            { "name": "Pular", "checked": false }
        ];
        task2.title = "Compras";
        task2.subTasks = [
            { "name": "Feijão", "checked": false },
            { "name": "Açucar", "checked": false }
        ];
        this.tasks.push(task1);
        this.tasks.push(task2);
    }
    ListPage.prototype.calculateCardProgressBar = function (id) {
        var count = 0;
        for (var index = 0; index < this.tasks[id].subTasks.length; index++) {
            if (this.tasks[id].subTasks[index].checked == true) {
                count++;
            }
        }
        var calc;
        calc = count / this.tasks[id].subTasks.length;
        return calc;
    };
    ListPage.prototype.ngOnInit = function () {
    };
    ListPage.prototype.deleteTask = function (id) {
        if (id > -1) {
            this.tasks.splice(id, 1);
        }
        console.log("delete");
    };
    // Deveria fazer/achar método que procura por ID
    ListPage.prototype.expandCard = function (id) {
        if (this.tasks[id].expanded == true) {
            this.tasks[id].expanded = false;
            console.log("fecho");
        }
        else {
            this.tasks[id].expanded = true;
            console.log("abriu");
        }
    };
    ListPage = tslib_1.__decorate([
        Component({
            selector: 'app-list',
            templateUrl: './list.page.html',
            styleUrls: ['./list.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ListPage);
    return ListPage;
}());
export { ListPage };
//# sourceMappingURL=list.page.js.map