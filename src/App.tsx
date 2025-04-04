import './App.css'
import headquarter_logo from './assets/headquarter_logo.jpeg'
import tds_indonesia_logo from './assets/tds_indonesia_logo.jpeg'
import calendar_logo from './assets/calendar_logo.svg'
import pegadaian_logo from './assets/pegadaian_logo.jpeg'
import univ_indonesia_logo from './assets/univ_indonesia_logo.jpeg'
import background1 from './assets/background1.jpeg'
import a_photo from './assets/a_photo.jpeg'
import { Switch } from '@headlessui/react'
import { useState } from 'react'
import {
  BuildingOffice2Icon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/24/outline'
import Card from './components/Card'
import Heading2 from './components/Heading2'
import CompanyCard from './components/CompanyCard'

export default function App() {
  const [enabled, setEnabled] = useState<boolean>(true)

  return (
    <div className={enabled ? 'dark' : ''}>
      <div className='bg-stone-100 dark:bg-black dark:text-emerald-300'>
        <nav className='bg-white dark:bg-black border-b border-b-stone-300 dark:border-b-gray-800 p-4 flex justify-end items-center md:px-36 lg:px-48 xl:px-72 2xl:px-96'>
          <div className='flex gap-8'>
            <div>
              <a href='https://github.com/ckrdi' target='_blank'>
                <BuildingOffice2Icon className='size-6' />
              </a>
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
        <div className='pt-7 pb-5 md:px-36 lg:px-48 xl:px-72 2xl:px-96 lg:flex lg:gap-5'>
          <div className='mb-7 lg:mb-0 lg:flex-3/4'>
            <Card noPadding>
              <div className='relative'>
                <img className='rounded-t-xl' src={background1} alt="Background photo" />
                <img className='rounded-full border-5 border-white dark:border-black absolute left-6 -bottom-15' src={a_photo} alt="A photo" height={160} width={160} />
              </div>
              <div className='pt-18 px-6 pb-6'>
                <div className='flex justify-between md:pr-1 lg:pr-2 xl:pr-4 2xl:pr-6'>
                  <div className='pr-3'>
                    <h2 className='text-2xl font-semibold'>Cokorda Agung Yudhana <span className='text-sm font-normal'>· 1st</span></h2>
                    <div className='text-base'>Software engineer with three years of full-stack development using C#, .NET, and React</div>
                    <div className='py-2 text-sm text-gray-500 dark:text-emerald-500 xl:hidden'>Headquarter</div>
                  </div>
                  <div className='hidden xl:block'>
                    <div className='flex items-center gap-3'>
                      <img src={headquarter_logo} alt="Company Logo" height={32} width={32} />
                      <span className='text-sm font-semibold'>Headquarter</span>
                    </div>
                  </div>
                </div>
                <div className='text-sm text-gray-500 dark:text-emerald-500'>Bali, Indonesia</div>
              </div>
            </Card>
            <Card>
              <Heading2>
                About
              </Heading2>
              <p className='pt-3 text-sm leading-5 md:pr-1 lg:pr-2 xl:pr-4 2xl:pr-6'>
                I'm a C# Software Engineer with 3 years of experience in full-stack development, specializing in .NET and React. I'm passionate about building scalable applications and leveraging CI/CD tools to streamline development.
              </p>
              <p className='pt-3 text-sm leading-5 md:pr-1 lg:pr-2 xl:pr-4 2xl:pr-6'>
                Since October 2023, I have been working at a startup in Bali building human capital management system which has Key Performance Indicator feature that helps hospitality managers measure their hotel performance.
              </p>
              <p className='pt-2 pb-6 text-sm leading-5 md:pr-1 lg:pr-2 xl:pr-4 2xl:pr-6'>
                Despite working using .NET, I like to make side-projects using Spring Boot and Ruby on Rails.
              </p>
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
                text1='Nov 2021 - Sep 2023 · 1 yr 11 mos'
                text2='Denpasar, Bali, Indonesia'
              />
              <CompanyCard
                logo={calendar_logo}
                title='Career Transition'
                subtitle='Career break'
                text1='May 2020 - Oct 2021 · 1 yr 6 mos'
                text2='Mataram, West Nusa Tenggara, Indonesia'
              />
              <CompanyCard
                logo={pegadaian_logo}
                title='Appraiser'
                subtitle='PT Pegadaian (Persero)'
                text1='Jul 2017 - Apr 2020 · 2 yr 10 mos'
                text2='West Nusa Tenggara, Indonesia'
              />
              <CompanyCard
                logo={pegadaian_logo}
                title='Administration and Payment Support'
                subtitle='PT Pegadaian (Persero)'
                text1='Apr 2016 - Jun 2017 · 1 yr 3 mos'
                text2='West Nusa Tenggara, Indonesia'
                isLast
              />
            </Card>
            <Card>
              <Heading2>Education</Heading2>
              <CompanyCard
                logo={univ_indonesia_logo}
                title='University of Indonesia'
                subtitle="Bachelor's degree, Communication"
                text1='2010 - 2014'
                isLast
              />
            </Card>
            <Card>
              <Heading2>Skills</Heading2>
              <CompanyCard
                title='Software Development'
                subtitle='Two experiences across Headquarter and TDS Indonesia'
              />
              <CompanyCard
                title='Agile Methodologies'
                subtitle='Two experiences across Headquarter and TDS Indonesia'
                isLast
              />
            </Card>
            <Card>
              <Heading2>Test Scores</Heading2>
              <CompanyCard
                title='Test of English as a Foreign Language - Institutional Testing Program (TOEFL ITP)'
                subtitle='Score: 623 · Feb 2025'
                isLast
              />
            </Card>
          </div>
          <div className='lg:flex-1/4'>
            <Card>
              <CompanyCard
                title='Projects'
                text1='You might like'
                isFirst
                isLast
              />
              <CompanyCard
                title='Dark-mode Linkedin clone'
                text1='Built using React typescript and Amazon S3'
                isFirst
                isLast
                isButtonExist
                buttonText='This website!'
              />
              <CompanyCard
                title='Where is the ISS?'
                text1='Super plain website displaying the ISS location'
                isFirst
                isLast
                isButtonExist
                buttonText='Go to website'
                uriText='https://ckrdi.github.io/where-is-the-iss'
              />
              <CompanyCard
                title='CSS Dojo'
                text1='Simple webpage of applied CSS concepts, both basic and advanced'
                isFirst
                isLast
                isButtonExist
                buttonText='Go to website'
                uriText='https://ckrdi.github.io/css-dojo'
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
