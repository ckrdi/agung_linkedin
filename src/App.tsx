import './App.css'
import { Switch } from '@headlessui/react'
import { useState } from 'react'
import {
  HomeIcon,
  BuildingOffice2Icon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/24/outline'

export default function App() {
  const [enabled, setEnabled] = useState<boolean>(false)

  return (
    <div className={enabled ? 'dark' : ''}>
      <div className='h-screen bg-amber-50 dark:bg-black'>
        <nav className='bg-white dark:bg-black border-b border-b-amber-100 dark:border-b-gray-800 dark:text-white p-4 flex justify-end items-center md:px-36 lg:px-48 xl:px-72 2xl:px-96'>
          <div className='flex gap-8'>
            <div>
              <HomeIcon className='size-6' />
            </div>
            <div>
              <BuildingOffice2Icon className='size-6' />
            </div>
            <div className='flex gap-2'>
              {enabled ?
                <MoonIcon className='size-6' /> :
                <SunIcon className='size-6' />}
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className='group inline-flex h-6 w-11 items-center rounded-full bg-amber-200 transition data-[checked]:bg-gray-600'
              >
                <span className='size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6' />
              </Switch>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
