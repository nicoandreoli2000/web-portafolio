import { FC } from "react";

export const withVariants = <Variant extends string, ComponentProps extends {}>(
  variants: Record<Variant, FC<ComponentProps>> = {} as any
): Record<Variant, FC<Omit<ComponentProps, "variant">>> => {
  const ComponentWithVariants = (
    props: ComponentProps & { variant: Variant }
  ) => {
    const { variant, ...rest } = props;
    const VariantComponent = variants[variant];
    return <VariantComponent {...(rest as any)} />;
  };
  Object.assign(ComponentWithVariants, variants);
  return ComponentWithVariants as any;
};
