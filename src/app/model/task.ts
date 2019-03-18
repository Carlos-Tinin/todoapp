export class Task {
	public expanded: boolean = false;
	public title: string;
	public subTasks: any[] = [];
	public id: number;

	constructor() {}

	add(newSubTask: any) {
		this.subTasks.push(newSubTask);
	}
}
