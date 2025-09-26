'use client';

import dynamic from 'next/dynamic';

const ProgressIndicator = dynamic(() => import('@/components/ProgressIndicator'), {
  ssr: false
});

interface ClientProgressIndicatorProps {
  chapters: string[];
}

export default function ClientProgressIndicator({ chapters }: ClientProgressIndicatorProps) {
  return <ProgressIndicator chapters={chapters} />;
}