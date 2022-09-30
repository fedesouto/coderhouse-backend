import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from '@nestjs/platform-express'
import { join } from 'path';
import * as session from 'express-session'
import * as cookieParser from 'cookie-parser'
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(cookieParser())
  app.use(session({
      secret: 'secreto',
      saveUninitialized: false,
      resave: false,
      rolling: true,
      cookie: {
        maxAge: 60000,
      },
  }))
  app.use(passport.initialize())
  app.use(passport.session())
  
  app.useStaticAssets(join(__dirname, '..', 'client'))

  
  await app.listen(3000);
}
bootstrap();
