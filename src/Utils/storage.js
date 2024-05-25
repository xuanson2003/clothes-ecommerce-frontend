const STORAGE_KEY = 'auth-token';

const storage = {
    get() {
        return localStorage.getItem(STORAGE_KEY) || '';
    },
    set(value) {
        localStorage.setItem(STORAGE_KEY, value);
    },
    remove() {
        localStorage.removeItem(STORAGE_KEY);
    },
};

export default storage;
