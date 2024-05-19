import Header from "@/components/shared/Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="container mx-auto min-h-screen">
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
