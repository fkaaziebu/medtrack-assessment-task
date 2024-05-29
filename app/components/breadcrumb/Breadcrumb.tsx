'use client';
import Image from 'next/image';
import HomeIcon from '@/public/home-line.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const paths = pathname.split('/');

  const generateUrl = (idx: number) => {
    const indeces = [];
    while (idx > 0) {
      indeces.push(idx);
      idx = idx - 1;
    }

    indeces.sort((num1, num2) => {
      return num1 - num2;
    });

    return indeces
      .map((ind) => {
        return paths[ind];
      })
      .join('/');
  };

  return (
    <div className='flex h-10 items-center gap-3 rounded-lg border border-[#d0d5e2] bg-white px-3 py-1'>
      <Link href={'/'}>
        <Image
          src={HomeIcon}
          alt='Back to Home'
          className='h-3 w-3 text-[#7a7d7f] sm:h-5 sm:w-5'
        />
      </Link>
      {paths.map((path, idx) => {
        return (
          <>
            {path === '' ? (
              ''
            ) : (
              <span className='text-[0.5rem] font-bold text-[#d0d5e2] sm:text-xs'>
                /
              </span>
            )}
            {path === '' ? (
              ''
            ) : (
              <Link href={`/${generateUrl(idx)}`}>
                <span className='text-xs text-[#7a7d7f] sm:text-base'>
                  {path.split('-').map((word) => {
                    return ' ' + word.charAt(0).toUpperCase() + word.slice(1);
                  })}
                </span>
              </Link>
            )}
          </>
        );
      })}
    </div>
  );
}
