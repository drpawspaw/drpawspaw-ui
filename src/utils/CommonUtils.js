export const truncate = (keyword, limit) => {
    if (keyword?.length <= limit) {
        return keyword
    }
    return keyword?.slice(0, limit-3)+"..." ?? keyword
}

export const capitalize = (string) => {
    return string?.charAt(0)?.toUpperCase() + string?.slice(1) ?? string;
}