"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    type: 'mysql',
    host: String(process.env.DB_HOST),
    port: Number(process.env.DB_PORT),
    username: String(process.env.DB_USERNAME),
    password: String(process.env.DB_PASSWORD),
    database: String(process.env.DB_DATABASE),
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false,
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map