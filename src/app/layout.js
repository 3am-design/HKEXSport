import "@/app/assets/global.scss";
import "@/app/assets/common.scss";
import "@/app/assets/preview-2026.scss";
import "bootstrap-icons/font/bootstrap-icons.scss";
import { GlobalProvider } from "@/app/GlobalContext";
export const metadata = {
  title: "HKEX Family Sports Day 2026 | Preview",
  description:
    "A working preview of HKEX Family Sports Day 2026. Programme and artwork are provisional.",
  robots: { index: false, follow: false },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
