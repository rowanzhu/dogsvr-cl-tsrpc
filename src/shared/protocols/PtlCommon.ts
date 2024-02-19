import { MsgBodyType } from '../../../node_modules/dogsvr/message'

export interface ReqCommon {
    cmdId: number,
    innerReq: MsgBodyType
}

export interface ResCommon {
    cmdId: number,
    innerRes: MsgBodyType
}
