type Props = { title: string; description: number | string };
const TableInfoRow = ({ title, description }: Props) => {
  return (
    <tr className="border">
      <td className="w-40 bg-gray-100 p-2 text-base font-semibold tracking-wide">
        {title}
      </td>
      <td className="p-2 text-base tracking-wide break-words hover:bg-gray-100">
        {description}
      </td>
    </tr>
  );
};

export default TableInfoRow;
