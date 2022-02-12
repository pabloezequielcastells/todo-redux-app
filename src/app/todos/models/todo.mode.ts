export class Todo {
    constructor(public text: string) {
        this.id = Math.random(); 
        this.completed = false;
    }

    public id: number;
    public completed: boolean;
}