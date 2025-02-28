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

const tableHeaderTourFares = [
  'loại xe',
  'Một Chiều',
  'Hai chiều (trong ngày)',
  'City Tour',
];

const tourFares = [
  {
    loai_xe: '4 chỗ',
    hinh_anh: xe4Cho,
    mot_chieu: '8.000đ /km',
    hai_chieu: '5.000đ /km',
    city_tour: '150.000đ /Giờ',
  },
  {
    loai_xe: '5 chỗ',
    hinh_anh: xe5Cho,
    mot_chieu: '9.000đ /km',
    hai_chieu: '6.000đ /km',
    city_tour: '150.000đ /Giờ',
  },
  {
    loai_xe: '7 chỗ',
    hinh_anh: xe7Cho,
    mot_chieu: '10.000đ /km',
    hai_chieu: '7.000đ /km',
    city_tour: '180.000đ /Giờ',
  },
  {
    loai_xe: '16 chỗ',
    hinh_anh: xe16Cho,
    mot_chieu: '15.000đ /km',
    hai_chieu: '11.000đ /km',
    city_tour: '300.000đ /Giờ',
  },
  {
    loai_xe: '29 chỗ',
    hinh_anh: xe29Cho,
    mot_chieu: '20.000đ /km',
    hai_chieu: '13.000đ /km',
    city_tour: '400.000đ /Giờ',
  },
  {
    loai_xe: '35 chỗ - 45 chỗ',
    hinh_anh: xe45Cho,
    mot_chieu: '30.000đ /km',
    hai_chieu: '20.000đ /km',
    city_tour: '600.000đ /Giờ',
  },
];

// const TableTh = ({ text }: { text: string }) => {
//   return (
//     <th className="border border-slate-300 p-[10px] capitalize">{text}</th>
//   );
// };
// const TableTd = ({
//   text,
//   children,
//   className = '',
// }: { text?: string; className?: string } & PropsWithChildren) => {
//   return (
//     <td className={`border border-slate-300 p-[10px] capitalize ${className}`}>
//       {text || children}
//     </td>
//   );
// };

const TourFare = () => {
  return (
    <section>
      <h3 className="pt-6 pb-2 text-center text-2xl font-bold text-[#368db5] uppercase">
        BẢNG GIÁ XE DU LỊCH, CITY TOUR
      </h3>
      <table className="w-full border-collapse border border-slate-400 bg-white text-center">
        <thead>
          <tr className="bg-[#34ade9] text-white">
            {tableHeaderTourFares.map((value) => {
              return <TableTh text={value} key={Math.random()} />;
            })}
          </tr>
        </thead>
        <tbody>
          {tourFares.map((tourFare) => {
            return (
              <tr key={Math.random()}>
                <TableTd className="">
                  <img
                    src={tourFare.hinh_anh}
                    alt={tourFare.loai_xe}
                    className="inline-block w-[120px] text-center"
                  />
                  <p className="text-base font-light">{tourFare.loai_xe}</p>
                </TableTd>
                <TableTd text={tourFare.mot_chieu} />
                <TableTd text={tourFare.hai_chieu} />
                <TableTd text={tourFare.city_tour} />
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="space-y-2 py-4 font-light">
        <p>
          Tour Du Lịch Đường Dài: Ưu Đãi{' '}
          <span className="text-orange-500">Giảm Giá Đến 30%</span>
        </p>
        <p>Giá trên chưa bao gồm vé cầu đường và VAT 10%</p>
        <p>
          Những Tour dài ngày lái xe tự túc ăn, nghỉ: 300.000đ - 500.000đ/đêm
        </p>
      </div>
    </section>
  );
};

export default TourFare;
