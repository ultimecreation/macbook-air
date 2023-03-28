import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3030/ram", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: "8go",
          value: "8go",
          option: "8 Go de mémoire unifiée",
          price: 0,
        },
        {
          id: "16go",
          value: "16go",
          option: "16 Go de mémoire unifiée",
          price: 230,
        },
      ])
    );
  }),
  rest.get("http://localhost:3030/ssd", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: "256ssd",
          label: "SSD de 256 Go",
          price: 0,
        },
        {
          id: "512ssd",
          label: "SSD de 512 Go",
          price: 230,
        },
        {
          id: "1tossd",
          label: "SSD de 1 To",
          price: 460,
        },
        {
          id: "2tossd",
          label: "SSD de 2 To",
          price: 920,
        },
      ])
    );
  }),
];
