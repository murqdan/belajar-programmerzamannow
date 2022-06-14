{
  // encode uri dan decode uri
  const url = "http://contoh.com/?name=Eko Kurniawan Khannedy";
  console.log(url);

  const encoded = encodeURI(url);
  console.log(encode);

  const decoded = decodeURI(encoded);
  console.log(decoded);
}

{
  // encode uri dan encode uri
  const value = "Eko&Kurniawan=Khannedy";
  const url = "http://contoh.com/?name=";
  console.log(url + value);

  const encoded = encodeURIComponent(value);
  console.log(url + encoded);

  const decoded = decodeURIComponent(encoded);
  console.log(url + decoded);
}
