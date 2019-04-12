import { OpskinsBase } from './lib/OpskinsBase'
import * as ICase from './models/ICaseTrade'
import * as IItem from './models/IItemTrade'
import * as IOAuth from './models/IOAuth'
import * as ITest from './models/ITest'
import * as ITestTrade from './models/ITestTrade'
import * as IUser from './models/IUser'

export { IOAuthClient, OAuthClient, TScope } from './lib/OAuthClient'

export class Opskins extends OpskinsBase {
  private _base: string = 'https://api.opskins.com/'

  ITest = ITest.getApi(this)
  IUser = IUser.getApi(this)
  IOAuth = IOAuth.getApi(this)
}

export class OpskinsTrade extends OpskinsBase {
  private _base: string = 'https://api-trade.opskins.com/'

  ICase = ICase.getApi(this)
  IItem = IItem.getApi(this)
  ITest = ITestTrade.getApi(this)
}
