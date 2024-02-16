import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <section>
      <h1>{error.statusText || error.message}</h1>
    </section>
  );
};
export default ErrorPage;
