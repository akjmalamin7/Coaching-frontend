interface Props{
  size?:"sm"|"md"|"lg"|"xl";
  children?:React.ReactNode;
}
const Container = ({children, size='md'}:Props) => {
  const sizeClasses = {
    sm:"max-w-[1200px] px-[20px]",
    md:"max-w-[1200px] px-[20px]",
    lg:"max-w-[1200px] px-[20px]",
    xl:"max-w-[1200px] px-[20px]",
  }[size]
  const finalClass = `${sizeClasses} mx-auto`
  return (
    <div className={finalClass}>{children}</div>
  )
}

export default Container