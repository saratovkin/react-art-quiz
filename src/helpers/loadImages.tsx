const loadImage = (url: string) => {
  return new Promise((resolve, reject) => {
    const loadImg = new Image();
    loadImg.src = url;
    loadImg.onload = () => resolve(url);
    loadImg.onerror = (err) => reject(err);
  });
};

export const loadImages = (urls: string[], callBack: () => void) => {
  Promise.all(urls.map((u) => loadImage(u)))
    .then(callBack)
    .catch((err) => console.log('Failed to load images', err));
};
