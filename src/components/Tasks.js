import { Task } from "./Task"
export const Tasks = ({tasks,onDelete,onToggle}) => {
    

    return (
        <>
            {tasks.map((task)=> (
                <Task key= {task.id} task={task} ddelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}
