type Props = {
  children: React.ReactNode
  noPadding?: boolean
}

const Card = ({ children, noPadding }: Props) => {
  let noPad = noPadding != null && noPadding != undefined
  return (
    <div className={`bg-white border border-stone-300 dark:bg-black dark:border-gray-800 rounded-xl${noPad ? '' : ' pt-6 px-6'} mb-2`}>
      {children}
    </div>
  )
}

export default Card
