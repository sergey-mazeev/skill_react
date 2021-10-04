const dictionary = {
    hours: {
        1: "час",
        2: "часа",
        3: "часа",
        4: "часа",
        21: "час",
        22: "часа",
        23: "часа"
    },
    minutes: {
        1: "минуту",
        2: "минуты",
        3: "минуты",
        4: "минуты",
        21: "минуту",
        22: "минуты",
        23: "минуты",
        24: "минуты"
    }
};

export default (time: string) => {
    const postDate: Date = new Date(time);
    if (postDate.toString() === "Invalid Date") {
        return "";
    }
    const now: Date = new Date();

    const diff: number = now.getTime() - postDate.getTime();

    if (diff < 0) {
        return postDate.toLocaleDateString();
    }

    const diffSeconds = Math.floor(diff / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);

    if (diffMinutes < 30) {
        // @ts-ignore
        const dictWord = dictionary.minutes[diffMinutes] ? dictionary.minutes[diffMinutes] : "минут";
        return `${diffMinutes} ${dictWord} назад`;
    }

    if (diffMinutes < 60) {
        return `Менее часа назад`;
    }

    const diffHours = Math.floor(diffMinutes / 60);

    if (diffHours < 24) {
        // @ts-ignore
        const dictWord = dictionary.hours[diffHours] ? dictionary.hours[diffHours] : "часов";
        return `${diffHours} ${dictWord} назад`;
    }

    return postDate.toLocaleDateString();
};
