type storeType = object | string;

export const storage = {
  set(key: string, value: storeType) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  get(key: string) {
    const storedItem = localStorage.getItem(key);
    console.log(storedItem);
    return this.exists(key) && storedItem ? JSON.parse(storedItem) : null;
  },

  remove(key: string) {
    localStorage.removeItem(key);
  },

  exists(key: string) {
    return !!localStorage.getItem(key);
  },

  clear() {
    Object.keys(localStorage).forEach((el) => {
      localStorage.removeItem(el);
    });
  },
};
