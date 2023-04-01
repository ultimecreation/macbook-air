import { render } from "@testing-library/react";
import { MacBookProviders } from "./providers/MacBookProviders";

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: MacBookProviders, ...options });
export * from "@testing-library/react";
export { renderWithContext as render };
