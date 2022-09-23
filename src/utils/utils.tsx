function FavouritesKey() {
    const user = JSON.parse(localStorage.getItem('current_user') as string);
    if (user) {
        return 'rfk' + user.email;
    }
    return ''
}

function HistoryKey() {
    const user = JSON.parse(localStorage.getItem('current_user') as string);
    if (user) {
        return 'hk' + user.email;
    }
    return '';
}

export const RFK = FavouritesKey()
export const HK = HistoryKey()
