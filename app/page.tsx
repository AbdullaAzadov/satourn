import { ITourCard, mockTours } from '@/entities/tour-card/model/types';
import TourCard from '@/entities/tour-card/ui/tour-card';
import TourSearchWidget from '@/widgets/tour-search/ui/tour-search';

export default function Home() {
  return (
    <div className='space-y-8'>
      <TourSearchWidget />
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-6'>
        {mockTours.map((data) => (
          <TourCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}
