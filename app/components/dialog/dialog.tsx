'use client';

import { cn } from '@/lib/utils';
import XMarkIcon from '@/public/x-close.svg';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

let onOpenChange: any;

interface DialogProps {
  className?: string | null;
  open: boolean;
  onOpenChange: any;
  children: React.ReactNode;
}
const Dialog = (props: DialogProps) => {
  onOpenChange = props.onOpenChange;

  return (
    <>
      <AnimatePresence>
        {props.open && (
          <div
            onClick={(e) => {
              props.onOpenChange();
            }}
            className={cn(
              'absolute z-30 h-screen w-full bg-zinc-900/80 lg:left-[22%] lg:w-[80%] xl:left-[20%]'
            )}
          >
            <div className='no-scrollbar h-[calc(100%)] overflow-y-auto py-20 text-white'>
              {props.children}
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

const DialogTrigger = ({ className }: { className: string | null }) => {
  return <div className={cn(className)}></div>;
};

interface DialogContentProps {
  children: React.ReactNode;
  className?: any;
}

const DialogContent = (props: DialogContentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      className='flex items-center justify-center'
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={cn(
          'relative flex min-h-[70%] min-w-[90%] max-w-[55%] flex-col overflow-clip rounded-xl bg-white xl:min-w-[55%]',
          props.className
        )}
      >
        {props.children}
      </div>
    </motion.div>
  );
};

const DialogHeader = (props: DialogContentProps) => {
  return (
    <div
      className={cn(
        'w-full rounded-t-xl bg-[#f6f8fb] px-5 py-2',
        props.className
      )}
    >
      {props.children}
      <div
        onClick={() => onOpenChange()}
        className='absolute right-4 top-4 cursor-pointer rounded-full border border-[#d0d5e2] bg-white p-1'
      >
        <Image src={XMarkIcon} alt='Close' className='h-5 w-5 text-[#182430]' />
      </div>
    </div>
  );
};

const DialogFooter = (props: DialogContentProps) => {
  return (
    <div
      className={cn(
        'mt-auto flex w-full items-center justify-center rounded-b-xl border-t border-t-[#f0da9f] bg-[#f2f3f6] p-8',
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

const DialogTitle = (props: DialogContentProps) => {
  return (
    <div className={cn('text-sm text-[#182430]', props.className)}>
      {props.children}
    </div>
  );
};

const DialogDescription = (props: DialogContentProps) => {
  return (
    <div className={cn('text-sm text-[#182430]', props.className)}>
      {props.children}
    </div>
  );
};

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
