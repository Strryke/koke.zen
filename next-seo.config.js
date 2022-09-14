/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Kokezen",
  titleTemplate: "%s | Kokezen",
  defaultTitle: "Kokezen",
  description: "Interior | Terrariums | Workshops",
  canonical: "https://koke-zen.com",
  openGraph: {
    url: "https://koke-zen.com",
    title: "Kokezen",
    description: "Next.js + chakra-ui + TypeScript template",
    images: [
      {
        url: "https://og-image.sznm.dev/**Kokezen**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "Kokezen.sznm.dev og-image",
      },
    ],
    site_name: "Kokezen",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
