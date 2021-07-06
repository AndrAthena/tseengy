import { motion } from 'framer-motion';

interface IAnimate {
  bg: string;
  y: any;
}

export default function AnimateBg(props: IAnimate) {
  const { bg, y } = props;
  return <motion.div initial={{ y: 0 }} style={{ backgroundImage: `url(${bg})`, y }} className="full-bg" />;
}
