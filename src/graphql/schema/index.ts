import { buildSubgraphSchema } from "@apollo/subgraph";
import {
    billingResolvers,
} from "../resolvers";
import {
    billingTypeDefs,
} from "../typeDefs";

export const schema = buildSubgraphSchema([
    { typeDefs: billingTypeDefs, resolvers: billingResolvers },
]);
