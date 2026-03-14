import { Analytics } from '@vercel/analytics/next';
import "@/app/styles/globals.css";

export const metadata = {
  title: '오늘 뭐 먹지?',
  description: '메뉴 고민은 이제 그만'
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
