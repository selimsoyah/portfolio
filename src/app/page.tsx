import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';

// Lazy load chapters for better performance
const Chapter1 = dynamic(() => import('@/components/Chapter1'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>
});

const Chapter2 = dynamic(() => import('@/components/Chapter2'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});

const Chapter3 = dynamic(() => import('@/components/Chapter3'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div></div>
});

const Chapter4 = dynamic(() => import('@/components/Chapter4'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div></div>
});

import ClientProgressIndicator from '@/components/ClientProgressIndicator';

export default function Home() {
  const chapters = ['hero', 'chapter-1', 'chapter-2', 'chapter-3', 'chapter-4'];

  return (
    <main className="relative">
      <ClientProgressIndicator chapters={chapters} />
      
      <Hero />
      <Chapter1 />
      <Chapter2 />
      <Chapter3 />
      <Chapter4 />
    </main>
  );
}
