import { useIsMounted } from "@/hooks/use-is-mounted";

export default function RootLayout({ children }: React.PropsWithChildren) {
  const isMounted = useIsMounted();

  // fix the `Hydration failed because the initial UI does not match` issue
  if (!isMounted) return null;

  // render default layout which is modern
  return <main>{children}</main>;
}
