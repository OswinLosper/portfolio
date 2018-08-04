export interface IPageItem {
  bannerInfo: {
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
    logos: any;
    colors: any;
    icons: any;
  };
}
