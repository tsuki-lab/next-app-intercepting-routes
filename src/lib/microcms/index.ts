import { MicroCMSImage, createClient } from "microcms-ts-sdk";

if (!process.env.SERVICE_DOMAIN || !process.env.API_KEY) {
  throw new Error("Please set SERVICE_DOMAIN and API_KEY");
}

type Endpoints = {
  list: {
    viejr3qf: {
      image: MicroCMSImage;
      magicWord: string;
      title: string;
    };
  };
};

export const microcms = createClient<Endpoints>({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});
