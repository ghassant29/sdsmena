import { PropsWithChildren, useLayoutEffect } from "react";
import DefaultLayout from "./default";

type Props = {
  title?: string;
};

const Page = ({ children, title }: PropsWithChildren<Props>) => {
  useLayoutEffect(() => {
    document.title = title ? `${title} | SDS MEA` : "SDS MEA";
  }, []);

  return <DefaultLayout>{children}</DefaultLayout>;
};

export default Page;
