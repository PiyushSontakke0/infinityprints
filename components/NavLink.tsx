import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  activeClassName?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, className, activeClassName, children, ...props }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href} {...props} className={cn(className, isActive && activeClassName)}>
      {children}
    </Link>
  );
};
