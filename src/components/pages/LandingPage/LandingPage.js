import React /*{ useState }*/ from 'react';

const LandingPage = () => {

  return (
    <div>
      <h1>
        {process.env.REACT_APP_API_HOST}
      </h1>
    </div>
  )
}

export default LandingPage;
