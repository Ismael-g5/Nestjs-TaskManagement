import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './DTO/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signUp')
  signUp(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signIn')
  signIn(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accesToken: string }> {
    return this.authService.signIn(authCredentialsDto);
  }
}
