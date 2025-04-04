type Props = {
  logo?: any
  title: string
  subtitle?: string
  text1?: string
  text2?: string
  isFirst?: boolean
  isLast?: boolean
  isButtonExist?: boolean
  buttonText?: string
  uriText?: string
}

const CompanyCard = ({ logo, title, subtitle, text1, text2, isFirst, isLast, isButtonExist, buttonText, uriText }: Props) => {
  return (
    <div className={`${isFirst ? '' : 'pt-3'} pb-6${isLast ? '' : ' border-b border-b-stone-200 dark:border-b-gray-800'} flex`}>
      {logo && <div className='pr-3'>
        <img src={logo} alt="Company Logo" width={48} height={48} />
      </div>}
      <div>
        <div className='text-base font-semibold'>{title}</div>
        {subtitle && <div className='text-sm'>{subtitle}</div>}
        {text1 && <div className='text-sm text-gray-500 dark:text-emerald-500'>{text1}</div>}
        {text2 && <div className='text-sm text-gray-500 dark:text-emerald-500'>{text2}</div>}
        {isButtonExist &&
          <a href={uriText} target='_blank'>
            <button className='mt-3 px-3 py-1.5 rounded-3xl border-2 border-gray-600 dark:border-emerald-600 font-semibold hover:cursor-pointer'>{buttonText}</button>
          </a>
        }
      </div>
    </div>
  )
}

export default CompanyCard
