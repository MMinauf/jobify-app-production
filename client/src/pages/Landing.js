import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import React from 'react';

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to='/' />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          <div className='info'>
            <h1>
              job <span>tracking </span> app
            </h1>
            <p>
              I'm baby photo booth hammock fingerstache jean shorts. Kickstarter
              small batch ramps selvage bitters lomo mustache direct trade
              flexitarian readymade mixtape deep v pork belly. Sriracha meh
              bodega boys, ascot ennui try-hard live-edge gochujang blog la
              croix letterpress tonx.{' '}
            </p>
            <Link to='/register' className='btn btn-hero'>
              Login/register
            </Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img'></img>
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
