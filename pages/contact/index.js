import { Fragment } from 'react';
import Head from 'next/head';

import ContactForm from '../../components/contact/contact-form';

const ContactPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Contact page</title>
        <meta name="description" content="This is a contact page" />
      </Head>
      <ContactForm />
    </Fragment>
  );
};

export default ContactPage;
