import React from 'react'
import { Task } from '@/types/task'

type Props = {
  tasks: Task[]
}
const TaskList = ({ tasks }: Props) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  )
}

export default TaskList
