export function Logo({height}) {
  return (
    <div className={`${height || 'h-14'} w-auto mt-4 mb-4`}> 
      <div className="flex items-center h-full">
        <img 
          src="/images/resized-logo1.png" 
          className="h-full w-auto object-contain"
          alt="Logo"
        />
      </div>
    </div>
  );
}
