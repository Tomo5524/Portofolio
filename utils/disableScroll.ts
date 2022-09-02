import { RefObject, useCallback, useEffect, useRef } from "react";

export function usePreventVerticalScroll<T extends HTMLElement>(
  ref: RefObject<T>,
  dragThreshold: number
) {
  const firstClientX = useRef<number>(0);
  const firstClientY = useRef<number>(0);
  const clientX = useRef<number>(0);
  const clientY = useRef<number>(0);

  const preventTouch = useCallback(
    (e: TouchEvent) => {
      clientX.current = e.touches[0].clientX - firstClientX.current;
      clientY.current = e.touches[0].clientY - firstClientY.current;
      // Vertical scrolling does not work when you start swiping horizontally.
      if (Math.abs(clientX.current) > dragThreshold) {
        e.preventDefault();
        e.returnValue = false;
        return false;
      }

      return true;
    },
    [dragThreshold]
  );

  const touchStart = useCallback((e: TouchEvent) => {
    firstClientX.current = e.touches[0].clientX;
    firstClientY.current = e.touches[0].clientY;
  }, []);

  useEffect(() => {
    const current = ref.current;
    if (current) {
      current.addEventListener("touchstart", touchStart);
      current.addEventListener("touchmove", preventTouch, { passive: false });
    }
    return () => {
      if (current) {
        current.removeEventListener("touchstart", touchStart);
        // current.removeEventListener('touchmove', preventTouch, { passive: false })
        current.removeEventListener("touchmove", preventTouch);
      }
    };
  }, [preventTouch, ref, touchStart]);
}
