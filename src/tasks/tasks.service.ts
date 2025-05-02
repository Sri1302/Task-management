import { Injectable } from '@nestjs/common';
import { TaskStatus } from './task.model';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { FilterTaskDto } from 'src/dto/filter-task.dto';

@Injectable()
export class TasksService {
    private tasks=[
        {
            "id":1,
            "title":"Go out with frnds",
            "description":"GO out and have fun",
            "status":'OPEN'
        },
        {
            "id":2,
            "title":"Go to Gym",
            "description":"GO out and workout and have fun",
            "status":'OPEN'
        }
    ]

    createTask(createTaskDto:CreateTaskDto){
        const descO = [...this.tasks].sort((a,b)=>b.id-a.id)
        const newTask = {id:descO[0].id+1,...createTaskDto,status:TaskStatus.OPEN}
        this.tasks.push(newTask)
        return newTask
    }

    getAllTasks(){
        return this.tasks
    }

    getTaskById(id:number){
        const task = this.tasks.find(task=>task.id ===id)
        return task
    }

    getTaskByQuery(filterTaskDto:FilterTaskDto){
        const {status,search} = filterTaskDto
        console.log(filterTaskDto)

        let tasks = this.getAllTasks()
        
        if(status){
            tasks = tasks.filter(task=>task.status===status)
        }

        if(search){
            tasks = tasks.filter(
                task=>task.title.toLowerCase().includes(search.toLowerCase())||
                task.description.toLowerCase().includes(search.toLowerCase())
            )
        }
        return tasks
    }

    update(id:number,status:TaskStatus){
        const task = this.getTaskById(id)
        if(!task) return null
        task.status=status
        return task
    }

   delete(id:number){
    const deletedTask = this.getTaskById(id)
    this.tasks = this.tasks.filter(task=>task.id!==id)
    return deletedTask
   }
}
