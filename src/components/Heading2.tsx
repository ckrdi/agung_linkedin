type Props = {
  children: React.ReactNode
}

const Heading2 = ({ children }: Props) => {
  return (
    <h2 className='text-xl font-semibold'>
      {children}
    </h2>
  )
}

export default Heading2
