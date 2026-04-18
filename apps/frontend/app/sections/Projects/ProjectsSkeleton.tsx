import React from 'react';

export default function ProjectsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="glass-card overflow-hidden flex flex-col h-[380px] animate-pulse">
          {/* Header Image Skeleton */}
          <div className="relative h-36 bg-white/[0.03] overflow-hidden flex-shrink-0" />
          
          {/* Card Body Skeleton */}
          <div className="p-5 flex flex-col flex-1 space-y-4 mt-2">
            {/* Title Skeleton */}
            <div className="h-6 w-3/4 bg-white/[0.05] rounded-md" />
            
            {/* Description Skeleton */}
            <div className="space-y-2 flex-1">
              <div className="h-4 w-full bg-white/[0.03] rounded-md" />
              <div className="h-4 w-5/6 bg-white/[0.03] rounded-md" />
              <div className="h-4 w-4/6 bg-white/[0.03] rounded-md" />
            </div>

            {/* Tech Stack Skeleton */}
            <div className="flex gap-2">
              <div className="h-6 w-16 bg-white/[0.05] rounded-md" />
              <div className="h-6 w-16 bg-white/[0.05] rounded-md" />
              <div className="h-6 w-16 bg-white/[0.05] rounded-md" />
            </div>

            {/* Buttons Skeleton */}
            <div className="flex gap-2 pt-2">
              <div className="h-10 flex-1 bg-white/[0.04] rounded-lg" />
              <div className="h-10 flex-1 bg-white/[0.04] rounded-lg" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
