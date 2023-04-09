import { ReactComponent as Icon } from '../../assets/logo.svg';

export const Logo = ({ className }) => {
  return (
    <div className={`logo ${className}`}>
      <Icon className='logo__icon' />
      <div>
        <p className='logo__title'>Transport</p>
        <p>For passengers and drivers</p>
      </div>
    </div>
  );
};