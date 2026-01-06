export function formatSecondsToMinutes(secondes: number) {
    const minutes = String(Math.floor(secondes / 60)).padStart(2, '0');
    const seconds = String(Math.floor(secondes % 60)).padStart(2, '0');
    return `${minutes}:${seconds}`;
}