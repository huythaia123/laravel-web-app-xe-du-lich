import BookCar from '@/components/home-section/BookCar';
import HeadingTitle from '@/components/home-section/HeadingTitle';
import Slider from '@/components/home-section/Slider';
import { RootState } from '@/redux/store';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const { auth } = usePage<SharedData>().props;
  const countState = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <Head title="Trang chủ">
        {/* <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
          rel="stylesheet"
        /> */}
      </Head>
      {/* <nav className="flex items-center justify-end gap-4">
            {auth.user ? (
              <Link
                href={route('dashboard')}
                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
              >
                Bảng điều khiển
              </Link>
            ) : (
              <>
                <Link
                  href={route('login')}
                  className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                >
                  Đăng nhập
                </Link>
                <Link
                  href={route('register')}
                  className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                >
                  Đăng ký
                </Link>
              </>
            )}
          </nav> */}
      <HeadingTitle />
      <div className='bg-[url("/resources/js/components/home-section/background.webp")] bg-cover bg-center bg-no-repeat'>
        <div className='className="container lg:px-2" mx-auto max-w-6xl'>
          <div className="flex flex-col-reverse md:gap-7 lg:flex-row lg:py-5">
            <BookCar className="flex-1" />
            <Slider className="flex-1" />
          </div>
        </div>
      </div>
    </>
  );
}
