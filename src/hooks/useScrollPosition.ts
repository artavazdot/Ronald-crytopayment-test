import { useEffect, useState } from "react";


function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        document.addEventListener('scroll', () => setScrollPosition(window.scrollY));
        return () => {
            document.removeEventListener("scroll", () => setScrollPosition(window.scrollY));
        };
    },[]);
    
    return scrollPosition;
}

export default useScrollPosition;