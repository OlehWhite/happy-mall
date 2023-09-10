import { FC, PropsWithChildren } from "react";
import { Container } from "./style";

const Main: FC = ({ children }: PropsWithChildren<{}>) => {
  return <Container>{children}</Container>;
};

export default Main;
