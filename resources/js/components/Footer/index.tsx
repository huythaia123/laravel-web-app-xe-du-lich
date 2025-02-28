import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

const Footer = () => {
  const infoState = useSelector((state: RootState) => state.info);

  return (
    <footer className="bg-[#34ade9] px-2 py-7 font-light text-gray-50">
      {/* desktop view */}
      <div className="container mx-auto hidden max-w-6xl justify-between md:flex">
        <div className="space-y-1">
          <p>
            Địa chỉ: <span>{infoState.diaChi}</span>
          </p>
          <p>
            Liên hệ:{' '}
            <a
              href={`tel:${infoState.soDienThoai}`}
              className="hover:text-[#ff9000] hover:italic"
            >
              {infoState.soDienThoai}
            </a>
          </p>
          <p>
            Email:{' '}
            <a
              href={`mailto:${infoState.email}`}
              className="hover:text-[#ff9000] hover:italic"
            >
              {infoState.email}
            </a>
          </p>
        </div>
        <div className="space-y-2 text-right">
          <p className="font-semibold capitalize">Xe Du Lịch Hà Nội</p>
          <p className="capitalize">
            Xe Du Lịch Hà Nội -- Xe Du Lịch Hà Nội &copy; 2024
          </p>
        </div>
      </div>
      {/* moblie view */}
      <div className="flex flex-col items-center gap-1 md:hidden">
        <p className="uppercase">XE DU LỊCH HÀ NỘI</p>
        <p>
          Địa chỉ: <span>{infoState.diaChi}</span>
        </p>
        <p>
          Hotline 24/7:{' '}
          <a
            href={`tel:${infoState.soDienThoai}`}
            className="hover:text-[#ff9000] hover:italic"
          >
            {infoState.soDienThoai}
          </a>
        </p>
        <p>
          Zalo, WhatsApp, Telegram:{' '}
          <a
            href={`tel:${infoState.soDienThoai}`}
            className="hover:text-[#ff9000] hover:italic"
          >
            {infoState.soDienThoai}
          </a>
        </p>
        <p>
          Email:{' '}
          <a
            href={`mailto:${infoState.email}`}
            className="hover:text-[#ff9000] hover:italic"
          >
            {infoState.email}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
