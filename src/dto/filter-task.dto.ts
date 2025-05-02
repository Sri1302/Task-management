import { IsEnum, IsOptional, IsString } from "class-validator";
import { TaskStatus } from "src/tasks/task.model";

export class FilterTaskDto{
    @IsOptional()
    @IsEnum(TaskStatus)
    status?:TaskStatus;

    @IsOptional()
    @IsString()
    search?:string
}