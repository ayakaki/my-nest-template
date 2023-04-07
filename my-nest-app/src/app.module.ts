import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user.module';
import { join } from 'path';
import { TypeOrmConfigService } from './config/orm/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`src/config/envs/.env.${process.env.NODE_ENV}`],
      load: [],
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      context: ({ req }) => ({ req }),
      installSubscriptionHandlers: true,
    }),
    UserModule,
    TypeOrmModule.forRootAsync(TypeOrmConfigService),
  ],
})

export class AppModule {}
