import { PropsWithChildren } from 'react';

type Props = { text?: string; className?: string } & PropsWithChildren;
const TableTd = ({ children, text, className = '' }: Props) => {
  return (
    <td className={`border border-slate-300 p-[10px] capitalize ${className}`}>
      {text || children}
    </td>
  );
};

export default TableTd;
