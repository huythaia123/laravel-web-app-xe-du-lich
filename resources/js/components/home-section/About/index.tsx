import Divider from '@/components/Divider';
import { RootState } from '@/redux/store';
import { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';

const AboutItem = ({
  heading,
  desc,
  children,
  isBorderBottom = true,
}: {
  heading: string;
  desc?: string;
  isBorderBottom?: boolean;
} & PropsWithChildren) => {
  return (
    <div
      className={`mb-2 min-h-28 ${isBorderBottom ? 'border-b border-dashed border-b-gray-800' : ''}`}
    >
      <h3 className="text-xl text-[#368db5] uppercase">{heading}</h3>
      <p className="font-light">{desc}</p>
      {children && <div className="mt-2 font-light">{children}</div>}
    </div>
  );
};

const About = () => {
  const infoState = useSelector((state: RootState) => state.info);

  return (
    <section className="mt-6 mb-5 flex flex-col gap-4 lg:flex-row">
      <div className="flex-1">
        <h3 className="text-xl text-orange-500 uppercase">
          TẠI SAO NÊN CHỌN DỊCH VỤ CỦA CHÚNG TÔI
          <Divider />
        </h3>
        <AboutItem
          heading="ĐẶT XE SIÊU NHANH"
          desc="Chỉ với 1 click hoặc một cuộc gọi đặt xe. Nhân viện trực cuộc gọi 24/24."
        />
        <AboutItem
          heading="GIÁ CƯỚC SIÊU RẺ"
          desc="Chúng tôi cam kết giá cước của chúng tôi luôn rẻ hơn thị trường."
        />
        <AboutItem
          heading="CÓ HÓA ĐƠN VAT"
          desc="Có hóa đơn VAT điện tử dành cho khách hàng có nhu cầu."
        />
        <AboutItem
          heading="HỆ THỐNG XE CAO CẤP"
          desc="Tất cả các xe đưa đón đều là xe đạt chuẩn chất lượng, có dịch vụ riêng theo yêu cầu."
          isBorderBottom={false}
        >
          <div className="text-center text-orange-500">
            Tài xế lịch sự - Cam kết xe riêng - Chuẩn lịch đón - Lái xe an toàn
          </div>
        </AboutItem>
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-orange-500 uppercase">
          HÌNH THỨC ĐẶT XE & THANH TOÁN
          <Divider />
        </h3>
        <AboutItem heading="GỌI ĐIỆN TRỰC TIẾP (24/7)">
          <div className="space-y-2">
            <p className="text-orange-500">Tổng đài</p>
            <div>
              <a
                href={`tel:${infoState.soDienThoai}`}
                className="text-xl font-semibold text-[#368db5]"
              >
                {infoState.soDienThoai}
              </a>
            </div>
          </div>
        </AboutItem>
        <AboutItem heading="ĐĂNG KÝ TRÊN WEBSITE">
          <p>
            Truy cập{' '}
            <a className="cursor-pointer font-semibold text-[#368DB5] italic">
              {location.hostname}
            </a>{' '}
            và nhập số điện thoại và địa chỉ của quý khách,{' '}
            <span className="font-semibold">chúng tôi</span> sẽ liên lạc lại
            ngay trong ít phút.
          </p>
        </AboutItem>
        <AboutItem
          heading="TIỀN MẶT"
          desc="Sau khi kết thúc hành trình, Quý khách vui lòng thanh toán trực tiếp cho lái xe chi phí của chuyến đi bằng tiền mặt."
        />
        <AboutItem
          heading="CHUYỂN KHOẢN"
          desc="Quý khách có thể thanh toán bằng cách chuyển khoản vào số tài khoản sau:"
          isBorderBottom={false}
        >
          <div className="space-y-1 text-lg">
            <p>
              Số tài khoản:{' '}
              <span className="text-orange-500">
                {infoState.nganHang?.soTaiKhoan}
              </span>
            </p>
            <p>
              Chủ tài khoản:{' '}
              <span className="text-orange-500">
                {infoState.nganHang?.chuTaiKhoan}
              </span>
            </p>
            <p>
              Chi nhánh:{' '}
              <span className="text-orange-500">
                {infoState.nganHang?.chiNhanh}
              </span>
            </p>
          </div>
        </AboutItem>
      </div>
    </section>
  );
};

export default About;
