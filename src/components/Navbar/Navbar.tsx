const Navbar = () => {
  return (
    <nav className="flex justify-center items-center border-b border-gray-200">
      <div className="gap-6 p-4 flex flex-row justify-start items-center w-full max-w-7xl">
        <div className="flex gap-4 items-center">
          <img src="/logo.svg" alt="logo" width={46} height={46} />
          <img src="/title.svg" alt="title" width={78} height={32} />
        </div>

        <div className="flex gap-6 items-center">
          <p className="cursor-pointer text-sm font-medium">صفحه اصلی</p>
          <p className="cursor-pointer text-sm font-medium text-[#8D8EC8]">طبقه‌بندی</p>
          <p className="cursor-pointer text-sm font-medium">مستندات</p>
          <p className="cursor-pointer text-sm font-medium">درباره ما</p>
          <p className="cursor-pointer text-sm font-medium">تماس با ما</p>
          <p className="cursor-pointer text-sm font-medium">بلاگ</p>
        </div>

        <button className="mr-auto text-sm font-normal bg-[#4142A3] py-3 px-4 text-white rounded-xl cursor-pointer">راهنمای استفاده</button>
      </div>
    </nav>
  );
};

export default Navbar;
