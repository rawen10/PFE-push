import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PrismaModule, PassportModule, JwtModule.register({
    secret:'sfectoria',
    signOptions:{expiresIn:'60m'},
   }),
   UsersModule
  ],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy,UsersService],
})
export class AuthModule {}
