const OfflineError = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center w-full h-full">
      <img src="/offline.svg" alt="offline" width={250} height={250} className="mb-4" />

      <p className="text-2xl text-[#4142A3] font-bold">شما آفلاین هستید!</p>
      <p>برای دسترسی به محتوی به اینترنت متصل شوید.</p>
    </div>
  );
};

export default OfflineError;
