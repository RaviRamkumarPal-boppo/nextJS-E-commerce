import React, { lazy, Suspense } from 'react';
import Loading from "@/app/loading";

const TypeSection = lazy(() => import('@/components/TypeSection'));

function Home() {
  return (
    <div>
      <Suspense fallback={<div><Loading /></div>}>
        <TypeSection />
      </Suspense>
    </div>
  );
}

export default Home;
