'use client';
import { HomeIcon } from '@heroicons/react/24/outline';
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
        <HomeIcon className='h-5 w-5 text-[#7a7d7f]' />
      </Link>
      {paths.map((path, idx) => {
        return (
          <>
            {path === '' ? (
              ''
            ) : (
              <span className='text-xs font-bold text-[#d0d5e2]'>/</span>
            )}
            {path === '' ? (
              ''
            ) : (
              <Link href={`/${generateUrl(idx)}`}>
                <span className='text-base text-[#7a7d7f]'>
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
