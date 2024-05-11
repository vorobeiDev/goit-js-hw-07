document.addEventListener('DOMContentLoaded', () => {
  const categoriesList = document.querySelector('#categories');
  const categories = categoriesList.querySelectorAll('.item');
  const totalCategories = categories.length;

  console.log(`Number of categories: ${totalCategories}`);

  categories.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const categoryItems = category.querySelectorAll('li').length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryItems}`);
  });
});