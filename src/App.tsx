import './App.css'
import headquarter_logo from './assets/headquarter_logo.jpeg'
import tds_indonesia_logo from './assets/tds_indonesia_logo.jpeg'
import calendar_logo from './assets/calendar_logo.svg'
import pegadaian_logo from './assets/pegadaian_logo.jpeg'

import { Switch } from '@headlessui/react'
import { useState } from 'react'
import {
  HomeIcon,
  BuildingOffice2Icon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/24/outline'
import Card from './components/Card'
import Heading2 from './components/Heading2'
import CompanyCard from './components/CompanyCard'

export default function App() {
  const [enabled, setEnabled] = useState<boolean>(false)

  return (
    <div className={enabled ? 'dark' : ''}>
      <div className='bg-stone-50 dark:bg-black dark:text-emerald-300'>
        <nav className='bg-white dark:bg-black border-b border-b-stone-300 dark:border-b-gray-800 p-4 flex justify-end items-center md:px-36 lg:px-48 xl:px-72 2xl:px-96'>
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
        <div className='pt-7 md:px-36 lg:px-48 xl:px-72 2xl:px-96 lg:flex lg:gap-5'>
          <div className='mb-7 lg:mb-0 lg:flex-3/4'>
            <Card>
              <Heading2>
                About
              </Heading2>
              <p className='pt-3 pb-6 text-sm leading-5 md:pr-1 lg:pr-2 xl:pr-4 2xl:pr-6'>Self-taught developer</p>
            </Card>
            <Card>
              <Heading2>
                Experience
              </Heading2>
              <CompanyCard
                logo={headquarter_logo}
                title='Software Engineer'
                subtitle='Headquarter'
                text1='Oct 2023 - Present'
                text2='Denpasar, Bali, Indonesia'
              />
              <CompanyCard
                logo={tds_indonesia_logo}
                title='Junior Software Developer'
                subtitle='TDS Indonesia'
                text1='Nov 2021 - Sep 2023'
                text2='Denpasar, Bali, Indonesia'
              />
              <CompanyCard
                logo={calendar_logo}
                title='Career Transition'
                subtitle='Career break'
                text1='May 2020 - Oct 2021'
                text2='Mataram, West Nusa Tenggara, Indonesia'
              />
              <CompanyCard
                logo={pegadaian_logo}
                title='Appraiser'
                subtitle='PT Pegadaian (Persero)'
                text1='Jul 2017 - Apr 2020'
                text2='West Nusa Tenggara, Indonesia'
              />
              <CompanyCard
                logo={pegadaian_logo}
                title='Administration and Payment Support'
                subtitle='PT Pegadaian (Persero)'
                text1='Apr 2016 - Jun 2017'
                text2='West Nusa Tenggara, Indonesia'
              />
            </Card>
          </div>
          <div className='lg:flex-1/4'>
            <Card>
              <div>Projects</div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
