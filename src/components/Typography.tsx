import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import { FC, HTMLAttributes, PropsWithChildren } from "react";

const typography = cva("text-base", {
  variants: {
    variant: {
      h1: "text-3xl",
      h2: "text-2xl",
      p: "text-base",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: "h1" | "h2" | "p";
}

export const Typography: FC<PropsWithChildren<TypographyProps>> = ({
  variant,
  className,
  children,
  ...props
}) => {
  return <p className={cn(typography({ variant, className }))}>{children}</p>;
};
