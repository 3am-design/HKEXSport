import "@/app/assets/global.scss";
import "@/app/assets/common.scss";
import "@/app/assets/preview-2026.scss";
import "@/app/assets/motion-2026.scss";
import "bootstrap-icons/font/bootstrap-icons.scss";
import { GlobalProvider } from "@/app/GlobalContext";
export const metadata = {
  title: "HKEX Family Sports Day 2026",
  description:
    "Join colleagues and family for HKEX Family Sports Day 2026 on 12 December at Kai Tak Youth Sports Ground.",
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
