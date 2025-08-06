process.on("unhandledRejection", (reason) => {
  console.error("UNHANDLED REJECTION DETECTED:", reason);
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginPage from ".";
import { MemoryRouter } from "react-router-dom";
import { loginStore } from "../../Stores/LoginStore/loginstore";
import { vi } from "vitest";

beforeEach(() => {
  loginStore.username = "";
  loginStore.error = "";
  loginStore.showPassword = false;
});
afterEach(() => {
  vi.restoreAllMocks();
});

describe("LoginPage", () => {
  test("renders login form elements initailly", () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    const usernameElement = screen.getByPlaceholderText("Username");
    const passwordElement = screen.getByPlaceholderText("Password");
    const checkboxElement = screen.getByLabelText(/Show Password/i);
    const loginButton = screen.getByRole("button", { name: /login/i });

    expect(usernameElement).toBeInTheDocument();
    expect(passwordElement).toBeInTheDocument();
    expect(checkboxElement).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  test("toggle showpassword ", async () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    const checkboxElement = screen.getByLabelText(/Show Password/i);
    const passwordElement = screen.getByPlaceholderText("Password");

    expect(passwordElement).toHaveAttribute("type", "password");
    expect(loginStore.showPassword).toBe(false);

    await userEvent.click(checkboxElement);

    expect(passwordElement).toHaveAttribute("type", "text");
    expect(loginStore.showPassword).toBe(true);
  });

  test("input states are in sync", async () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    const usernameElement = screen.getByPlaceholderText("Username");
    const passwordElement = screen.getByPlaceholderText("Password");

    await userEvent.type(usernameElement, "abc");
    await userEvent.type(passwordElement, "123");

    expect(usernameElement).toHaveValue("abc");
    expect(passwordElement).toHaveValue("123");
  });

  test("success case", async () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    const mockLogin = vi.spyOn(loginStore, "login").mockImplementation(() => {
      return Promise.resolve();
    });

    const usernameElement = screen.getByPlaceholderText("Username");
    const passwordElement = screen.getByPlaceholderText("Password");

    await userEvent.type(usernameElement, "abc");
    await userEvent.type(passwordElement, "123");

    const loginButton = screen.getByRole("button", { name: /login/i });

    await userEvent.click(loginButton);
    expect(mockLogin).toHaveBeenCalledWith("abc", "123");
    expect(loginStore.error).toBe("");
  });

  test("failure case", async () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    const mockLogin = vi.spyOn(loginStore, "login").mockImplementation(() => {
      loginStore.error = "Invalid username";
      return Promise.reject();
    });

    const usernameElement = screen.getByPlaceholderText("Username");
    const passwordElement = screen.getByPlaceholderText("Password");

    await userEvent.type(usernameElement, "abc");
    await userEvent.type(passwordElement, "123");

    const loginButton = screen.getByRole("button", { name: /login/i });
    await userEvent.click(loginButton);

    const errorElement = await screen.findByTestId("errorMsg");

    expect(mockLogin).toHaveBeenCalledWith("abc", "123");
    expect(loginStore.error).not.toBe("");
    expect(errorElement).toBeInTheDocument();
  });
});
