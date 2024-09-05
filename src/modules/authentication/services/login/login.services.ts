import blogClient from "../../../../api/blogClient";
import { LoginAttemptPayload } from "./login.requests";
import { LoginAttemptResponse } from "./login.responses";

const attemptLoginService = async (payload: LoginAttemptPayload) => {
    const response = await blogClient.post<LoginAttemptResponse>("/auth/login", payload);
    console.log(response);
    return response;
};

export { attemptLoginService };