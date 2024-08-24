import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { RecipeModule } from './recipe/recipe.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Module({
  imports: [
    RecipeModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      include: [RecipeModule],
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
