import { PropsWithChildren, useLayoutEffect } from "react";
import DefaultLayout from "./default";

type Props = {
  title?: string;
  onlyHome?: boolean;
};

const Page = ({ children, title, onlyHome }: PropsWithChildren<Props>) => {
  useLayoutEffect(() => {
    document.title = title ? `${title} | SDS MEA` : "SDS MEA";
  }, []);

  return <DefaultLayout onlyHome={onlyHome}>{children}</DefaultLayout>;
};

export default Page;
