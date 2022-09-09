// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    width: string;
    // colors: {
    //   main: string;
    //   secondary: string;
    // };
    // background: string;
    // text: string;
    // body: string;
    // theme:string
  }
}

export type ThemeType = typeof theme;
