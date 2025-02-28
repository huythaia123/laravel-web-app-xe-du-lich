import Divider from '@/components/Divider';
import { ArrowRightCircleIcon, ClockIcon } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import BookCarCheckBox from './BookCarCheckBox';
import BookCarInput from './BookCarInput';
import BookCarSelect from './BookCarSelect';

// import DateTimePicker from "./DateTimePicker"
// import axios_instance from "../../configs/axios"
// import toast from "react-hot-toast"

type FormInput = {
  diemDon: string;
  diemDen: string;
  checkHaiChieu: boolean;
  checkVAT: boolean;
  loaiXe: string;
  hoTen: string;
  soDienThoai: string;
  thoiGianDon: string;
  thoiGianCho: number;
};
const BookCar = ({ className = '' }: { className?: string }) => {
  /* form Submit Handler */
  const form = useForm<FormInput>({
    defaultValues: { checkHaiChieu: false, checkVAT: false },
  });
  const formSubmitHandler: SubmitHandler<FormInput> = async (payload) => {
    console.log(payload);

    // const res = await axios_instance.post("/datxe", payload)
    // toast.success(res.data.message)
    // console.log(res.data)
  };

  const formButton = () => {
    /* alert error message */
    setTimeout(() => {
      if (Object.keys(form.formState.errors).length > 0) {
        const errors = form.formState.errors;
        const messages: string[] = [];
        Object.entries(errors).forEach(([, value]) => {
          if (value?.message) {
            messages.push(value.message);
          }
        });
        alert(messages.join('\n'));
      }
    }, 0);
  };

  return (
    <div className={`bg-[#34ade9] ${className}`}>
      <form
        onSubmit={form.handleSubmit(formSubmitHandler)}
        className="space-y-4 px-2 py-3 md:px-8 md:py-5"
      >
        <BookCarInput
          label="Điểm đón"
          id="diem_don"
          register={form.register('diemDon', {
            required: 'Bạn chưa nhập điểm đón',
          })}
        />
        <BookCarInput
          label="Điểm đến"
          id="diem_den"
          register={form.register('diemDen', {
            required: 'Bạn chưa nhập điểm đến',
          })}
        />
        <div className="flex justify-between px-1.5">
          <BookCarCheckBox
            id="check_hai_chieu"
            label="Hai chiều"
            register={form.register('checkHaiChieu')}
          />
          <BookCarCheckBox
            id="check_vat"
            label="VAT 10%"
            register={form.register('checkVAT')}
          />
        </div>
        <Divider />
        <BookCarSelect
          id="loai_xe"
          label="Loại xe"
          register={form.register('loaiXe')}
        />
        <BookCarInput
          label="Họ và tên"
          id="ho_ten"
          register={form.register('hoTen', {
            required: 'Bạn chưa nhập tên',
          })}
        />
        <BookCarInput
          label="Số điện thoại"
          id="so_dien_thoai"
          register={form.register('soDienThoai', {
            required: 'Bạn chưa nhập số điện thoại',
          })}
        />
        <div className="flex flex-col gap-3 md:flex-row">
          {/* pick date */}
          <div className="flex-1">
            {/* <DateTimePicker
              register={form.register('thoiGianDon', {
                required: 'Bạn chưa nhập thời gian đón',
              })}
            /> */}
            <input
              type="datetime-local"
              className="h-10 w-full rounded-md bg-white px-3 py-2"
              placeholder="Nhập thời gian đón"
              onFocus={(e) => e.target.showPicker()}
              // @ts-ignore
              onClick={(e) => e.target.showPicker()}
              min={new Date().toISOString().slice(0, 16)}
              {...form.register('thoiGianDon', {
                required: 'Bạn chưa nhập thời gian đón',
              })}
            />
          </div>

          {/* wait time */}
          <div className="relative flex-1">
            <input
              {...form.register('thoiGianCho', {
                required: 'Bạn chưa nhập thời gian chờ',
              })}
              type="number"
              placeholder="Nhập thời gian chờ (phút)."
              className="w-full rounded-md bg-white px-3 py-2 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
            <span className="absolute top-1/2 right-3 -translate-y-1/2">
              <ClockIcon className="size-5 text-gray-800" />
            </span>
          </div>
        </div>

        {/* button submit */}
        <div className="text-center">
          <button
            onClick={formButton}
            className="inline-flex items-center gap-2 rounded-md bg-[#ff9000] px-10 py-3 text-gray-50 select-none"
          >
            <span>Đặt xe</span>
            <ArrowRightCircleIcon className="size-6 text-gray-50" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookCar;
