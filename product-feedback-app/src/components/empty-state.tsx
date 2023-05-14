import { ComponentPropsWithoutRef, ReactNode } from "react";
import Image from "next/image";
import cx from "classnames";
import Typography from "./typography";
import illustration from "../../public/illustration-empty.svg";

type Props = {
  /**
   * The primary title for the EmptyState.
   */
  title: string;
  /**
   * An optional description to render additional information.
   */
  description?: string;
  /**
   * An optional action in form of a button.
   */
  action?: ReactNode;
} & ComponentPropsWithoutRef<"div">;

export default function EmptyState({ title, description, action, className, ...props }: Props) {
  return (
    <div className={cx("text-center max-w-md", className)} {...props}>
      <Image className="mx-auto mb-12" src={illustration} width={102} height={108} alt="" />
      <Typography as="h2" variant="h1">
        {title}
      </Typography>
      {description && <Typography className="text-gray mt-2">{description}</Typography>}
      {action && <span className="mt-10 block">{action}</span>}
    </div>
  );
}
