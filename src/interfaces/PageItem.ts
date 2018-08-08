export interface IPageItem {
  bannerInfo: {
    headerBG: any;
    role: string;
    title: string;
    date: string;
    context: string;
    projectDescription: string;
  };
  challenge: string;
  solution: string;
  fonts: {
    description: string;
  };
  icons: {
    description: string;
  };
  conclusion: string;
  title?: string;
  route: string;
  images: {
    images: any;
    imagesMobile: any;
    logos: any;
    logosMobile: any;
    colors: any;
    colorsMobile: any;
    icons: any;
    iconsMobile: any;
  };
}
