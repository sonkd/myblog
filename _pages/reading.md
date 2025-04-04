---
layout: page
title: Reading
permalink: /reading/
order: 1
show: false
isMainPage:
---

A selection of books I've read that I found helpful and would like to share on my website.

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
            <header class="title-row">
                <h1 class="" id="${year}">${year}</h1>
                <p class="">${booksByYear[year].filter(book => book.status === 'Finished').length} / ${booksByYear[year].length} books finished</p>
            </header>
            <table>
                <thead>
                    <tr>
                        <th scope="column">Title</th>
                        <th scope="column">Author</th>
                        <th scope="column" class="hide-mobile"><span class="visually-hidden">Status</span></th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
          `;

          const tableBody = yearSection.querySelector('tbody');

          booksByYear[year].forEach(book => {
            const bookRow = document.createElement('tr');
            bookRow.classList.add('h-entry');
            bookRow.innerHTML = `
              <th scope="row">
                  <a href="${book.link || '#'}" class="p-name u-url u-uid" target="_blank">${book.title}</a><br>
                  <span class="hide-large f6">
                      <span class="BookStatus-${book.status.replace(/\s+/g, '')}">${book.status}</span>
                  </span>
              </th>
              <td>${book.author}</td>
              <td class="f6 no-wrap hide-mobile">
                  <span class="BookStatus-${book.status.replace(/\s+/g, '')}">${book.status}</span>
              </td>
            `;
            tableBody.appendChild(bookRow);
          });

          container.appendChild(yearSection);
        });
      })
      .catch(error => console.error('Error loading book data:', error));
</script>
