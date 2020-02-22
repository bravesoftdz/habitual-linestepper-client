import React from 'react';

const getWidthAndHeight = () => {
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    return {
      windowWidth,
      windowHeight
    }
  }
  
const useCurrentDimensions = () => {
    const [windowDimensions, setWindowDimensions] = React.useState(getWidthAndHeight())
    
    React.useEffect(() => {
    
      let timeoutId = null;
      const resizeListener = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => setWindowDimensions(getWidthAndHeight()), 150);
      }
    
      window.addEventListener('resize', resizeListener);
    
      return () => { window.removeEventListener('resize', resizeListener)}
    }, [])

    return windowDimensions;
}

export default useCurrentDimensions;
