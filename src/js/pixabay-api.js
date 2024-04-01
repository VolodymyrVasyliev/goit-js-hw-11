export function getPhoto(value) {
  const KEY = '43179971-31cef5ae97b630d4ee80eef54';
  const params = new URLSearchParams({
    key: KEY,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const bazeUrl = 'https://pixabay.com/api/';
  const url = `${bazeUrl}?${params}`;

  return fetch(url).then(res => res.json());
}
