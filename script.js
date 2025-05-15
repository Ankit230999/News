const apiKey = 'YOUR_NEWSAPI_KEY'; // Replace with your key
const newsContainer = document.getElementById('news-container');

async function fetchNews() {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`);
    const data = await response.json();

    if (data.articles) {
        data.articles.forEach(article => {
            const div = document.createElement('div');
            div.className = 'article';
            div.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description || ''}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            `;
            newsContainer.appendChild(div);
        });
    } else {
        newsContainer.innerHTML = '<p>No news available.</p>';
    }
}

fetchNews();