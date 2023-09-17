import { AktivitetsloggApi, Configuration } from "@/lib/aktivitetslogg-api";

export const client = new AktivitetsloggApi(
  new Configuration({ basePath: process.env.NEXT_PUBLIC_API_PATH }),
);
