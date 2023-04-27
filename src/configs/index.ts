import * as dotenv from "dotenv";
import { EnvironmentEnum } from "../enums";
dotenv.config();

const mustExist = <T>(value: T | undefined, name: string): T => {
    if (!value) {
        console.log(`Missing Config: ${name} !!!`);
        process.exit(1);
    }
    return value;
};

export const configs = {
    node_env: mustExist(process.env.NODE_ENVIRONMENT || (EnvironmentEnum.development as EnvironmentEnum), "NODE_ENVIRONMENT"),
    port: mustExist(+process.env.PORT!, "PORT")
};
