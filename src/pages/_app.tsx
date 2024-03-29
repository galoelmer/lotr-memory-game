import "@/styles/globals.css";
import type { AppProps } from "next/app";

import GameContextProvider from "@/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GameContextProvider>
      <Component {...pageProps} />
    </GameContextProvider>
  );
}
