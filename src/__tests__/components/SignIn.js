import { render, screen, fireEvent } from "@testing-library/react-native";
import { MemoryRouter } from "react-router-native";
import { SignInContainer } from "../../components/Signin";

describe("Sign In Page Renders", () => {
    it("renders the sign in page", async () => {
        await render(
            <MemoryRouter>
                <SignInContainer
                    signInError={null}
                    setSignInError={() => {}}
                    signIn={() => {}}
                    navigate={() => {}}
                />
            </MemoryRouter>,
        );

        expect(screen.getByText("Sign in")).toBeDefined();
    });
});
