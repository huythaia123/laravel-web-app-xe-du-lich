import { Button } from '@/components/ui/button';
import { InfoIcon } from 'lucide-react';

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const BookCarSuccess = ({ isOpen, setIsOpen }: ModalProps) => (
  <>
    {isOpen && (
      <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/30 p-2 backdrop-blur-sm">
        {/* Hộp thông báo */}
        <div className="w-full max-w-[600px] space-y-4 bg-white pb-3 text-center shadow-lg">
          {/* Tiêu đề */}
          <h2 className="flex items-center justify-center gap-4 bg-[#34ade9] py-2 text-lg font-semibold text-gray-50">
            <InfoIcon /> ĐẶT XE THÀNH CÔNG
          </h2>
          {/* Nội dung */}

          <p className="mt-2 px-3 text-base text-gray-700 lg:text-sm">
            Quý Khách đã đặt xe thành công. Tổng đài Xe Du Lịch Hà Nội sẽ liên
            hệ với quý khách sau ít phút nữa!
          </p>
          {/* Nút đóng */}
          <div>
            <Button
              onClick={() => setIsOpen(false)}
              className="cursor-pointer rounded-md bg-green-600 text-white transition hover:bg-green-600/90"
            >
              Đóng
            </Button>
          </div>
        </div>
      </div>
    )}
  </>
);

export default BookCarSuccess;
