import ReactFluidScroll from 'react-fluid-scroll';
import Header from '../../Header/Header';
import Meta, { IMeta } from '../Meta';

interface IPage {
  children: any;
  meta: IMeta;
}

export default function PageContainer(props: IPage) {
  const { meta, children } = props;
  const { title, desc } = meta;
  return (
    <>
      <Header />
      <Meta title={title} desc={desc} />
      <ReactFluidScroll viscosity={0.1}>{children}</ReactFluidScroll>
    </>
  );
}
