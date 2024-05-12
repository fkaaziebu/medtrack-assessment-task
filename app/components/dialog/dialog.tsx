'use client';

import { cn } from '@/lib/utils';
import { XMarkIcon } from '@heroicons/react/24/outline';
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
      {props.open && (
        <div
          onClick={(e) => {
            props.onOpenChange();
          }}
          className={cn(
            'absolute left-[20%] z-30 h-screen w-[80%] bg-zinc-900/80'
          )}
        >
          <div className='no-scrollbar flex h-full w-full items-center justify-center overflow-y-auto text-white'>
            {props.children}
          </div>
        </div>
      )}
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
    <div className='mb-16 flex h-[135%] w-full items-end justify-center'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={cn(
          'relative flex min-h-[70%] min-w-[55%] max-w-[55%] flex-col rounded-xl bg-white',
          props.className
        )}
      >
        {props.children}
      </div>
    </div>
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
        <XMarkIcon className='h-5 w-5 text-[#182430]' />
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
