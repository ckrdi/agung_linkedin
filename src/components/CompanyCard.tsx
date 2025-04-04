type Props = {
  logo: any
  title: string
  subtitle: string
  text1: string
  text2?: string
}

const CompanyCard = ({ logo, title, subtitle, text1, text2 }: Props) => {
  return (
    <div className='pt-3 pb-6 border-b border-b-stone-200 dark:border-b-gray-800 flex'>
      <div className='pr-3'>
        <img src={logo} alt="Company Logo" width={48} height={48} />
      </div>
      <div>
        <div className='text-base font-semibold'>{title}</div>
        <div className='text-sm'>{subtitle}</div>
        <div className='text-sm text-gray-500 dark:text-emerald-500'>{text1}</div>
        {text2 && <div className='text-sm text-gray-500 dark:text-emerald-500'>{text2}</div>}
      </div>
    </div>
  )
}

export default CompanyCard
