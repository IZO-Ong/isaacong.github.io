import { useEffect, useState, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { type RootState, saveScrollPosition } from '../store';

const ScrollManager = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const scrollPositions = useSelector((state: RootState) => state.portfolio.scrollPositions);
  const [isRestoring, setIsRestoring] = useState(false);

  useLayoutEffect(() => {
    const savedY = scrollPositions[location.pathname] || 0;
    
    if (savedY > 0) {
      setIsRestoring(true);
      
      // timeout
      const timer = setTimeout(() => {
        window.scrollTo({ top: savedY, behavior: 'instant' });
        
        requestAnimationFrame(() => {
          setIsRestoring(false);
        });
      }, 50);

      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
      setIsRestoring(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (isRestoring) {
      document.body.classList.add('is-restoring-scroll');
    } else {
      document.body.classList.remove('is-restoring-scroll');
    }
  }, [isRestoring]);

  useEffect(() => {
    let timeoutId: number;
    const handleScroll = () => {
      if (isRestoring) return;
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        dispatch(saveScrollPosition({ path: location.pathname, y: window.scrollY }));
      }, 150);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.clearTimeout(timeoutId);
    };
  }, [location.pathname, dispatch, isRestoring]);

  return null;
};

export default ScrollManager;