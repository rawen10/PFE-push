import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(dto: CreateAuthDto) {
    // Step 1: Fetch a user with the given email
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    // If no user is found, throw an error
    if (!user) {
      throw new HttpException('Invalid email', HttpStatus.BAD_REQUEST);
    }

    // Step 2: Check if the password is correct
    const validPassword = await bcrypt.compare(dto.password, user.password);
    // If password does not match, throw an error
    if (!validPassword) {
      throw new HttpException('Invalid password', HttpStatus.BAD_REQUEST);
    }

    // Step 3: Generate a JWT and return it
    const { password, ...rest } = user;
    const token = await this.jwtService.signAsync(rest);
    return token;
  }
  validateToken(token: string) {
    try {
      // Décode et valide le jeton
      const decoded = this.jwtService.verify(token);
      return { status: 'valid', user: decoded };
    } catch (error) {
      // Le jeton n'est pas valide
      throw new UnauthorizedException('Token invalide');
    }
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }
  async findMe(token: string) {
    return await this.jwtService.decode(token);
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
