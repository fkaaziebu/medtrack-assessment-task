import Breadcrumb from '@/app/components/Breadcrumb/Breadcrumb';

export default function Home() {
  return (
    <main className='flex min-w-full flex-col gap-8 text-gray-900'>
      <div className='flex w-full'>
        <Breadcrumb />
      </div>
    </main>
  );
}
