import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from '@database/database.module';
import { Providers } from '@database/RepositoryTypeOrm';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService,...Providers],
})
export class AppModule {}
