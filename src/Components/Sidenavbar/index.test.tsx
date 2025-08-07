import { render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Layout from "../../Hocs/Layout";
import Home from "../Home";
import Trending from "../Trending";
import Gaming from "../Gaming";
import SavedVideos from "../SavedVideos";

const renderWithRoutes = () =>
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/trending"
          element={
            <Layout>
              <Trending />
            </Layout>
          }
        />
        <Route
          path="/gaming"
          element={
            <Layout>
              <Gaming />
            </Layout>
          }
        />
        <Route
          path="/saved"
          element={
            <Layout>
              <SavedVideos />
            </Layout>
          }
        />
      </Routes>
    </MemoryRouter>
  );

describe("sidenavbar", () => {
  test("to have mandatory routes", () => {
    renderWithRoutes();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Trending")).toBeInTheDocument();
    expect(screen.getByText("Gaming")).toBeInTheDocument();
    expect(screen.getByText("Saved Videos")).toBeInTheDocument();
  });
  test("to check navigation to home", async () => {
    renderWithRoutes();
    await userEvent.click(screen.getByText("Home"));
    expect(screen.getByTestId(/searchbutton/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
  test("to check navigation to trending", async () => {
    renderWithRoutes();
    await userEvent.click(screen.getByText("Trending"));
    expect(screen.getByTestId("Routewrapper")).toBeInTheDocument();
    expect(
      within(screen.getByTestId("trending")).getByText("Trending")
    ).toBeInTheDocument();
  });
  test("to check navigation to gaming", async () => {
    renderWithRoutes();
    await userEvent.click(screen.getByText("Gaming"));
    expect(screen.getByTestId("Routewrapper")).toBeInTheDocument();
    expect(
      within(screen.getByTestId("gaming")).getByText("Gaming")
    ).toBeInTheDocument();
  });
  test("to check navigation to savedVideos", async () => {
    renderWithRoutes();
    await userEvent.click(screen.getByText("Saved Videos"));
    expect(screen.getByTestId("Routewrapper")).toBeInTheDocument();
    expect(
      within(screen.getByTestId("saved")).getByText("Saved Videos")
    ).toBeInTheDocument();
  });
});
