export function hitTemplate(hit) {
    return `
      <div>
        <article>
          <div class="post-img">
            <a href="${hit.url}">
            ${hit._highlightResult.hierarchicalCategories.lvl0.value}
            </a>
          </div>
            <div class="post-excerpt">
              <p><strong>${hit._highlightResult.name.value}</strong><p>
              <p>${hit._highlightResult.description.value}</p>
            </div>
          </div>
        </article>
      </div>`;
  }