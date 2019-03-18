import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
var CreatePage = /** @class */ (function () {
    function CreatePage(storage) {
        this.storage = storage;
        this.subtasks = [" "];
        this.storage.length().then(function (result) {
            id = result;
            console.log(id);
        });
    }
    CreatePage.prototype.ngOnInit = function () {
    };
    CreatePage.prototype.addSubTask = function () {
        this.subtasks.push(" ");
    };
    CreatePage.prototype.createTask = function () {
        var id;
        this.storage.length().then(function (result) {
            id = result;
            console.log(id);
        });
        console.log(id);
        //let task: Task = new Task(3);
        //this.storage.set("" + this.task.id + "", this.task);
    };
    CreatePage = tslib_1.__decorate([
        Component({
            selector: 'app-create',
            templateUrl: './create.page.html',
            styleUrls: ['./create.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Storage])
    ], CreatePage);
    return CreatePage;
}());
export { CreatePage };
//# sourceMappingURL=create.page.js.map