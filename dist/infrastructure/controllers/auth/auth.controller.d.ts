import { LoginUseCase } from 'src/usecases/auth/login.usecase';
export declare class AuthController {
    private readonly loginUseCase;
    constructor(loginUseCase: LoginUseCase);
    signIn(signInDto: Record<string, any>): Promise<{
        access_token: string;
    }>;
}
