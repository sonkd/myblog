---
layout: page
title: Reading
permalink: /reading/
order: 
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
      <header class="title-row flex flex-row items-end justify-between">
        <h1 class="text-2xl font-semibold text-gray-800" id="${year}">${year}</h1>
        <p class="text-sm text-gray-500">${booksByYear[year].filter(book => book.status === 'Done').length} / ${booksByYear[year].length} books finished</p>
      </header>
      <div class="overflow-x-auto mb-4 bg-white shadow rounded-xl">
      <table class="w-full text-left text-sm text-gray-700">
        <thead class="bg-gray-100 border-b border-gray-300">
          <tr>
            <th scope="column" class="px-4 py-3 font-bold">Title</th>
            <th scope="column" class="px-4 py-3 font-bold">Author</th>
            <th scope="column" class="px-4 py-3 font-bold hidden md:table-cell lg:table-cell">My review</th>
          </tr>
        </thead>
        <tbody>
        </tbody>    </table>
      </div>
      `;

      const tableBody = yearSection.querySelector('tbody');

      booksByYear[year].forEach(book => {
      const bookRow = document.createElement('tr');
      bookRow.classList.add('h-entry', 'border-b', 'hover:bg-gray-50', 'transition');
      const statusColor = {
        'To-read': 'gray',
        'Reading': '#42c3ff',
        'Dropped': 'red',
        'Paused': '#ffb459',
        'Done': 'green'
      }[book.status] || 'gray';

      bookRow.innerHTML = `
        <th scope="row" class="align-top px-4 py-3 w-1/3">
          <a href="${book.link || '#'}" class="p-name no-underline font-bold hover:underline" target="_blank">${book.title}</a><br>
          <span class="hide-large">
            <span class="BookStatus-${book.status.replace(/\s+/g, '')} text-xs" style="color: ${statusColor};">${book.status}</span>
          </span>
        </th>
        <td class="align-top px-4 py-3 w-1/3">${book.author}</td>
        <td class="align-top w-1/3 px-4 py-3 hidden md:table-cell lg:table-cell">${book.review}
        </td>`;
      tableBody.appendChild(bookRow);    
      });

      container.appendChild(yearSection);
    });
    })
    .catch(error => console.error('Error loading book data:', error));
</script>