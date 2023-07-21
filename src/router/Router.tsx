import { createBrowserRouter } from 'react-router-dom'
import { Path } from './constants'
import { Tasks } from '../pages/Tasks';
import { AddTask } from '../pages/AddTask';
import { ChooseWallet } from '../pages/ChooseWallet/ChooseWallet';

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
  {
    path: Path.Wallet,
    element: (
      <ChooseWallet />
    ),
  },
])

export { Router }