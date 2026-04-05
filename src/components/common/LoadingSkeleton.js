import React from 'react';

const LoadingSkeleton = ({ type = 'card' }) => {
  if (type === 'card') {
    return (
      <div className="bg-base-200 rounded-2xl overflow-hidden animate-pulse">
        {/* Image skeleton */}
        <div className="h-52 bg-base-300 skeleton"></div>

        {/* Content skeleton */}
        <div className="p-5 space-y-3">
          {/* Title */}
          <div className="h-6 bg-base-300 rounded w-3/4 skeleton"></div>

          {/* Description */}
          <div className="space-y-2">
            <div className="h-3 bg-base-300 rounded w-full skeleton"></div>
            <div className="h-3 bg-base-300 rounded w-5/6 skeleton"></div>
          </div>

          {/* Technologies */}
          <div className="flex gap-2 pt-2">
            <div className="h-6 bg-base-300 rounded-full w-16 skeleton"></div>
            <div className="h-6 bg-base-300 rounded-full w-20 skeleton"></div>
            <div className="h-6 bg-base-300 rounded-full w-14 skeleton"></div>
          </div>

          {/* Button */}
          <div className="h-10 bg-base-300 rounded-lg w-full skeleton"></div>
        </div>
      </div>
    );
  }

  if (type === 'text') {
    return (
      <div className="space-y-2 animate-pulse">
        <div className="h-4 bg-base-300 rounded w-3/4 skeleton"></div>
        <div className="h-4 bg-base-300 rounded w-full skeleton"></div>
        <div className="h-4 bg-base-300 rounded w-5/6 skeleton"></div>
      </div>
    );
  }

  if (type === 'title') {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-base-300 rounded w-48 skeleton"></div>
      </div>
    );
  }

  return null;
};

export default LoadingSkeleton;
