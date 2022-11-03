import { useState, useEffect } from "react";
import useScrollPosition from "./useScrollPosition";

export default function useOffSetTop(top: number) {
  const scrollPosition = useScrollPosition();
  const [offsetTop, setOffSetTop] = useState(false);

  useEffect(() => {
    if (scrollPosition > top) {
      setOffSetTop(true);
    } else {
      setOffSetTop(false);
    }
    // eslint-disable-next-line
  }, [scrollPosition]);
  return offsetTop;
}
