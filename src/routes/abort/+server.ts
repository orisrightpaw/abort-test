export function GET({ request }) {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            resolve(new Response("OK"));
        }, 3 * 1000);

        request.signal.onabort = () => {
            clearTimeout(timeout);
            console.log("Client aborted before server could respond!");
        };
    });
}
