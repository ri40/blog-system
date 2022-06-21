const title = document.getElementById('title');
const body = document.getElementById('body');
const api = "http://localhost:8080/api/v1/blog"
const getBlogFromServer = async () => {
  const urlParams = new URLSearchParams(location.search);
  const id = urlParams.get('id');

  const request = await fetch(api + id);

  const data = await request.json();

  title.innerText = data.title;
  body.value = data.body;
};

getBlogFromServer();