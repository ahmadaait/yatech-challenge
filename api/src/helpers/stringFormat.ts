export function FormatString(str: string, ...val: string[]) {
    for (let index = 0; index < val.length; index++) {
        str = str.replace(`{${index}}`, val[index]);
    }
    return str;
}

// Example Usage
// FormatString("{0} is {1} {2}", "This", "formatting", "hack");