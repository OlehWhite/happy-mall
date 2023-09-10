import { FC, ReactNode } from "react";
import { Container } from "./style";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
