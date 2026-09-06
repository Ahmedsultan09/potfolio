import { ThemeProvider } from "./context/ThemeContext";
import { Portfolio } from "./components/Portfolio";
export default function App({ pathname = "/" }: { pathname?: string }) {
  return (
    <ThemeProvider>
      <Portfolio pathname={pathname} />
    </ThemeProvider>
  );
}
