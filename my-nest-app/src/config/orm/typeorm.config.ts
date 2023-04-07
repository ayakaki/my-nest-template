// typeorm.config.ts
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';

export const TypeOrmConfigService: TypeOrmModuleAsyncOptions = {

  useFactory: async (configService: ConfigService) => ({
    type: 'mysql',
    host: configService.get<string>('DB_HOST'),
    port: configService.get<number>('DB_PORT') || 3306,
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_NAME'),
    entities: [join(__dirname, '..', '..', '**', '*.entity.{ts,js}')],
    synchronize: true,
  }),
  inject: [ConfigService],
};
