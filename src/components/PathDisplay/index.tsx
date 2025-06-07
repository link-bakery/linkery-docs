function getParam(param: string) {
  const params = new URLSearchParams(location.search);
  return params.get(param) || '';
}

export default function PathDisplay() {
  const path = getParam('originalPath');
  if (!path) return null;
  return (
    <>
    Are you sure <code>{path}</code> is the correct one?
    </>
  );
}