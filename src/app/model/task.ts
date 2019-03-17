export class Task {
	private __expanded: boolean = false;
	private __title: string;
	private __subtasks: any[] = [];

	constructor(
		private __id: number
	) {}

	get id(): number {
		return this.__id;
	}

	get expanded(): boolean {
		return this.__expanded;
	}

	set expanded(state: boolean) {
		this.__expanded = state;
	}

	get title(): string {
		return this.__title;
	}

	set title(newTitle: string) {
		this.__title = newTitle;
	}

	get subTasks(): any[] {
		return this.__subtasks;
	}

	set subTasks(subtasks: any[]) {
		this.__subtasks = subtasks;
	}

	add(newSubTask: any) {
		this.__subtasks.push(newSubTask);
	}
}
