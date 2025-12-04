import LightDarkButton from './LightDarkButton';

const Nav = () => {
  return (
    <div className="flex justify-between items-center bg-amber-100 dark:bg-zinc-900">
      <div className="flex items-center">
        <img className="w-[60px]" src="public\Logo\logo.webp" alt="" />
        <h1 className="dark:text-white">Logo</h1>
      </div>
      <div className="mr-2.5">
        <LightDarkButton />
      </div>
    </div>
  );
};

export default Nav;
