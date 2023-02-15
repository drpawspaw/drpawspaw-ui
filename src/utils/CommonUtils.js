export const truncate = (keyword, limit) => {
    if (keyword.length <= limit) {
        return keyword
    }
    return keyword.slice(0, limit-3)+"..."
}