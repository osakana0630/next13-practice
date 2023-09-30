import { NextResponse } from 'next/server'
import { Task } from '@/types/task'

const BASE_URL = 'http://localhost:30000/'

// GET /api/tasks
export type GetResponse = Task[]
export async function GET(): Promise<NextResponse<GetResponse>> {
  // DBからノート一覧を取得
  const res = await fetch(BASE_URL + 'tasks', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const tasks = await res.json()
  return NextResponse.json(tasks)
}

export type PostResponse = Task[]
export async function POST(request: Request): Promise<NextResponse<PostResponse>> {
  const params = await request.json()
  const res = await fetch(BASE_URL + 'tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
  const data = await res.json()

  return NextResponse.json(data)
}
