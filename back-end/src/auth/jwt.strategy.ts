import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';
import jwtDecode from 'jwt-decode'; // Import jwt-decode library


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'sfectoria',
    });
  }

  async validate(payload: { id: number }) {
    console.log(payload);
    
    const user = await this.usersService.findOne(payload.id);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }

    // New decode function to get user information
   
}