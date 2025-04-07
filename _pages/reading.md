---
layout: page
title: Reading
permalink: /reading/
order: 1
show: false
isMainPage:
---

<span style="color: #757575;">A selection of books I've read that I found helpful and would like to share on my website.</span>

<div id="books-list">
    <!-- The list of books will be rendered here -->
</div>

<script>
    // Load book data from books.json
    fetch('/assets/data/books.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(books => {
        const container = document.getElementById('books-list');

        // Group books by year and sort by year (ascending)
        const booksByYear = books.reduce((acc, book) => {
          if (!acc[book.year]) {
            acc[book.year] = [];
          }
          acc[book.year].push(book);
          return acc;
        }, {});

        const sortedYears = Object.keys(booksByYear).sort((a, b) => b - a); // Sort descending by year

        // Render books grouped by year in a table
        sortedYears.forEach(year => {
          const yearSection = document.createElement('section');
          yearSection.innerHTML = `
            <header class="title-row flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <h1 class="text-2xl font-semibold text-gray-800" id="${year}">${year}</h1>
                <p class="text-sm text-gray-500">${booksByYear[year].filter(book => book.status === 'Finished').length} / ${booksByYear[year].length} books finished</p>
            </header>
            <div class="overflow-x-auto bg-white shadow rounded-xl">
            <table class="min-w-full text-left text-sm text-gray-700">
                <thead class="bg-gray-100 border-b text-gray-600">
                    <tr>
                        <th scope="column" class="px-4 py-3 font-medium">Title</th>
                        <th scope="column" class="px-4 py-3 font-medium">Author</th>
                        <th scope="column" class="hide-mobile px-4 py-3 font-medium hidden md:table-cell"><span class="visually-hidden sr-only">My review</span></th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            </div>
          `;

          const tableBody = yearSection.querySelector('tbody');

          booksByYear[year].forEach(book => {
            const bookRow = document.createElement('tr');
            bookRow.classList.add('h-entry', 'border-b', 'hover:bg-gray-50', 'transition');
            bookRow.innerHTML = `
              <th scope="row" class="px-4 py-3">
                  <a href="${book.link || '#'}" class="p-name u-url u-uid text-blue-600 font-medium hover:underline" target="_blank">${book.title}</a><br>
                  <span class="hide-large f6">
                      <span class="BookStatus-${book.status.replace(/\s+/g, '')}">${book.status}</span>
                  </span>
              </th>
              <td class="px-4 py-3">${book.author}</td>
              <td class="f6 no-wrap hide-mobile px-4 py-3 text-xs text-amber-600 hidden md:table-cell">
                  <span class="BookStatus-${book.review.replace(/\s+/g, '')}">${book.review}</span>
              </td>
            `;
            tableBody.appendChild(bookRow);    });

          container.appendChild(yearSection);
        });
      })
      .catch(error => console.error('Error loading book data:', error));
</script>