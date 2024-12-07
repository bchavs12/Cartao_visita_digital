function toggleMode() {
  const htmlContent = document.documentElement;
  htmlContent.classList.toggle('light')

  const img = document.querySelector('#profile img');

  if (htmlContent.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    img.setAttribute('src', './assets/avatar.png')
  }
}