// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    // colors: {
    //   main: string;
    //   secondary: string;
    // };
    background: string;
    text: string;
    body: string;
    breakpoints: {
      lg: string;
      sm: string;
    };
  }
}

export type ThemeType = typeof theme;
