import React from 'react';
import Lottie from 'react-lottie';
import ErrorAnimation from '../../assets/images/Error.json'

const ErrorPage = () => {
    const defaultOptions = {
        loop: true,  // Set to true if you want the animation to loop
        autoplay: true,  // Set to true to start playing the animation automatically
        animationData: ErrorAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };
    
      return <Lottie options={defaultOptions} height={"100%"} width={"100%"} />;
}

export default ErrorPage