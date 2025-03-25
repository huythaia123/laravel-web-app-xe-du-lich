import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Head } from '@inertiajs/react';
import { useForm } from 'react-hook-form';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Quản lý đặt xe',
    href: '/car-booking-management',
  },
  {
    title: 'Chỉnh sửa',
    href: '',
  },
];

import { z } from 'zod';

const formSchema = z.object({
  diem_don: z.string().min(1, 'Điểm đón không được để trống'),
  diem_den: z.string().min(1, 'Điểm đến không được để trống'),
  check_hai_chieu: z.boolean(),
  check_vat: z.boolean(),
  loai_xe: z.string().min(1, 'Loại xe không được để trống'),
  ho_ten: z
    .string()
    .min(2, 'Họ tên phải có ít nhất 2 ký tự')
    .max(50, 'Họ tên không được quá 50 ký tự'),
  so_dien_thoai: z.string().regex(/^0\d{9,10}$/, 'Số điện thoại không hợp lệ'),
  thoi_gian_don: z.string().min(1, 'Thời gian đón không được để trống'),
  thoi_gian_cho: z.string().optional(),
});

const CarBookingEdit = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Dashboard" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
        <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 rounded-xl md:min-h-min">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full max-w-2xl space-y-8"
            >
              <FormField
                control={form.control}
                name="diem_don"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </AppLayout>
  );
};

export default CarBookingEdit;
