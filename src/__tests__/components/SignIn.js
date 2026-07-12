import {
    render,
    screen,
    fireEvent,
    waitFor,
} from "@testing-library/react-native";
import { MemoryRouter } from "react-router-native";
import { SignInContainer } from "../../components/Signin";

describe("SignIn", () => {
    describe("SignInContainer", () => {
        let signIn;
        let onSubmit;

        beforeEach(async () => {
            signIn = jest.fn();
            onSubmit = jest.fn();

            await render(
                <MemoryRouter>
                    <SignInContainer
                        signInError={null}
                        setSignInError={() => {}}
                        signIn={signIn}
                        navigate={() => { }}
                        onSubmit={onSubmit}
                    />
                </MemoryRouter>,
            );
        });

        it("renders the sign in page", () => {
            expect(screen.getByText("Sign in")).toBeDefined();
        });

        it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
            await fireEvent.changeText(
                screen.getByPlaceholderText("Username"),
                "kalle",
            );
            await fireEvent.changeText(
                screen.getByPlaceholderText("Password"),
                "password",
            );
            await fireEvent.press(screen.getByText("Sign in"));

            await waitFor(() => {
                expect(onSubmit).toHaveBeenCalledTimes(1);
            });

            expect(onSubmit.mock.calls[0][0]).toEqual({
                username: "kalle",
                password: "password",
            });
        });
    });
});
