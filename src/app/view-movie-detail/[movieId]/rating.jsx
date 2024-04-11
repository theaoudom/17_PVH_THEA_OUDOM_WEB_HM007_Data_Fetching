export function rating(a) {
    let b = Math.round(a); 
    let result = ''; 

    for (let i = 0; i < b; i++) {
        result += '⭐'; 
    }

    return result; 
}