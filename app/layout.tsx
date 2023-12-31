import "./styles/config/reset.scss";
import "./styles/config/global.scss";

import Provider from "./Provider";
import GlobalModal from "./components/modal/GlobalModal";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Provider>
          <GlobalModal>{children}</GlobalModal>
        </Provider>
      </body>
    </html>
  );
}
