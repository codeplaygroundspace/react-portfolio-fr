import { useState } from 'react';

function Form({ name, setName, email, setEmail, company, setCompany }) {
  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="text"
        value={company.url}
        // onChange={e => setCompany(e.target.value)}
        onChange={e => setCompany(prev => ({ ...prev, url: e.target.value }))}
      />
      <button
        onClick={() => {
          setName('');
          setEmail('');
          setCompany({ name: '', employees: 0, url: '' });
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default function Home() {
  const [name, setName] = useState('Guille');
  const [email, setEmail] = useState('demo@gmail.com');
  console.log(name, email);

  const [company, setCompany] = useState({
    name: 'Codewrite',
    employees: 12,
    url: 'https://codewrite.com',
  });
  console.log(company);
  return (
    <main>
      <p>
        Company information: {company.name}, {company.employees}, {company.url}
      </p>
      <Form {...{ name, setName, email, setEmail, company, setCompany }} />
    </main>
  );
}
