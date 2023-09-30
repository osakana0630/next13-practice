'use client'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Task } from '@/types/task'
import { useRouter } from 'next/navigation'
const TaskForm = () => {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newTask: Task = {
      id: uuidv4(),
      title,
      completed: false,
    }
    await fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
    router.refresh()
    setTitle('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        required={true}
        className={'border-gray-300 border-2 p-2 w-4/12 radius-2xl'}
      />
      <button
        type="submit"
        className="bg-gray-700 hover:bg-gray-600 text-white rounded px-4 py-2 ml-5 radius-2xl"
      >
        追加
      </button>
    </form>
  )
}

export default TaskForm
