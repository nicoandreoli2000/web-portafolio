/* eslint-disable react/display-name */
import { FC, PropsWithChildren } from "react";
import { withVariants } from "./withVariants";

type TypographyVariant = "H1" | "H2" | "P";

type TypographyBaseProps = PropsWithChildren;

const TypographyVariants: Record<TypographyVariant, FC<TypographyBaseProps>> = {
  H1: ({ children }) => {
    return <h1 className="text-3xl">{children}</h1>;
  },
  H2: ({ children }) => {
    return <h2 className="text-2xl">{children}</h2>;
  },
  P: ({ children }) => {
    return <p className="text-lg">{children}</p>;
  },
};

export const Typography = withVariants(TypographyVariants);
