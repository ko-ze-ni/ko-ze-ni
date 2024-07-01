import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  getUsers(): Promise<Array<User>> {
    console.log(process.env.DB_NAME, process.env.DB_PW, process.env.DB_USER);

    return this.userService.getUsers();
  }

  @Get('login/google')
  loginWithGoogle() {
    // const baseUrl = 'https://oauth2.googleapis.com/token';
    // const clientID = '28587636699-72sjlj9mge7v06gsjdmbal4ae49il2sg.apps.googleusercontent.com';
    // const clientPW
  }

  @Get('login/kakao')
  loginWithKakao() {}

  @Get('login/line')
  loginWithLine() {}

  @Get('login/instargram')
  loginWithInstargram() {}
}
