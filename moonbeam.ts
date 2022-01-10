import { ApiPromise, WsProvider } from '@polkadot/api'
import { typesBundlePre900 } from 'moonbeam-types-bundle'

const main = async () => {
  const api = await ApiPromise.create({
    provider: new WsProvider('wss://wss.moonriver.moonbeam.network'),
    //@ts-ignore
    typesBundle: typesBundlePre900
  })

  // Block 427542
  const block = await api.rpc.chain.getBlock('0x9caa779d514cac6d60e51797f88f05a2d5cb839bb6695f039e0810cf21c7b046')

  console.log(block.toHuman())
}

main()
