import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';

export default function Home() {
  return (
    <div className='flex min-w-full flex-col gap-8 text-gray-900'>
      <div className='flex w-full'>
        <Breadcrumb />
      </div>
    </div>
  );
}
