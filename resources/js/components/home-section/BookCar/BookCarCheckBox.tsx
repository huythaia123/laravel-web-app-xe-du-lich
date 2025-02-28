type BookCarCheckBoxProps = { id: string; label: string; register?: any };
const BookCarCheckBox = ({ id, label, register }: BookCarCheckBoxProps) => {
  return (
    <div className="flex flex-1 gap-4">
      <input
        type="checkbox"
        id={id}
        className="scale-[2] bg-black accent-[#ff9000]"
        {...register}
      />
      <label htmlFor={id} className="text-sm text-gray-50">
        {label}
      </label>
    </div>
  );
};
export default BookCarCheckBox;
