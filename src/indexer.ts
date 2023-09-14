import { base } from "viem/chains";
import { base as baseType } from "wagmi/chains";
import { HttpTransport, PublicClient, createPublicClient, http } from "viem";

export default class Indexer {
    // Base RPC client
    rpc: PublicClient<HttpTransport, typeof baseType>;

    constructor(rpcUrl: string) {
        this.rpc = createPublicClient({
            chain: base,
            transport: http(rpcUrl),
        });
    }

    async getLatestBaseBlock(): Promise<bigint> {
        return await this.rpc.getBlockNumber();
    }

    async sync() {
        console.log(await this.getLatestBaseBlock());
    }
}