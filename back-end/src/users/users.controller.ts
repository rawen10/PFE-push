import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { ApiBearerAuth, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';

@Controller('users')
@ApiTags('users') //bich ta3tih el essm fel swagegr 
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signUp')
  create(@Body() createUsersDto: CreateUsersDto) {
    return this.usersService.create(createUsersDto);
  }

  @Roles('ADMIN') // Only ADMIN can access this endpoint
  @Get("")
  @ApiSecurity('apiKey') //logo cadna
  @UseGuards(JwtAuthGuard,RolesGuard) //d'après ton role t'as accés ou pas
  // @ApiBearerAuth() //logo cadna to indicate that authentication is required:
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiSecurity('apiKey')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
