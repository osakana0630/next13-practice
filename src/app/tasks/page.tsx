import TaskForm from '@/components/tasks/TaskForm'
import TaskList from '@/components/tasks/TaskList'
import { GetResponse } from '@/app/api/tasks/route'
import { Suspense } from 'react'

// const fetchTasks: () => Promise<GetResponse> = async () => {
//   await new Promise((resolve) => setTimeout(resolve, 2000))
//   const res = await fetch('http://localhost:30000/tasks', { cache: 'no-store' })
//   return res.json()
// }
export default async function Page() {
  // const tasks = await fetchTasks()
  return (
    <main>
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-20 max-w-3xl mt-6 items-center">
        <TaskForm />
        {/*<Suspense fallback={<p>Loading tasks...</p>}>*/}
        {/*  <TaskList tasks={tasks} />*/}
        {/*</Suspense>*/}
      </div>
    </main>
  )
}
