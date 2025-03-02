import Footer from '@/components/Footer';
import About from '@/components/home-section/About';
import BookCar from '@/components/home-section/BookCar';
import CarFare from '@/components/home-section/CarFare';
import HeadingTitle from '@/components/home-section/HeadingTitle';
import Slider from '@/components/home-section/Slider';
import TourFare from '@/components/home-section/TourFare';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Home() {
  const { auth } = usePage<SharedData>().props;

  return (
    <>
      <Head title="Trang chủ">
        {/* <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
          rel="stylesheet"
        /> */}
      </Head>
      <nav className="flex items-center justify-end gap-4">
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
      </nav>
      <HeadingTitle />

      <div className='bg-[url("/resources/js/components/home-section/background.webp")] bg-cover bg-center bg-no-repeat'>
        <div className='className="container lg:px-2" mx-auto max-w-6xl'>
          <div className="flex flex-col-reverse md:gap-7 lg:flex-row lg:py-5">
            <BookCar className="flex-1" />
            <Slider className="flex-1" />
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-6xl lg:px-2">
        <div className="px-2 lg:px-0">
          <CarFare />
          <TourFare />
          <About />
        </div>
      </div>
      <Footer />
    </>
  );
}
