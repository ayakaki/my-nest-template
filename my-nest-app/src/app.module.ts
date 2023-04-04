import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatResolver } from './cat/cat.resolver';
import { CatService } from './cat/cat.service';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      context: ({ req }) => ({ req }),
      installSubscriptionHandlers: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, CatResolver, CatService],
})
export class AppModule {}
