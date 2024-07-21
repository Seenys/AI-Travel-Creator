import { Button } from "..";

const Header = () => {
  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5 max-h-[130px]">
      <img src="/logo.svg" />
      <div>
        <Button>Sign in</Button>
      </div>
    </div>
  );
};

export default Header;
