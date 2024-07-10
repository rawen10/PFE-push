import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { extname } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { diskStorage } from 'multer';
import { PythonShell } from 'python-shell';
import { promisify } from 'util';
import * as net from 'net';

const multerConfig = {
  dest: 'upload',
};

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('server')
  async executePython() {
    const options = {
      scriptPath: 'C:/Users/user/Desktop/Challenge/back-end', // Replace this with the path to your Python script
      // Arguments to pass to the Python script's function
    };

    // Check if the server is already running
    const isServerRunning = await this.isPortInUse(8080);
    if (isServerRunning) {
      console.log('Server is already running'); 
      return 'Server is already running';
    } else {
      PythonShell.run('server.py', options);
      return 'done';
    }
  }

  // Function to check if a port is in use
  async isPortInUse(port: number): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      const server = net.createServer();
      server.once('error', (err: NodeJS.ErrnoException) => {
        if (err.code === 'EADDRINUSE') {
          resolve(true);
        } else {
          resolve(false);
        }
      });
      server.once('listening', () => {
        server.close();
        resolve(false);
      });
      server.listen(port);
    });
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: (req: any, file: any, cb: any) => {
          const uploadPath = multerConfig.dest;
          // Create folder if doesn't exist
          if (!existsSync(uploadPath)) {
            mkdirSync(uploadPath);
            console.log('mkdir upload');
          }
          cb(null, uploadPath);
        },
        filename: (req: any, file: any, cb: any) => {
          // Generating a 32 random chars long string
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          // Calling the callback passing the random name generated with
          // the original extension name
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() dto: any) {
    console.log(file, 'file');
    const data = {
      description: dto.description,
      alt: dto.alt,
      extension: file.filename.split('.')[1],
      type: file.mimetype,
      path: 'http://localhost:3000/' + 'upload/' + file.filename,
    };
    return data;
  }
}
