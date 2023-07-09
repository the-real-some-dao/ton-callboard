import { useThemeParams } from '@vkruglikov/react-telegram-web-app'
import { ThemeProvider, createTheme, Theme } from '@mui/material/styles'
import { Router } from './router'
import { RouterProvider } from 'react-router-dom'

declare global {
  interface Window { Telegram: { WebApp: any }; }
}

window.Telegram = window.Telegram || {};

// type TWebApp = {
//   themeParams: TThemeParams;
//   colorScheme: string;
// }

// type TThemeParams = {
//   bg_color?: string;
//   text_color?: string;
//   hint_color?: string;
//   link_color?: string;
//   button_color?: string;
//   button_text_color?: string;
// }

export type TTheme = {
  background?: string;
  button?: string;
  text?: string;
  link?: string;
  buttonText?: string;
}

function App() {
  const [colorScheme, themeParams] = useThemeParams();

  const theme: Theme = createTheme({
    background: themeParams.bg_color,
    button: themeParams.button_color,
    text: themeParams.text_color,
    link: themeParams.link_color,
    buttonText: themeParams.button_text_color,
  } as any);

  return (
    <ThemeProvider theme={theme} >
      <RouterProvider router={Router} />
    </ThemeProvider>
  );
}

export default App;
