import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [ConfigModule.forRoot(
    {
      envFilePath:'.env'
    }
  ),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    UserModule,
    ProductModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
