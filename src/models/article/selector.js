
export function listSelector(state) {
  const { page, list, total } = state.article;
  let remaining = (total - list.length);
  remaining = (remaining < 0 ? 0 : remaining);

  return {
    page,
    list,
    total,
    remaining,
  };
}
