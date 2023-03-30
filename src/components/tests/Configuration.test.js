import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { server } from "../../mocks/server";
import Configuration from "../Configuration";

test("Gestion des erreurs RAM et SSD", async () => {
  server.resetHandlers(
    rest.get("http://localhost:3030/ram", (req, res, ctx) => {
      return res(ctx.status(500));
    }),
    rest.get("http://localhost:3030/ssd", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<Configuration />);

  // Bootstrap Alert
  // FIND
  //   const alerts = await screen.findAllByRole("alert");
  //   expect(alerts).toHaveLength(2);

  //   const alerts = await screen.findAllByText("Nous avons une erreur");
  //   expect(alerts).toHaveLength(2);

  // Situation 1
  //screen.debug();

  await waitFor(async () => {
    const alerts = await screen.findAllByRole("alert");
    expect(alerts).toHaveLength(2);
  });

  // Situation 2
  //screen.debug();
});
