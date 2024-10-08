import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { RecipeModule } from './modules/recipe/recipe.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { APIModule } from './common/api/api.module';
import { DataloaderModule } from './common/dataloader/dataloader.module';
import { DataloaderService } from './common/dataloader/dataloader.service';
import { PubSub } from 'graphql-subscriptions';
import { MockControllerModule } from './service-mock/service-mock.module';

export const pubSub = new PubSub();

@Module({
  imports: [
    APIModule,
    RecipeModule,
    MockControllerModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [DataloaderModule],
      useFactory: (dataloaderService: DataloaderService) => ({
        include: [RecipeModule],
        context: () => {
          return {
            traceId: '1234',
            pubSub,
            loaders: dataloaderService.getLoaders(),
          };
        },
        playground: false,
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        subscriptions: {
          'graphql-ws': true,
        },
      }),
      inject: [DataloaderService],
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
