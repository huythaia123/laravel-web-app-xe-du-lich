import Divider from '@/components/Divider';
import { router, usePage } from '@inertiajs/react';
import { ArrowRightCircleIcon, ClockIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import BookCarCheckBox from './BookCarCheckBox';
import BookCarInput from './BookCarInput';
import BookCarSelect from './BookCarSelect';
import BookCarSuccess from './BookCarSuccess';

type FlashType = { success: string };

type FormInput = {
  diem_don: string;
  diem_den: string;
  check_hai_chieu: boolean;
  check_vat: boolean;
  loai_xe: string;
  ho_ten: string;
  so_dien_thoai: string;
  thoi_gian_don: string;
  thoi_gian_cho: number;
};
const BookCar = ({ className = '' }: { className?: string }) => {
  const { flash } = usePage().props;
  const [isOpen, setIsOpen] = useState(false);

  /* form Submit Handler */
  const form = useForm<FormInput>({
    defaultValues: { check_hai_chieu: false, check_vat: false },
  });
  const formSubmitHandler: SubmitHandler<FormInput> = async (payload) => {
    // console.log(payload);
    router.post(route('book-cars.store'), payload, {
      onFinish: () => {},
    });
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
  useEffect(() => {
    if ((flash as FlashType).success) {
      setIsOpen(true);
      toast.success((flash as FlashType).success);
    }
  }, [flash]);

  return (
    <>
      <div className={`bg-[#34ade9] ${className}`}>
        <form
          onSubmit={form.handleSubmit(formSubmitHandler)}
          className="space-y-4 px-2 py-3 md:px-8 md:py-5"
        >
          <BookCarInput
            label="Điểm đón"
            id="diem_don"
            register={form.register('diem_don', {
              required: 'Bạn chưa nhập điểm đón',
            })}
          />
          <BookCarInput
            label="Điểm đến"
            id="diem_den"
            register={form.register('diem_den', {
              required: 'Bạn chưa nhập điểm đến',
            })}
          />
          <div className="flex justify-between px-1.5">
            <BookCarCheckBox
              id="check_hai_chieu"
              label="Hai chiều"
              register={form.register('check_hai_chieu')}
            />
            <BookCarCheckBox
              id="check_vat"
              label="VAT 10%"
              register={form.register('check_vat')}
            />
          </div>
          <Divider />
          <BookCarSelect
            id="loai_xe"
            label="Loại xe"
            register={form.register('loai_xe')}
          />
          <BookCarInput
            label="Họ và tên"
            id="ho_ten"
            register={form.register('ho_ten', {
              required: 'Bạn chưa nhập tên',
            })}
          />
          <BookCarInput
            label="Số điện thoại"
            id="so_dien_thoai"
            register={form.register('so_dien_thoai', {
              required: 'Bạn chưa nhập số điện thoại',
              pattern: {
                value: /^(0|\+84)[1-9][0-9]{8}$/,
                message: 'Số điện thoại không hợp lệ',
              },
              minLength: {
                value: 10,
                message: 'Số điện thoại phải có ít nhất 10 chữ số',
              },
              maxLength: {
                value: 11,
                message: 'Số điện thoại không được quá 11 chữ số',
              },
            })}
          />
          <div className="flex flex-col gap-3 md:flex-row">
            {/* pick date */}
            <div className="flex-1">
              <input
                type="datetime-local"
                className="h-10 w-full rounded-md bg-white px-3 py-2"
                placeholder="Nhập thời gian đón"
                onFocus={(e) => e.target.showPicker()}
                // @ts-ignore
                onClick={(e) => e.target.showPicker()}
                min={new Date().toISOString().slice(0, 16)}
                {...form.register('thoi_gian_don', {
                  required: 'Bạn chưa nhập thời gian đón',
                })}
              />
            </div>

            {/* wait time */}
            <div className="relative flex-1">
              <input
                {...form.register('thoi_gian_cho', {
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
      <div>
        <BookCarSuccess isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default BookCar;
