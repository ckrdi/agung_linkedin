type Props = {
  children: React.ReactNode
}

const Card = ({ children }: Props) => {
  return (
    <div className='bg-white border border-stone-300 dark:bg-black dark:border-gray-800 rounded-xl pt-6 px-6 mb-7'>
      {children}
    </div>
  )
}

export default Card
