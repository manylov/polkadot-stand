import { ApiPromise, WsProvider } from '@polkadot/api'

const start = async () => {
  const wsProvider = new WsProvider('wss://polkadot.api.onfinality.io/public-ws')
  const polkadotApi = await ApiPromise.create({ provider: wsProvider })

  const blockHash = '0xc8530e73c00ec4a64d949b5756ad173114a1850ee42ad9c964fad620114b492f'

  // const histApi = await polkadotApi.at('0xc8530e73c00ec4a64d949b5756ad173114a1850ee42ad9c964fad620114b492f')

  const acc = await polkadotApi.rpc.chain.getBlock()

  console.log(acc.toHuman())
}

try {
  start().catch((error) => console.log('catch error', error))
} catch (error) {
  console.log('error:', error)
}
