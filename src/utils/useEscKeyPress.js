import { useState, useEffect } from 'react';

function useEscKeyPress(targetKey) {
  const [isEscKeyPressed, setIsEscKeyPressed] = useState(false);

  if(isEscKeyPressed) {
    setIsEscKeyPressed(false);
  }

  useEffect(() => {
    function downHandler(event) {
      if (event.which === targetKey) {
        setIsEscKeyPressed(true);
      }
    }
    window.addEventListener('keydown', downHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, [targetKey]);

  return isEscKeyPressed;
}

export default useEscKeyPress;