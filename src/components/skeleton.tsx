import { cva, type VariantProps } from "class-variance-authority";

export const skeletonVariants = cva(
  `
    animate-pulse bg-gray-200 pointer-events-none
  `,
  {
    variants: {
      rounded: {
        sm: "rounded-sm",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      rounded: "lg",
    },
  }
);

interface SkeletonProps
  extends VariantProps<typeof skeletonVariants>,
    React.ComponentProps<"div"> {}

export default function Skeleton({
  rounded,
  className,
  ...props
}: SkeletonProps) {
  return (
    <div className={skeletonVariants({ rounded, className })} {...props} />
  );
}
