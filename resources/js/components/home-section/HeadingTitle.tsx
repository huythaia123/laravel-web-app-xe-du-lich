import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

const HeadingTitle = () => {
  const webInfoState = useSelector((state: RootState) => state.webInfo);

  return (
    <div>
      <section className="bg-gray-100 shadow">
        <h2 className="py-1 text-center text-xl font-light lg:hidden">
          Xe Du Lịch Hà Nội - Hotline 24/7:{' '}
          <a
            href={`tel:${webInfoState.soDienThoai}`}
            className="font-semibold text-[#104282] focus:text-orange-500"
          >
            {webInfoState.soDienThoai}
          </a>
        </h2>
        <h2 className="hidden py-1 text-center text-base font-light lg:block">
          Xe Du Lịch Hà Nội - Trọn gói, an toàn, đúng hẹn. Tổng đài đặt xe:{' '}
          <span className="font-semibold">{webInfoState.soDienThoai}</span>
        </h2>
      </section>
    </div>
  );
};

export default HeadingTitle;
