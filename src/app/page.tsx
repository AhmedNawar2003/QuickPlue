
import Navbar from '@/components/shared/Header';
import { TaskTabs } from '@/components/tasks/TaskTabs';
export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <Navbar/>
      <TaskTabs />
    </main>
  )
}
