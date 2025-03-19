import BookingInfoDialog from '@/components/BookingInfoDialog';
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

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Quản lý đặt xe',
    href: '/car-booking-management',
  },
];

type CarBookingManagerProps = {
  listBookCar: BookCarInfo[];
};
const CarBookingManager = ({ listBookCar }: CarBookingManagerProps) => {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Dashboard" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
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
