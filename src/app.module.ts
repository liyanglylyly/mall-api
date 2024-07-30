import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { dataSourceOptions } from './data-source';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './modules/user/entities/user.entity';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        `${process.cwd()}/.env`,
        `${process.cwd()}/.env.${process.env.NODE_ENV}`,
      ],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: configService.get('DB_TYPE'),
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
          synchronize: false,
          logging: true,
          entities: ['src/modules/**/entities/*.entity.ts'],
          poolSize: 10,
          migrations: ['src/migrations/**.ts'],
          connectorPackage: 'mysql2',
        } as TypeOrmModuleOptions;
      },
    }),

    // TypeOrmModule.forRoot(dataSourceOptions as TypeOrmModuleOptions),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
