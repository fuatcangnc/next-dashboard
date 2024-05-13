import '@/app/ui/global.css';
import {inter} from "@/app/ui/fonts/Inter"
import { lusitana } from './ui/fonts/Lusitana';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
