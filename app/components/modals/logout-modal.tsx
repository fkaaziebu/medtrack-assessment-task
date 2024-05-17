'use client';
import Image from 'next/image';
import LogoutIcon from '@/public/log-out.svg';
import { useModal } from '@/app/hooks/use-modal-store';

import {
  Dialog,
  DialogContent,
  DialogFooter,
} from '@/app/components/dialog/dialog';
import { useRouter } from 'next/navigation';

export const LogoutModal = () => {
  const { isOpen, onClose, type } = useModal();
  const router = useRouter();

  const isModalOpen = isOpen && type === 'logout';

  return (
    <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
      <DialogContent className='min-h-[55%] min-w-[90%] text-[#182430] xl:min-w-[30%]'>
        <div className='flex w-full gap-4 flex-col items-center px-16 py-10'>
          <div className='rounded-full border-[#e451511a] bg-[#e451511a] p-3'>
            <Image src={LogoutIcon} alt='Logout' className='h-6 w-6' />
          </div>
          <span className='text-xl'>Log Out</span>
          <p>Are you sure you want to logout of your account?</p>
        </div>

        <DialogFooter className='flex-col gap-4'>
          <button
            onClick={() => {
              window.localStorage.clear();
              router.refresh();
            }}
            className='w-full rounded-md bg-[#3952a6] py-2 text-white'
          >
            Logout
          </button>
          <button
            onClick={() => onClose()}
            className='w-full rounded-md border border-[#d0d5e2] bg-white py-2 text-[#e45151]'
          >
            Cancel
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
