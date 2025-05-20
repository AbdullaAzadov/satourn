import TourCard from '@/entities/tour-card/ui/tour-card';
import TourSearchWidget from '@/widgets/tour-search/ui/tour-search';

export default function Home() {
  return (
    <div className='space-y-8'>
      <TourSearchWidget />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-3'>
        {Array.from({ length: 16 }).map((_, index) => (
          <TourCard key={index} />
        ))}
      </div>
    </div>
  );
}
