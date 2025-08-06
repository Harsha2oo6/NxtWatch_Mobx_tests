import { render, screen } from "@testing-library/react";
import Header from ".";
import { MemoryRouter } from "react-router-dom";
import { ThemeStore } from "../../Stores/ThemeStore/themeStore";
import userEvent from "@testing-library/user-event";

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
  test("to check logout functioality", async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const logoutBtn = screen.getByTestId("logoutbtn");
    await userEvent.click(logoutBtn);
    expect(screen.getByTestId("logoutpopup")).toBeInTheDocument();
    const cancelbtn = screen.getByText("Cancel");
    await userEvent.click(cancelbtn);
  });
});
