import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';

/*@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }*/

  @Controller()
  export class AppController {
    getHello(): any {
      throw new Error('Method not implemented.');
    }
    constructor(private authService: AuthService) {}
  
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req){
      return this.authService.login(req.user);
    }
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }
  }
