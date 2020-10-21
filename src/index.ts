const levelsXp = new Array(250).fill(0).map((_, i) => (5 * (i ** 2)) + (50 * i) + 100);

class Ranking {
    public level(xp: number | 0) {
        const { level, restXp } = this.getLevel(xp);
        const nextXP = this.nextXP(level);

        return { level, restXp, nextXP };
    }

    private nextXP(level: number | 0) {
        return Math.floor((5 * (level ** 2)) + (50 * level) + 100);
    }

    private getLevel(xp: number | 0) {
        let restXp = Math.floor(xp);
        let level = 0;
        while (restXp >= levelsXp[level]) {
            restXp -= levelsXp[level];
            level += 1;
        }

        return { level, restXp };
    }

    public random(min: number | 15, max: number | 25) {
        return Math.floor(Math.random() * (max - min)) + Math.floor(min);
    }
}

console.log(new Ranking().level(155));