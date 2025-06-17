import { logs } from "../lib/storage.server";

export function load() {
    const _ = Array.from(logs);
    return { logs: _ };
}
