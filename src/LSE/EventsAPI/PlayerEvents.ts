
export class PlayerEvents {
    constructor() { };
    /**
     * 玩家开始连接服务器
     * @param CallBack 回调函数
     */
    static PreJoinEvent(CallBack:
        /**
         * @param Player 开始连接服务器的玩家
         */
        (Player: Player) => boolean) {
        mc.listen("onPreJoin", CallBack)
    }

    /**
     * 玩家进入游戏（加载世界完成）
     * @param CallBack 回调函数
     */
    static JoinEvent(CallBack:
        /** 
         * @param Player 进入游戏的玩家对象
         * @returns 不可拦截
         */
        (Player: Player) => void) {
        mc.listen("onJoin", CallBack)
    }

    /**
     * 玩家离开游戏
     * @param CallBack 回调函数
     */
    static LeftEvent(CallBack:
        /**
         * @param Player 离开游戏的玩家对象
         * @returns 不可拦截
         */
        (Player: Player) => void) {
        mc.listen("onLeft", CallBack)
    }

    /**
     * 玩家重生
     * @param CallBack 回调
     */
    static RespawnEvent(CallBack:
        /**
         * @param Player 重生的玩家对象
         */
        (Player: Player) => void) {
        
    }
}

