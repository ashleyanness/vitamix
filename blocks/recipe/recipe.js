export default async function decorate(block) {
  block.querySelectorAll('a.button').forEach((button) => {
    button.className = '';
  });
}
