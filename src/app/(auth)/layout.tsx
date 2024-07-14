import {Logo} from "./_components/Logo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col  items-center justify-center space-y-6">
      <Logo />
      {children}
    </div>
  );
};

export default AuthLayout;
