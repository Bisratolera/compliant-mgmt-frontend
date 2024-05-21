import logo from '../../src/assets/logo.png'
export const Header = () => {
  return (
    <div className="header text-2xl mt-5 sticky justify-center text-center items-center gap-4 flex">
        <img className='h-7' src={logo} alt="" /><p>microlink it college</p>
    </div>
  )
}
