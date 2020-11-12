const ValidateUrl = (url: string): boolean => {
    try {
        new URL(url);
    } catch (_) {
        return false;
    }
    return true;
}

export default ValidateUrl;