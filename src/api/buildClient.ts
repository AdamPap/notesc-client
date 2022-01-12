import axios, { AxiosRequestHeaders } from "axios";
import { NextPageContext } from "next";
import { NextRequest } from "next/server";

const buildClient = (ctx: NextPageContext) => {
  if (typeof window === "undefined") {
    // we are on server
    return axios.create({
      baseURL: "http://localhost:4000",
      // TODO: check headers type missmatch nextjs/axios
      // @ts-ignore
      // headers: ctx.req.headers,
      // headers: {
      //   "Content-Type": "application/json",
      // },
    });
  } else {
    // on browser
    return axios.create({
      baseURL: "/",
    });
  }
};

export default buildClient;
