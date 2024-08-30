import renderToDOM from '../utils/renderToDom';
// import clearDom from '../utils/clearDom';

const viewAuthor = (item) => {
  const domString = `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${item.email}</h6>
      <div>
        <p class="card-text bold">${item.favorite ? '<span class="badge badge-info sale-badge"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</p>
      </div>
      <hr>
      <i class="fas fa-edit btn btn-info" id="update-author--${item.firebaseKey}">Update</i>
      <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${item.firebaseKey}">Delete</i>
    </div>
  </div>
  `;

  renderToDOM('#view', domString);
};

const showAuthorBooks = (array) => {
  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
            <p class="card-text bold">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
            <hr>
            <i class="btn btn-success fas fa-eye" id="view-book-btn--${item.firebaseKey}">Details</i>
            <i id="edit-book-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info">Update</i>
            <i id="delete-book-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt">Delete</i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export { viewAuthor, showAuthorBooks };
