import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { urlRegExp } from '@/utils/regexps/regexps';
import { useNavigate } from 'react-router-dom';
import { getIdURL } from '@/utils/functions/getIdURL';

const Home = () => {
  const [inputURL, setInputURL] = useState('');
  const [inputError, setInputError] = useState(null);
  const navigate = useNavigate();

  const handleChangeInput = ({ target: { value } }) => {
    setInputURL(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputURL.length === 0) {
      return setInputError(true);
    }

    if (!urlRegExp.test(inputURL)) {
      return setInputError(true);
    }

    const vidId = getIdURL(inputURL);

    navigate(`/download/${vidId}`);
    setInputError(null);
    setInputURL('');
  };

  return (
    <Stack gap={3} className='pt-5 mx-auto' style={{ maxWidth: '700px' }}>
      <h1 className='fs-1 text-center'>TwitterVidDownload</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formTwitterUrl' className='mb-3 mx-3'>
          {inputError
            ? (
            <Form.Control
              placeholder='Insert link'
              type='text' value={inputURL}
              onChange={handleChangeInput}
              isInvalid
            >
            </Form.Control>
              )
            : (
            <Form.Control
              placeholder='Insert link'
              type='text' value={inputURL}
              onChange={handleChangeInput}
            >
            </Form.Control>
              )}
        </Form.Group>

        <Button className='mx-auto d-block' type='submit'>Download</Button>
      </Form>
    </Stack>
  );
};
export default Home;
