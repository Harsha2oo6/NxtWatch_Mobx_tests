import { render, screen, waitFor } from "@testing-library/react";
import Header from ".";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ThemeStore } from "../../Stores/ThemeStore/themeStore";
import userEvent from "@testing-library/user-event";
import Layout from "../../Hocs/Layout";
import Home from "../Home";
import LoginPage from "../LoginPage";

beforeEach(() => {
  localStorage.setItem("theme", "dark");
});
describe("header", () => {
  test("to check all the required elements in the ui", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const themeToggler = screen.getByTestId("themeToggler");

    expect(screen.getByAltText("header-logo")).toBeInTheDocument();
    expect(screen.getByAltText("profile")).toBeInTheDocument();
    expect(themeToggler).toBeInTheDocument();
    expect(screen.getByTestId("logoutbtn")).toBeInTheDocument();
    expect(screen.getByTestId("menuPopup")).not.toBeDisabled();
  });
  test("to check theme and its toggle functionality", async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const themeToggler = screen.getByTestId("themeToggler");
    const testStore = new ThemeStore();

    expect(testStore.theme).toBe("dark");

    await userEvent.click(themeToggler);
    expect(localStorage.getItem("theme")).toBe(testStore.theme);
  });
  test("should redirect to login page after confirming logout", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
        </Routes>
      </MemoryRouter>
    );

    const logoutBtn = screen.getByTestId("logoutbtn");
    await userEvent.click(logoutBtn);
    expect(screen.getByTestId("logoutpopup")).toBeInTheDocument();

    const confirmBtn = screen.getByText("Confirm");
    await userEvent.click(confirmBtn);

    await waitFor(() => {
      expect(screen.getByText(/login/i)).toBeInTheDocument();
      expect(screen.queryByTestId("Header")).not.toBeInTheDocument();
    });
  });
  test("to check logout cancelling functioality", async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const logoutBtn = screen.getByTestId("logoutbtn");
    await userEvent.click(logoutBtn);
    expect(screen.getByTestId("logoutpopup")).toBeInTheDocument();
    const cancelbtn = screen.getByText("Cancel");
    const conformBtn = screen.getByText("Confirm");
    expect(conformBtn).toBeInTheDocument();
    await userEvent.click(cancelbtn);
    expect(screen.getByAltText("header-logo")).toBeInTheDocument();
  });
});
