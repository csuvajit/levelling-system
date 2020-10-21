const levelsXP = new Array(250).fill(0).map((_, i) => (5 * (i ** 2)) + (50 * i) + 100);

class Ranking {
    public level(totalXP: number | 0) {
        const { level, restXP } = this.getLevel(totalXP);
        const nextXP = this.nextXP(level);

        return { level, restXP, nextXP };
    }

    private nextXP(level: number | 0) {
        return Math.floor((5 * (level ** 2)) + (50 * level) + 100);
    }

    private getLevel(xp: number | 0) {
        let restXP = Math.floor(xp);
        let level = 0;
        while (restXP >= levelsXP[level]) {
            restXP -= levelsXP[level];
            level += 1;
        }

        return { level, restXP };
    }

    public random(min: number | 15, max: number | 25) {
        return Math.floor((Math.random() * (max - min)) + min);
    }
}
