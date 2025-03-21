import { BookCarInfo } from '@/types';
import formatDate from '@/utils/formatDate';
import { router } from '@inertiajs/react';
import { Info } from 'lucide-react';
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
import TableInfoRow from './TableInfoRow';

type Props = {
  carBookingInfo: BookCarInfo;
};
const BookingInfoDialog = ({ carBookingInfo }: Props) => {
  const handleDelete = (bookCarId: number) => {
    const ok = confirm('Bạn có chắc chắn muốn xoá không');
    // alert(`${ok} - ${bookCarId}`);
    if (ok) {
      router.delete(
        route('car-booking-management.delete', { book_car_id: bookCarId }),
      );
    }
  };

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
              <TableInfoRow title="ID" description={carBookingInfo.id} />
              <TableInfoRow
                title="Họ tên"
                description={carBookingInfo.ho_ten}
              />
              <TableInfoRow
                title="Điểm đón"
                description={carBookingInfo.diem_don}
              />
              <TableInfoRow
                title="Điểm đến"
                description={carBookingInfo.diem_den}
              />
              <TableInfoRow
                title="Hai chiều"
                description={carBookingInfo.check_hai_chieu ? 'Có' : 'Không'}
              />
              <TableInfoRow
                title="VAT"
                description={carBookingInfo.check_vat ? 'Có' : 'Không'}
              />
              <TableInfoRow
                title="Loại xe"
                description={`${carBookingInfo.loai_xe} Chỗ`}
              />
              <TableInfoRow
                title="Số điện thoại"
                description={carBookingInfo.so_dien_thoai}
              />
              <TableInfoRow
                title="Thời gian đón"
                description={formatDate(carBookingInfo.thoi_gian_don)}
              />
              <TableInfoRow
                title="Thời gian chờ"
                description={`${carBookingInfo.thoi_gian_cho} Phút`}
              />
              <TableInfoRow
                title="Thời gian đặt xe"
                description={formatDate(carBookingInfo.created_at)}
              />
              <TableInfoRow
                title="Chỉnh sửa lần cuối"
                description={formatDate(carBookingInfo.updated_at)}
              />
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
