import { ReactNode, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface Props {
  children: ReactNode,
  start: boolean
};

function FadeInRight({ children, start }: Props) {
    const controller = useAnimation();

    useEffect(() => {
        if(start)
          controller.start({x: 0});
        else
          controller.start({x: 100});
    },[start, controller])

  return (
    <motion.div initial={{x: 100}} animate={controller} transition={{type: 'spring'}}>
      {children}
    </motion.div>
  );
}

export default FadeInRight;