

enum GameMode {
    Survival = 0,
    Creative = 1,
    Adventure = 2,
    Spectator = 6
}
export class XYPlayer {
    player: Player;
    constructor(player: Player) {
        this.player = player;
    }

    /** 设置游戏模式 */
    setGameMode(GameMode: GameMode) {
        this.player.setGameMode(GameMode);
    }
}

