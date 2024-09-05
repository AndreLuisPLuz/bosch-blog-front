import blogClient from "../../../../api/blogClient";
import { LoginAttemptPayload } from "./login.requests";
import { LoginAttemptResponse } from "./login.responses";

const attemptLoginService = async (payload: LoginAttemptPayload): Promise<LoginAttemptResponse> => {
    const response = await blogClient.post("/auth/login", payload);
    return response.data;
};

export { attemptLoginService };