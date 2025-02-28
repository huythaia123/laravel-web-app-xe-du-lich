import {
  xe16Cho,
  xe29Cho,
  xe45Cho,
  xe4Cho,
  xe5Cho,
  xe7Cho,
} from '@/assets/images/loaiXe';
import TableTd from '@/components/TableTd';
import TableTh from '@/components/TableTh';

const tableHeaderCarFares = [
  'loại xe',
  'hà nội - nội bài',
  'nội bài - hà nội',
  'hai chiều (trong ngày)',
];

const carFares = [
  {
    loai_xe: '4 chỗ',
    hinh_anh: xe4Cho,
    hn_nb: '180.000đ',
    nb_hn: '250.000đ',
    hai_chieu: '430.000đ',
  },
  {
    loai_xe: '5 chỗ',
    hinh_anh: xe5Cho,
    hn_nb: '220.000đ',
    nb_hn: '280.000đ',
    hai_chieu: '450.000đ',
  },
  {
    loai_xe: '7 chỗ',
    hinh_anh: xe7Cho,
    hn_nb: '250.000đ',
    nb_hn: '300.000đ',
    hai_chieu: '550.000đ',
  },
  {
    loai_xe: '16 chỗ',
    hinh_anh: xe16Cho,
    hn_nb: '450.000đ',
    nb_hn: '500.000đ',
    hai_chieu: '900.000đ',
  },
  {
    loai_xe: '29 chỗ',
    hinh_anh: xe29Cho,
    hn_nb: '900.000đ',
    nb_hn: '1.000.000đ',
    hai_chieu: '1.800.000đ',
  },
  {
    loai_xe: '35 chỗ - 45 chỗ',
    hinh_anh: xe45Cho,
    hn_nb: '1.500.000đ',
    nb_hn: '1.500.000đ',
    hai_chieu: '2.900.000đ',
  },
];

const CarFare = ({ className }: { className?: string }) => {
  return (
    <section className={className}>
      <h3 className="pt-6 pb-2 text-center text-2xl font-bold text-[#368db5] uppercase">
        BẢNG GIÁ SÂN BAY NỘI BÀI
      </h3>
      <table className="w-full border-collapse border border-slate-400 bg-white text-center">
        <thead>
          <tr className="bg-[#34ade9] text-sm text-white">
            {tableHeaderCarFares.map((value) => {
              return <TableTh text={value} key={Math.random()} />;
            })}
          </tr>
        </thead>
        <tbody>
          {carFares.map((carFare) => {
            return (
              <tr key={Math.random()}>
                <TableTd className="">
                  <img
                    src={carFare.hinh_anh}
                    alt={carFare.loai_xe}
                    className="inline-block w-[120px] text-center"
                  />
                  <p className="text-base font-light">{carFare.loai_xe}</p>
                </TableTd>
                <TableTd text={carFare.hn_nb} />
                <TableTd text={carFare.nb_hn} />
                <TableTd text={carFare.hai_chieu} />
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="space-y-2 py-4 font-light">
        <p>
          <span className="text-orange-500">Giảm Giá Đến 10%</span> Khi Khách{' '}
          <span className="text-orange-500">Chuyển Khoản Trước 100%</span>
        </p>
        <p>
          Giá trên đã bao gồm phí ra vào sân bay, thay đổi nhẹ theo giờ đón và
          địa điểm đón khách.
        </p>
      </div>
    </section>
  );
};

export default CarFare;
