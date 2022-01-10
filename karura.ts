import { ApiPromise, WsProvider } from '@polkadot/api'

import { options } from '@acala-network/api'

const start = async () => {
  const provider = new WsProvider('wss://karura.api.onfinality.io/public-ws')

  //@ts-ignore
  const api = new ApiPromise(options({ provider }))
  await api.isReady

  console.log('ready')

  const blockHash = '0xa6817903a035741d228fa645036e6d2d6bc53bffdac8b2e92968d755c2698834'
  const block = await api.rpc.chain.getBlock(blockHash)

  const extrinsic = block.block.extrinsics[2]

  console.log(extrinsic.toHuman())
}

try {
  start().catch((error) => console.log('catch error', error))
} catch (error) {
  console.log('error:', error)
}
