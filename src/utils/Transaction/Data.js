import sanityClient from "@sanity/client";
import abi from "./transaction.json";

export const client = sanityClient({
  projectId: "ekas9mvf",
  dataset: "production",
  apiVersion: "v1",
  token: "ekas9mvf",
  userCdn: false,
});

export const contractABI = abi.abi;
export const contractAddress = '0xf6b0cB7DB69F604164dF1575B9DDAf874A6e987a';