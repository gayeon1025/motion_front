type ContentHeaderType = {
    headers: {
        contentType: string;
    }
};

const headerConfig: ContentHeaderType = {
    headers: {
        contentType: "application/x-www-form-urlencoded; charset=UTF-8"
    }
}

export default headerConfig;