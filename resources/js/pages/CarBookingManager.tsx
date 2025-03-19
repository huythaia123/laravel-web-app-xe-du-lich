import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { BookCarInfo, BreadcrumbItem } from '@/types';
import formatPhoneNumber from '@/utils/formatPhoneNumber';
import { Head } from '@inertiajs/react';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { Info } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Quản lý đặt xe',
    href: '/car-booking-management',
  },
];

type CarBookingManagerProps = {
  listBookCar: BookCarInfo[];
};

const formatLabel = (key: string) => {
  const labels: { [key: string]: string } = {
    id: 'ID',
    ho_ten: 'Họ tên',
    diem_don: 'Điểm đón',
    diem_den: 'Điểm đến',
    check_hai_chieu: 'Hai chiều',
    check_vat: 'VAT',
    loai_xe: 'Loại xe',
    so_dien_thoai: 'Số điện thoại',
    thoi_gian_don: 'Thời gian đón',
    thoi_gian_cho: 'Thời gian chờ',
    created_at: 'Thời gian đặt xe',
    updated_at: 'Chỉnh sửa lần cuối',
  };
  return labels[key] || key;
};
const isDateTime = (value: string) => {
  return !isNaN(Date.parse(value));
};
const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return format(date, 'dd/MM/yyyy HH:mm', { locale: vi });
};

const BookingInfoDialog = ({
  carBookingInfo,
}: {
  carBookingInfo: BookCarInfo;
}) => {
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
              {Object.entries(carBookingInfo).map(([key, value]) => (
                <tr key={key} className="border">
                  <td className="w-40 bg-gray-100 p-2 text-base font-semibold tracking-wide">
                    {formatLabel(key)}
                  </td>
                  <td className="p-2 text-base tracking-wide break-words hover:bg-gray-100">
                    {typeof value === 'boolean'
                      ? value
                        ? 'Có'
                        : 'Không'
                      : typeof value === 'string' && isDateTime(value)
                        ? formatDate(value)
                        : String(value)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer">Đóng</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              variant={'outline'}
              className="cursor-pointer bg-red-500 text-white hover:bg-red-500/80 hover:text-white"
            >
              Xoá
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const CarBookingManager = ({ listBookCar }: CarBookingManagerProps) => {
  //

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Dashboard" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
        {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
          </div>
          <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
          </div>
          <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
          </div>
        </div> */}

        <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 rounded-xl border md:min-h-min">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Họ tên</TableHead>
                <TableHead>Số điện thoại</TableHead>
                <TableHead className="text-right">Thời gian đặt</TableHead>
                <TableHead className="text-right">...</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {listBookCar.length > 0 &&
                listBookCar.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell>{item.ho_ten}</TableCell>
                    <TableCell>
                      <a
                        target="_blank"
                        className="cursor-pointer text-blue-600 hover:underline"
                        href={`tel:${item.so_dien_thoai}`}
                      >
                        {formatPhoneNumber(item.so_dien_thoai)}
                      </a>
                    </TableCell>
                    <TableCell className="text-right">
                      {new Date(item.created_at).toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <BookingInfoDialog carBookingInfo={item} />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
            <TableCaption>Danh sách đặt xe gần đây.</TableCaption>
          </Table>
        </div>
      </div>
    </AppLayout>
  );
};

export default CarBookingManager;
