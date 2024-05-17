import { cn } from '@/lib/utils';

interface CardProps {
  className?: string | null;
  children: React.ReactNode;
}

const Card = (props: CardProps) => {
  return (
    <div
      className={cn(
        'overflow-clip rounded-lg border border-[#d0d5e2]',
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

const CardHeader = (props: CardProps) => {
  return (
    <div
      className={cn(
        'flex items-center bg-[#f6f8fb] px-4 py-2',
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

const CardBody = (props: CardProps) => {
  return (
    <div className={cn('flex flex-col gap-1 p-4 bg-white', props.className)}>
      {props.children}
    </div>
  );
};

const CardFooter = (props: CardProps) => {
  return (
    <div
      className={cn(
        'flex items-center gap-1 bg-[#f6f8fb] px-4 py-1.5 font-light',
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

export { Card, CardHeader, CardBody, CardFooter };
