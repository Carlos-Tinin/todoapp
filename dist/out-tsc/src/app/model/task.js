var Task = /** @class */ (function () {
    function Task(__id) {
        this.__id = __id;
        this.__expanded = false;
        this.__subtasks = [];
    }
    Object.defineProperty(Task.prototype, "id", {
        get: function () {
            return this.__id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "expanded", {
        get: function () {
            return this.__expanded;
        },
        set: function (state) {
            this.__expanded = state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "title", {
        get: function () {
            return this.__title;
        },
        set: function (newTitle) {
            this.__title = newTitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "subTasks", {
        get: function () {
            return this.__subtasks;
        },
        set: function (subtasks) {
            this.__subtasks = subtasks;
        },
        enumerable: true,
        configurable: true
    });
    Task.prototype.add = function (newSubTask) {
        this.__subtasks.push(newSubTask);
    };
    return Task;
}());
export { Task };
//# sourceMappingURL=task.js.map