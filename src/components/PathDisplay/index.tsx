import { useEffect, useState } from 'react';

function getParam(param: string) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param) || '';
}

export default function PathDisplay() {
  const [path, setPath] = useState('');

  useEffect(() => {
    setPath(getParam('originalPath'));
  }, []);

  if (!path) return null;
  return (
    <>
    Are you sure <code>{path}</code> is the correct one?
    </>
  );
}