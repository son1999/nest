import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import UserEntity from '../users/entity/user.entity';
 
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authenticationService: AuthenticationService) {
    super({
      usernameField: 'email'
    });
  }
  async validate(email: string, password: string): Promise<UserEntity> {
    return this.authenticationService.getAuthenticatedUser(email, password);
  }
}