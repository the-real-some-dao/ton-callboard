import { createBrowserRouter } from 'react-router-dom'
import { Path } from './constants'
import { Tasks } from '../pages/Tasks';
import { AddTask } from '../pages/AddTask';

const Router = createBrowserRouter([
  {
    path: Path.Root,
    element: (
      <Tasks />
    ),
  },
  {
    path: Path.Add,
    element: (
      <AddTask />
    ),
  },
])

export { Router }