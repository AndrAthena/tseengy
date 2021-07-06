import { createContext, createRef, useContext, useState } from 'react';
import ReactFluidScroll from 'react-fluid-scroll';
import Header from '../../Header/Header';
import Meta, { IMeta } from '../Meta';

interface IPage {
  children: any;
  meta: IMeta;
}

const Context = createContext<number | any>({ y: 0 });

export default function PageContainer(props: IPage) {
  const { meta, children } = props;
  const { title, desc } = meta;
  const [y, setY] = useState(0);

  return (
    <Context.Provider value={{ y }}>
      <Header />
      <Meta title={title} desc={desc} />
      <ReactFluidScroll viscosity={0.1} scrollHook={({ virtual }: any) => setY(() => Math.ceil(virtual.y))}>
        {children}
      </ReactFluidScroll>
    </Context.Provider>
  );
}

export const context = () => useContext(Context);
