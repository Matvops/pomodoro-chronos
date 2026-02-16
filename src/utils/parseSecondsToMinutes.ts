export function parseSecondsToMinutes(seconds: number) {

    const minutes = Math.floor(seconds / 60);

    const minutesStr = new String(minutes).padStart(2, '0');

    const secondsStr = new String(seconds % 60).padStart(2, '0');

    return `${minutesStr}:${secondsStr}`;
}