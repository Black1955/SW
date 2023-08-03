import { useEffect, useState, useRef, RefObject } from "react";

export default function useOnScreen(
  loading: boolean
): [RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entry =>
      setIsOnScreen(entry[0].isIntersecting)
    );
    const currentRef = ref.current;

    if (currentRef && !loading) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [ref, loading]);

  return [ref, isOnScreen];
}
