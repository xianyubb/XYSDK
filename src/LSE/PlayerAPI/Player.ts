import { GameMode } from "../../Enum/PlayerEnum";

export class XYPlayer extends Player {
    player: Player;

    constructor(player: Player) {
        super();
        this.player = player;
    }

    /** 设置游戏模式
     * @param gameMode 要设置的游戏模式
     * @return 是否设置成功
     */
    setGameMode(gameMode: GameMode) {
        return this.player.setGameMode(gameMode);
    }
}
