export function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`${className} bg-gray-200 animate-pulse`} />;
}