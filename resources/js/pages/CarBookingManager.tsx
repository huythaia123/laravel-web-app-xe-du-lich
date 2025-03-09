import DetailCarBooking from '@/components/DetailCarBooking';
import Modal from '@/components/Modal';
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
import { Head } from '@inertiajs/react';
import { XIcon } from 'lucide-react';

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
                  <TableRow>
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell>{item.ho_ten}</TableCell>
                    <TableCell>{item.so_dien_thoai}</TableCell>
                    <TableCell className="text-right">
                      {new Date(item.created_at).toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <Modal
                        button={
                          <Button
                            className="cursor-pointer bg-blue-600"
                            size={'sm'}
                          >
                            Chi tiết
                          </Button>
                        }
                        title="Thông tin chi tiết"
                        description={<DetailCarBooking bookCarInfo={item} />}
                        buttonCancel={
                          <Button
                            className="cursor-pointer bg-red-600 text-white hover:bg-red-500 hover:text-white"
                            size={'icon'}
                          >
                            <XIcon />
                          </Button>
                        }
                      />
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
