import { BookCarInfo } from '@/types';
import formatPhoneNumber from '@/utils/formatPhoneNumber';
import { Table, TableBody, TableCell, TableRow } from '../ui/table';

type DetailCarBookingProps = { bookCarInfo: BookCarInfo };
const DetailCarBooking = ({ bookCarInfo }: DetailCarBookingProps) => {
  return (
    <Table className="text-black">
      <TableBody>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>{bookCarInfo.id}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Họ tên</TableCell>
          <TableCell>{bookCarInfo.ho_ten}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Điểm đón</TableCell>
          <TableCell>{bookCarInfo.diem_don}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Điểm đến</TableCell>
          <TableCell>{bookCarInfo.diem_den}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Hai chiều</TableCell>
          <TableCell>{bookCarInfo.check_hai_chieu ? 'Có' : 'Không'}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>VAT</TableCell>
          <TableCell>{bookCarInfo.check_vat ? 'Có' : 'Không'}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Loại xe</TableCell>
          <TableCell>{bookCarInfo.loai_xe} chỗ</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Số điện thoại</TableCell>
          <TableCell>
            <a
              className="cursor-pointer text-blue-600 underline"
              href={`tel:${bookCarInfo.so_dien_thoai}`}
            >
              {formatPhoneNumber(bookCarInfo.so_dien_thoai)}
            </a>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Thời gian đón</TableCell>
          <TableCell>
            {new Date(bookCarInfo.thoi_gian_don).toLocaleString()}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Thời gian chờ</TableCell>
          <TableCell>{bookCarInfo.thoi_gian_cho} phút</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Thời gian đặt xe</TableCell>
          <TableCell>
            {new Date(bookCarInfo.created_at).toLocaleString()}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Chỉnh sửa lần cuối</TableCell>
          <TableCell>
            {new Date(bookCarInfo.updated_at).toLocaleString()}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default DetailCarBooking;
