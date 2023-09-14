import Indexer from "./indexer";

function App() {
  const run = async () => {
    const rpcUrl: string | undefined = import.meta.env.VITE_RPC_URL;
    if (!rpcUrl) {
      throw new Error("missing env vars");
    }

    const indexer = new Indexer(rpcUrl);
    await indexer.sync();
  }

  try {
    run().then();
  } catch (e) {
    console.error(e);
  }

  return (
    <>
    </>
  )
}

export default App
