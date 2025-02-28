type BookCarInputProps = {
  label: string;
  id: string;
  defaultValue?: string;
  register?: any;
};
const BookCarInput = ({
  label,
  id,
  defaultValue = '',
  register,
}: BookCarInputProps) => {
  return (
    <>
      <div className="flex w-full">
        <label
          htmlFor={id}
          className={`inline-block w-[120px] cursor-pointer items-center rounded-tl-md rounded-bl-md bg-[#ff9000] px-4 py-3 text-center text-xs text-gray-50 select-none sm:text-sm`}
        >
          {label}
        </label>
        <input
          type="text"
          id={id}
          placeholder={`Nhập ${label.toLowerCase()}`}
          defaultValue={defaultValue}
          className="flex-1 rounded-tr-md rounded-br-md bg-white px-3"
          {...register}
        />
      </div>
    </>
  );
};
export default BookCarInput;
