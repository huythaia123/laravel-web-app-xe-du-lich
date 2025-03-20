import { BookCarInfo } from '@/types';
import { FlashType } from '@/types/FlashType';
import { router, usePage } from '@inertiajs/react';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { Info } from 'lucide-react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog';
import { Button } from '../ui/button';

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return format(date, 'dd/MM/yyyy HH:mm', { locale: vi });
};

const BookingInfoDialog = ({
  carBookingInfo,
}: {
  carBookingInfo: BookCarInfo;
}) => {
  const { flash } = usePage().props;

  const handleDelete = (bookCarId: number) => {
    const ok = confirm('Bạn có chắc chắn muốn xoá không');
    // alert(`${ok} - ${bookCarId}`);
    if (ok) {
      router.delete(
        route('car-booking-management.delete', { book_car_id: bookCarId }),
      );
    }
  };

  useEffect(() => {
    if ((flash as FlashType).success) {
      // setIsOpen(true);
      toast.success((flash as FlashType).success);
    }
  }, [flash]);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          <Info className="sm:hidden" />
          <p className="hidden sm:block">Xem chi tiết</p>
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Thông tin chi tiết</AlertDialogTitle>
        </AlertDialogHeader>
        {/* Bảng hiển thị thông tin */}
        <div className="overflow-auto">
          <table className="w-full border-collapse border text-sm">
            <tbody>
              <tr className="border">
                <td className="w-40 bg-gray-100 p-2 text-base font-semibold tracking-wide">
                  ID
                </td>
                <td className="p-2 text-base tracking-wide break-words hover:bg-gray-100">
                  {carBookingInfo.id}
                </td>
              </tr>
              <tr className="border">
                <td className="w-40 bg-gray-100 p-2 text-base font-semibold tracking-wide">
                  Họ tên
                </td>
                <td className="p-2 text-base tracking-wide break-words hover:bg-gray-100">
                  {carBookingInfo.ho_ten}
                </td>
              </tr>
              <tr className="border">
                <td className="w-40 bg-gray-100 p-2 text-base font-semibold tracking-wide">
                  Điểm đón
                </td>
                <td className="p-2 text-base tracking-wide break-words hover:bg-gray-100">
                  {carBookingInfo.diem_don}
                </td>
              </tr>
              <tr className="border">
                <td className="w-40 bg-gray-100 p-2 text-base font-semibold tracking-wide">
                  Điểm đến
                </td>
                <td className="p-2 text-base tracking-wide break-words hover:bg-gray-100">
                  {carBookingInfo.diem_den}
                </td>
              </tr>
              <tr className="border">
                <td className="w-40 bg-gray-100 p-2 text-base font-semibold tracking-wide">
                  Hai chiều
                </td>
                <td className="p-2 text-base tracking-wide break-words hover:bg-gray-100">
                  {carBookingInfo.check_hai_chieu ? 'Có' : 'Không'}
                </td>
              </tr>
              <tr className="border">
                <td className="w-40 bg-gray-100 p-2 text-base font-semibold tracking-wide">
                  VAT
                </td>
                <td className="p-2 text-base tracking-wide break-words hover:bg-gray-100">
                  {carBookingInfo.check_vat ? 'Có' : 'Không'}
                </td>
              </tr>
              <tr className="border">
                <td className="w-40 bg-gray-100 p-2 text-base font-semibold tracking-wide">
                  Loại xe
                </td>
                <td className="p-2 text-base tracking-wide break-words hover:bg-gray-100">
                  {carBookingInfo.loai_xe} Chỗ
                </td>
              </tr>
              <tr className="border">
                <td className="w-40 bg-gray-100 p-2 text-base font-semibold tracking-wide">
                  Số điện thoại
                </td>
                <td className="p-2 text-base tracking-wide break-words hover:bg-gray-100">
                  {carBookingInfo.so_dien_thoai}
                </td>
              </tr>
              <tr className="border">
                <td className="w-40 bg-gray-100 p-2 text-base font-semibold tracking-wide">
                  Thời gian đón
                </td>
                <td className="p-2 text-base tracking-wide break-words hover:bg-gray-100">
                  {formatDate(carBookingInfo.thoi_gian_don)}
                </td>
              </tr>
              <tr className="border">
                <td className="w-40 bg-gray-100 p-2 text-base font-semibold tracking-wide">
                  Thời gian chờ
                </td>
                <td className="p-2 text-base tracking-wide break-words hover:bg-gray-100">
                  {carBookingInfo.thoi_gian_cho} Phút
                </td>
              </tr>
              <tr className="border">
                <td className="w-40 bg-gray-100 p-2 text-base font-semibold tracking-wide">
                  Thời gian đặt xe
                </td>
                <td className="p-2 text-base tracking-wide break-words hover:bg-gray-100">
                  {formatDate(carBookingInfo.created_at)}
                </td>
              </tr>
              <tr className="border">
                <td className="w-40 bg-gray-100 p-2 text-base font-semibold tracking-wide">
                  Chỉnh sửa lần cuối
                </td>
                <td className="p-2 text-base tracking-wide break-words hover:bg-gray-100">
                  {formatDate(carBookingInfo.updated_at)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer">Đóng</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              variant={'outline'}
              className="cursor-pointer bg-red-500 text-white hover:bg-red-500/80 hover:text-white"
              onClick={() => handleDelete(carBookingInfo.id)}
            >
              Xoá
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default BookingInfoDialog;
