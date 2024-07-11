
import logo from '../../src/assets/logo.png';

const Header = () => {
  return (
    <div className="header flex justify-center items-center gap-4">
      <img className='h-7' src={logo} alt="Logo" />
      <p>Microlink IT College</p>
    </div>
  );
};

export default Header;
