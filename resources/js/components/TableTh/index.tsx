import { PropsWithChildren } from 'react';

type TableThProps = { text: string } & PropsWithChildren;
const TableTh = ({ text, children }: TableThProps) => {
  return (
    <th className="border border-slate-300 p-[10px] capitalize">
      {text || children}
    </th>
  );
};

export default TableTh;
