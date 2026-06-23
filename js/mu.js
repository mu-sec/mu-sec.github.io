(function () {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('mu-theme');
  if (savedTheme) root.dataset.theme = savedTheme;

  document.querySelectorAll('.js-theme-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      localStorage.setItem('mu-theme', next);
    });
  });

  const article = document.querySelector('.js-article-content');
  const toc = document.querySelector('.js-toc');
  if (article && toc) {
    const headings = Array.from(article.querySelectorAll('h2, h3'));
    if (!headings.length) {
      toc.closest('.toc-box').hidden = true;
    } else {
      headings.forEach((heading, index) => {
        if (!heading.id) heading.id = `section-${index + 1}`;
        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent.replace('#', '').trim();
        link.className = heading.tagName === 'H3' ? 'toc-child' : '';
        toc.appendChild(link);
      });
    }
  }

  const searchInput = document.querySelector('.js-search');
  const searchResults = document.querySelector('.js-search-results');
  let searchData = null;

  function normalize(value) {
    return (value || '').toString().toLowerCase();
  }

  function renderResults(query) {
    if (!searchResults || !searchData) return;
    const q = normalize(query).trim();
    searchResults.innerHTML = '';
    if (!q) {
      searchResults.hidden = true;
      return;
    }

    const hits = searchData.posts
      .map((post) => {
        const haystack = normalize(`${post.title} ${post.text} ${(post.tags || []).map((tag) => tag.name).join(' ')}`);
        return { post, score: haystack.includes(q) ? q.length / Math.max(haystack.length, 1) : 0 };
      })
      .filter((item) => item.score > 0)
      .slice(0, 6);

    if (!hits.length) {
      searchResults.innerHTML = '<p>No matching notes.</p>';
      searchResults.hidden = false;
      return;
    }

    const list = document.createElement('div');
    hits.forEach(({ post }) => {
      const item = document.createElement('a');
      item.href = `/${post.path}`;
      const title = document.createElement('strong');
      const excerpt = document.createElement('span');
      title.textContent = post.title;
      excerpt.textContent = `${(post.text || '').slice(0, 96)}...`;
      item.append(title, excerpt);
      list.appendChild(item);
    });
    searchResults.appendChild(list);
    searchResults.hidden = false;
  }

  if (searchInput && searchResults) {
    fetch('/content.json')
      .then((response) => response.json())
      .then((data) => {
        searchData = data;
      })
      .catch(() => {
        searchInput.disabled = true;
        searchInput.placeholder = 'Search unavailable';
      });

    searchInput.addEventListener('input', (event) => renderResults(event.target.value));
  }
})();
