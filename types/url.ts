export function url(t: { base: string, path?: string, query?: Record<string, string>[] }) {
    let e = ""
    if ((t.base && ((e += t.base), t.base.endsWith("/") || (e += "/")), t.path && (t.path.startsWith("/") ? (e += t.path.substring(1)) : (e += t.path), t.path.endsWith("/") && (e = e.substring(0, e.length - 1))), t.query)) {
        for (let s of ((e += "?"), t.query)) {
            let n = Object.entries(s)[0];
            "" !== n[1] && (e += n[0] + "=" + n[1] + "&");
        }
        e = e.substring(0, e.length - 1);
    }
    return e
}