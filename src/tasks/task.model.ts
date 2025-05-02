export enum TaskStatus{
    OPEN="OPEN",
    IN_PROGRESS="IN_PROGRESS",
    DONE="DONE"
}

export interface Task{
    id:number;
    title:number;
    description:number;
    status:TaskStatus
}