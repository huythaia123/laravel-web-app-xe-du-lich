type Props = { label: string; id: string; register?: any };
const BookCarSelect = ({ label, id, register }: Props) => {
  return (
    <div>
      <div className="flex w-full">
        <label
          htmlFor={id}
          className={`inline-block w-[120px] cursor-pointer items-center rounded-tl-md rounded-bl-md bg-[#ff9000] px-4 py-3 text-center text-xs text-gray-50 select-none sm:text-sm`}
        >
          {label}
        </label>
        <select
          defaultValue={4}
          className="flex-1 rounded-tr-md rounded-br-md bg-white px-3"
          {...register}
        >
          <option value="4">Xe 4 chỗ</option>
          <option value="5">Xe 5 chỗ</option>
          <option value="7">Xe 7 chỗ</option>
          <option value="9">Xe 9 chỗ</option>
          <option value="16">Xe 16 chỗ</option>
          <option value="29">Xe 29 chỗ</option>
          <option value="35">Xe 35 chỗ</option>
          <option value="45">Xe 45 chỗ</option>
          <option value="100">Xe loại khác</option>
        </select>
      </div>
      <div className="hidden">Error message</div>
    </div>
  );
};
export default BookCarSelect;
