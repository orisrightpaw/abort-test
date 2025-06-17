let logs = new Set();

export function GET({ request }) {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            const logsArray = Array.from(logs);
            resolve(new Response(`OK\n${logsArray.join("\n")}`));
        }, 3 * 1000);

        request.signal.onabort = () => {
            clearTimeout(timeout);
            logs.add(`[${Date.now()}] Client aborted before server could respond!`);
        };
    });
}
