import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { TasksService } from './tasks.service';
import { UpdateTaskDto } from 'src/dto/update-task.dto';
import { FilterTaskDto } from 'src/dto/filter-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService:TasksService){}

    @Post()
    createTask(@Body(ValidationPipe) createTaskDto:CreateTaskDto ){
        return this.tasksService.createTask(createTaskDto)
    }

    @Get()
    getAllTasks(){
        return this.tasksService.getAllTasks()
    }

    @Get('query')
    getTaskByQuery(@Query(ValidationPipe) filterTaskDto:FilterTaskDto){
        return this.tasksService.getTaskByQuery(filterTaskDto)
    }

    @Get(':id')
    getTaskById(@Param('id',ParseIntPipe) id:number){
        return this.tasksService.getTaskById(id)
    }


    @Patch(':id')
    update(@Param('id' ,ParseIntPipe) id:number,@Body(ValidationPipe) updateTaskDto:UpdateTaskDto){
        const {status} = updateTaskDto
        return this.tasksService.update(id,status)
    }

    @Delete('id')
    delete(@Param('id',ParseIntPipe) id:number){
        return this.tasksService.delete(id)
    }

}
